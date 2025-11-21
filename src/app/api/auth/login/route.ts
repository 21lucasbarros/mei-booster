import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { z } from "zod";
import { generateToken } from "@/lib/auth";
import { cleanCNPJ } from "@/utils/cnpj";
import {
  checkRateLimit,
  recordFailedAttempt,
  clearAttempts,
} from "@/lib/rate-limit";
import { sanitizeInput, normalizeEmail } from "@/lib/security";

const schema = z.object({
  emailOrCnpj: z.string().min(1, "E-mail ou CNPJ é obrigatório"),
  password: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { emailOrCnpj, password } = schema.parse(body);

    // Sanitiza inputs
    emailOrCnpj = sanitizeInput(emailOrCnpj);

    // Rate limiting
    const rateLimit = checkRateLimit(emailOrCnpj);
    if (!rateLimit.allowed) {
      return NextResponse.json(
        {
          error: "Muitas tentativas de login. Tente novamente mais tarde.",
          resetAt: rateLimit.resetAt,
        },
        { status: 429 }
      );
    }

    // Detecta se é email ou CNPJ
    const isEmail = emailOrCnpj.includes("@");
    const searchValue = isEmail
      ? normalizeEmail(emailOrCnpj)
      : cleanCNPJ(emailOrCnpj);

    // Busca usuário por email OU CNPJ
    const user = await prisma.user.findFirst({
      where: isEmail ? { email: searchValue } : { cnpj: searchValue },
    });

    if (!user) {
      recordFailedAttempt(emailOrCnpj);
      // Delay proposital para dificultar ataques de timing
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json(
        { error: "Credenciais inválidas." },
        { status: 401 }
      );
    }

    const isCorrect = await bcrypt.compare(password, user.password);
    if (!isCorrect) {
      recordFailedAttempt(emailOrCnpj);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json(
        { error: "Credenciais inválidas." },
        { status: 401 }
      );
    }

    // Limpa tentativas após sucesso
    clearAttempts(emailOrCnpj);

    const token = generateToken({
      id: user.id,
      email: user.email,
      plan: user.plan,
    });

    const response = NextResponse.json({
      message: "Autenticado com sucesso!",
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        plan: user.plan,
      },
    });

    response.cookies.set("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Erro no login:", error);
    return NextResponse.json({ error: "Erro no login." }, { status: 500 });
  }
}
