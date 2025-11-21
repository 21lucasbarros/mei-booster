import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sanitizeInput } from "@/lib/security";
import { checkRateLimit, recordFailedAttempt } from "@/lib/rate-limit";

const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres"),
  email: z.string().email("Email inválido"),
  subject: z.string().min(5, "Assunto deve ter no mínimo 5 caracteres"),
  message: z.string().min(20, "Mensagem deve ter no mínimo 20 caracteres"),
});

// Map para controle de mensagens de contato (3 mensagens por hora)
const contactAttempts = new Map<string, { count: number; resetAt: number }>();

const CONTACT_RATE_LIMIT = {
  MAX_MESSAGES: 3,
  WINDOW_MS: 60 * 60 * 1000, // 1 hora
};

export async function POST(request: NextRequest) {
  try {
    // Rate limiting por IP para mensagens de contato
    const ip = request.headers.get("x-forwarded-for") || "anonymous";
    const now = Date.now();
    const attempt = contactAttempts.get(ip);

    // Limpa tentativas antigas
    if (attempt && now > attempt.resetAt) {
      contactAttempts.delete(ip);
    }

    const currentAttempt = contactAttempts.get(ip);

    if (
      currentAttempt &&
      currentAttempt.count >= CONTACT_RATE_LIMIT.MAX_MESSAGES
    ) {
      const minutesRemaining = Math.ceil(
        (currentAttempt.resetAt - now) / 60000
      );
      return NextResponse.json(
        {
          error: `Muitas mensagens enviadas. Tente novamente em ${minutesRemaining} minuto${
            minutesRemaining > 1 ? "s" : ""
          }.`,
        },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validação com Zod
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.issues[0].message },
        { status: 400 }
      );
    }

    const { name, email, subject, message } = result.data;

    // Sanitizar inputs
    const sanitizedData = {
      name: sanitizeInput(name),
      email: sanitizeInput(email.toLowerCase().trim()),
      subject: sanitizeInput(subject),
      message: sanitizeInput(message),
    };

    // TODO: Aqui você pode integrar com um serviço de email como:
    // - SendGrid
    // - Resend
    // - Nodemailer
    // - AWS SES
    // Ou salvar no banco de dados

    console.log("Mensagem de contato recebida:", sanitizedData);

    // Por enquanto, apenas logamos
    // Em produção, você enviaria um email para sua equipe

    // Registra tentativa de envio
    if (!currentAttempt) {
      contactAttempts.set(ip, {
        count: 1,
        resetAt: now + CONTACT_RATE_LIMIT.WINDOW_MS,
      });
    } else {
      currentAttempt.count++;
    }

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao processar contato:", error);
    return NextResponse.json(
      { error: "Erro ao enviar mensagem. Tente novamente." },
      { status: 500 }
    );
  }
}
