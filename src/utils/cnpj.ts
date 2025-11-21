/**
 * Remove caracteres não numéricos do CNPJ
 */
export function cleanCNPJ(cnpj: string): string {
  return cnpj.replace(/\D/g, "");
}

/**
 * Formata CNPJ para o padrão XX.XXX.XXX/XXXX-XX
 */
export function formatCNPJ(cnpj: string): string {
  const clean = cleanCNPJ(cnpj);

  if (clean.length !== 14) return cnpj;

  return clean.replace(
    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
    "$1.$2.$3/$4-$5"
  );
}

/**
 * Valida CNPJ usando algoritmo de dígitos verificadores
 */
export function isValidCNPJ(cnpj: string): boolean {
  const clean = cleanCNPJ(cnpj);

  // CNPJ deve ter 14 dígitos
  if (clean.length !== 14) return false;

  // Rejeita CNPJs com todos os dígitos iguais
  if (/^(\d)\1+$/.test(clean)) return false;

  // Validação do primeiro dígito verificador
  let sum = 0;
  let weight = 5;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(clean[i]) * weight;
    weight = weight === 2 ? 9 : weight - 1;
  }
  let digit1 = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (digit1 !== parseInt(clean[12])) return false;

  // Validação do segundo dígito verificador
  sum = 0;
  weight = 6;
  for (let i = 0; i < 13; i++) {
    sum += parseInt(clean[i]) * weight;
    weight = weight === 2 ? 9 : weight - 1;
  }
  let digit2 = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (digit2 !== parseInt(clean[13])) return false;

  return true;
}

/**
 * Formata telefone para o padrão (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
 */
export function formatPhone(phone: string): string {
  const clean = phone.replace(/\D/g, "");

  if (clean.length === 11) {
    return clean.replace(/^(\d{2})(\d{5})(\d{4})$/, "($1) $2-$3");
  }

  if (clean.length === 10) {
    return clean.replace(/^(\d{2})(\d{4})(\d{4})$/, "($1) $2-$3");
  }

  return phone;
}
