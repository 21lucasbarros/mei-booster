import { z } from "zod";

// schema de login
export const loginSchema = z.object({
  email: z.string().email("E-Mail inválido."),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
});
export type LoginSchema = z.infer<typeof loginSchema>;

// schema de sign-up
export const signUpSchema = z
  .object({
    name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres."),
    email: z.string().email("E-Mail inválido."),
    password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
    confirmPassword: z.string().min(8, "Confirme sua senha."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem.",
    path: ["confirmPassword"],
  });
export type SignUpSchema = z.infer<typeof signUpSchema>;
