import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { z } from "zod";
import {
  sanitizeInput,
  normalizeEmail,
  validatePasswordStrength,
} from "@/lib/security";

const schema = z.object({
  name: z.string().min(3, "Nome muito curto"),
  email: z.string().email("E-mail inválido"),
  cnpj: z.string().min(14, "CNPJ inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  razaoSocial: z.string().optional(),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    let { name, email, cnpj, telefone, razaoSocial, password } =
      schema.parse(body);

    // Sanitiza inputs
    name = sanitizeInput(name);
    email = normalizeEmail(email);
    if (razaoSocial) razaoSocial = sanitizeInput(razaoSocial);

    // Valida força da senha
    const passwordValidation = validatePasswordStrength(password);
    if (!passwordValidation.isValid) {
      return NextResponse.json(
        { error: passwordValidation.errors[0] },
        { status: 400 }
      );
    }

    // Verifica se email já existe
    const emailExists = await prisma.user.findUnique({ where: { email } });
    if (emailExists) {
      return NextResponse.json(
        { error: "E-Mail já está cadastrado." },
        { status: 400 }
      );
    }

    // Verifica se CNPJ já existe
    const cnpjExists = await prisma.user.findUnique({ where: { cnpj } });
    if (cnpjExists) {
      return NextResponse.json(
        { error: "CNPJ já está cadastrado." },
        { status: 400 }
      );
    }

    const hash = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        cnpj,
        telefone,
        razaoSocial,
        password: hash,
      },
    });

    return NextResponse.json({ message: "Usuário criado com sucesso!" });
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao criar usuário" },
      { status: 500 }
    );
  }
}
