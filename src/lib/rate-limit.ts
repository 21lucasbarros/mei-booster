// Rate limiting simples em memória (para produção, use Redis)
const loginAttempts = new Map<string, { count: number; resetAt: number }>();

const RATE_LIMIT = {
  MAX_ATTEMPTS: 5,
  WINDOW_MS: 15 * 60 * 1000, // 15 minutos
  BLOCK_DURATION_MS: 30 * 60 * 1000, // 30 minutos
};

export function checkRateLimit(identifier: string): {
  allowed: boolean;
  remainingAttempts?: number;
  resetAt?: number;
} {
  const now = Date.now();
  const attempt = loginAttempts.get(identifier);

  // Limpa tentativas antigas
  if (attempt && now > attempt.resetAt) {
    loginAttempts.delete(identifier);
  }

  const currentAttempt = loginAttempts.get(identifier);

  if (!currentAttempt) {
    return { allowed: true, remainingAttempts: RATE_LIMIT.MAX_ATTEMPTS };
  }

  if (currentAttempt.count >= RATE_LIMIT.MAX_ATTEMPTS) {
    return {
      allowed: false,
      resetAt: currentAttempt.resetAt,
    };
  }

  return {
    allowed: true,
    remainingAttempts: RATE_LIMIT.MAX_ATTEMPTS - currentAttempt.count,
  };
}

export function recordFailedAttempt(identifier: string): void {
  const now = Date.now();
  const attempt = loginAttempts.get(identifier);

  if (!attempt || now > attempt.resetAt) {
    loginAttempts.set(identifier, {
      count: 1,
      resetAt: now + RATE_LIMIT.WINDOW_MS,
    });
  } else {
    attempt.count++;
    if (attempt.count >= RATE_LIMIT.MAX_ATTEMPTS) {
      attempt.resetAt = now + RATE_LIMIT.BLOCK_DURATION_MS;
    }
  }
}

export function clearAttempts(identifier: string): void {
  loginAttempts.delete(identifier);
}

// Limpa cache a cada hora
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of loginAttempts.entries()) {
    if (now > value.resetAt) {
      loginAttempts.delete(key);
    }
  }
}, 60 * 60 * 1000);
