import { z } from "zod";
import { isValidCNPJ, cleanCNPJ } from "@/utils/cnpj";

// schema de login
export const loginSchema = z.object({
  emailOrCnpj: z
    .string({ message: "E-mail ou CNPJ é obrigatório." })
    .min(1, "E-mail ou CNPJ é obrigatório."),
  password: z
    .string({ message: "Senha é obrigatória." })
    .min(8, "A senha deve ter no mínimo 8 caracteres."),
});
export type LoginSchema = z.infer<typeof loginSchema>;

// schema de sign-up
export const signUpSchema = z
  .object({
    name: z
      .string({ message: "Nome é obrigatório." })
      .min(3, "Nome deve ter no mínimo 3 caracteres."),
    email: z
      .string({ message: "E-mail é obrigatório." })
      .email("E-Mail inválido."),
    cnpj: z
      .string({ message: "CNPJ é obrigatório." })
      .min(1, "CNPJ é obrigatório.")
      .refine((val) => isValidCNPJ(val), {
        message: "CNPJ inválido.",
      }),
    telefone: z
      .string({ message: "Telefone é obrigatório." })
      .min(1, "Telefone é obrigatório.")
      .refine(
        (val) => {
          const clean = val.replace(/\D/g, "");
          return clean.length === 10 || clean.length === 11;
        },
        {
          message: "Telefone inválido.",
        }
      ),
    password: z
      .string({ message: "Senha é obrigatória." })
      .min(8, "A senha deve ter no mínimo 8 caracteres.")
      .refine((val) => /[A-Z]/.test(val), {
        message: "Senha deve ter pelo menos uma letra maiúscula.",
      })
      .refine((val) => /[a-z]/.test(val), {
        message: "Senha deve ter pelo menos uma letra minúscula.",
      })
      .refine((val) => /[0-9]/.test(val), {
        message: "Senha deve ter pelo menos um número.",
      })
      .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
        message: "Senha deve ter pelo menos um caractere especial.",
      }),
    confirmPassword: z
      .string({ message: "Confirmação de senha é obrigatória." })
      .min(8, "Confirme sua senha."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });
export type SignUpSchema = z.infer<typeof signUpSchema>;
