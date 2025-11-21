import { NextResponse } from "next/server";
import { cleanCNPJ, isValidCNPJ } from "@/utils/cnpj";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ cnpj: string }> }
) {
  try {
    const { cnpj: cnpjParam } = await params;
    const cnpj = cleanCNPJ(cnpjParam);

    if (!isValidCNPJ(cnpj)) {
      return NextResponse.json({ error: "CNPJ inválido" }, { status: 400 });
    }

    // consulta ReceitaWS
    const response = await fetch(
      `https://www.receitaws.com.br/v1/cnpj/${cnpj}`,
      {
        next: { revalidate: 86400 }, // cache de 24h
      }
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "CNPJ não encontrado na Receita Federal" },
        { status: 404 }
      );
    }

    const data = await response.json();

    // verifica se a API retornou erro
    if (data.status === "ERROR") {
      return NextResponse.json(
        { error: data.message || "CNPJ não encontrado" },
        { status: 404 }
      );
    }

    // retorna dados formatados
    return NextResponse.json({
      cnpj: data.cnpj,
      razaoSocial: data.nome || data.fantasia,
      nomeFantasia: data.fantasia,
      atividade: data.atividade_principal?.[0]?.text,
      cnae: data.atividade_principal?.[0]?.code,
      situacao: data.situacao,
      dataAbertura: data.abertura,
    });
  } catch (error) {
    console.error("Erro ao consultar CNPJ:", error);
    return NextResponse.json(
      { error: "Erro ao consultar CNPJ" },
      { status: 500 }
    );
  }
}
