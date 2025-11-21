/**
 * Sanitiza input para prevenir XSS (básico)
 */
export function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, "") // Remove tags HTML básicas
    .replace(/javascript:/gi, "") // Remove javascript: protocol
    .replace(/on\w+=/gi, "") // Remove event handlers
    .trim();
}

/**
 * Valida força da senha
 */
export function validatePasswordStrength(password: string): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Senha deve ter no mínimo 8 caracteres");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Senha deve ter pelo menos uma letra maiúscula");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Senha deve ter pelo menos uma letra minúscula");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Senha deve ter pelo menos um número");
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    errors.push("Senha deve ter pelo menos um caractere especial");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

/**
 * Valida e normaliza email
 */
export function normalizeEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Previne timing attacks ao comparar strings
 */
export function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false;
  }

  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }

  return result === 0;
}
