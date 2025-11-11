import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, "Nome muito curto"),
  email: z.string().email("E-mail inválido"),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = schema.parse(body);

    const exists = await prisma.user.findUnique({ where: { email } });
    if (exists) {
      return NextResponse.json(
        { error: "E-Mail já está cadastrado." },
        { status: 400 },
      );
    }

    const hash = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hash,
      },
    });

    return NextResponse.json({ message: "Usuário criado com sucesso!" });
  } catch (err) {
    return NextResponse.json(
      { error: "Erro ao criar usuário" },
      { status: 500 },
    );
  }
}
