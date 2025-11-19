"use client";

import { FileText, ArrowLeft, Mail, Scale } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#151515]">
      <div className="relative bg-white dark:bg-[#1E1E1E] border-b border-slate-200 dark:border-[#2A2A2A]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[24px_24px]"></div>

        <div className="container mx-auto max-w-5xl px-6 py-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para home
          </Link>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center shrink-0">
              <FileText className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Termos de Uso
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Regras e condições para uso da plataforma MEI Booster
              </p>
              <p className="text-sm text-slate-500 dark:text-slate-500 mt-3">
                Última atualização:{" "}
                {new Date().toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 py-8">
        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 border border-slate-200 dark:border-[#2A2A2A]">
          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            Ao utilizar a plataforma MEI Booster, você concorda com os termos e
            condições estabelecidos neste documento. Leia atentamente antes de
            prosseguir com o cadastro ou uso dos serviços.
          </p>
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 pb-12">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Aceitação dos Termos</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2 space-y-3 text-base text-slate-600 dark:text-slate-400">
                <p>
                  Ao acessar e usar a plataforma MEI Booster, você
                  automaticamente aceita e concorda em cumprir estes Termos de
                  Uso. Se você não concordar com qualquer parte destes termos,
                  não deverá utilizar nossos serviços.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50 rounded-lg p-3">
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">
                      Importante:
                    </strong>{" "}
                    Reservamo-nos o direito de modificar estes termos a qualquer
                    momento. Alterações serão notificadas por e-mail ou através
                    da plataforma.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Descrição dos Serviços</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2">
                <p className="text-base text-slate-600 dark:text-slate-400 mb-3">
                  A MEI Booster oferece uma plataforma de gestão para
                  Microempreendedores Individuais, incluindo:
                </p>
                <ul className="space-y-1.5 text-base text-slate-600 dark:text-slate-400">
                  <li>• Gestão de vendas e controle financeiro</li>
                  <li>• Geração automática de relatórios fiscais</li>
                  <li>• Lembretes de obrigações tributárias e prazos</li>
                  <li>• Emissão de notas fiscais eletrônicas</li>
                  <li>• Dashboard com análises e insights para seu negócio</li>
                  <li>• Suporte técnico especializado</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>Cadastro e Conta de Usuário</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2 space-y-4">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2 text-base">
                    Requisitos para Cadastro
                  </h4>
                  <ul className="space-y-1.5 text-base text-slate-600 dark:text-slate-400">
                    <li>• Ter 18 anos ou mais</li>
                    <li>• Possuir um CNPJ ativo como MEI</li>
                    <li>• Fornecer informações verdadeiras e atualizadas</li>
                    <li>• Criar uma senha forte e mantê-la segura</li>
                  </ul>
                </div>

                <div className="h-px bg-slate-200 dark:bg-[#2A2A2A]"></div>

                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2 text-base">
                    Responsabilidades do Usuário
                  </h4>
                  <ul className="space-y-1.5 text-base text-slate-600 dark:text-slate-400">
                    <li>• Manter suas credenciais de acesso em sigilo</li>
                    <li>
                      • Notificar imediatamente qualquer uso não autorizado
                    </li>
                    <li>• Manter dados cadastrais atualizados</li>
                    <li>• Não compartilhar sua conta com terceiros</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Pagamento e Cobrança</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2 space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-base">
                    <strong className="text-slate-900 dark:text-white">
                      Formas de Pagamento:
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400">
                      {" "}
                      Cartão, PIX, boleto
                    </span>
                  </div>
                  <div className="text-base">
                    <strong className="text-slate-900 dark:text-white">
                      Renovação:
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400">
                      {" "}
                      Automática nas assinaturas
                    </span>
                  </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-lg p-3">
                  <p className="text-base text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">
                      Política de Cancelamento:
                    </strong>{" "}
                    Você pode cancelar sua assinatura a qualquer momento. O
                    acesso permanecerá ativo até o final do período pago. Não
                    oferecemos reembolso proporcional.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Uso Aceitável da Plataforma</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2">
                <p className="text-base text-slate-600 dark:text-slate-400 mb-3">
                  Você concorda em NÃO utilizar a plataforma para:
                </p>
                <ul className="space-y-1.5 text-base text-slate-600 dark:text-slate-400">
                  <li>• Violar leis ou regulamentos aplicáveis</li>
                  <li>• Realizar atividades fraudulentas ou enganosas</li>
                  <li>• Acessar dados de outros usuários sem autorização</li>
                  <li>• Tentar comprometer a segurança da plataforma</li>
                  <li>
                    • Fazer engenharia reversa ou copiar recursos da plataforma
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Propriedade Intelectual</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2 space-y-3 text-base text-slate-600 dark:text-slate-400">
                <p>
                  Todos os direitos de propriedade intelectual relacionados à
                  plataforma MEI Booster, incluindo mas não limitado a
                  código-fonte, design, logotipos, marcas e conteúdo, são de
                  propriedade exclusiva da MEI Booster.
                </p>
                <div className="bg-slate-50 dark:bg-[#1A1A1A] rounded-lg p-3">
                  <p>
                    <strong className="text-slate-900 dark:text-white">
                      Seus Dados:
                    </strong>{" "}
                    Você mantém todos os direitos sobre os dados que insere na
                    plataforma. Nós apenas processamos essas informações para
                    fornecer nossos serviços.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>Limitação de Responsabilidade</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2 space-y-3">
                <p className="text-base text-slate-600 dark:text-slate-400">
                  A MEI Booster se esforça para manter a plataforma disponível e
                  funcional, mas não podemos garantir operação ininterrupta ou
                  livre de erros.
                </p>
                <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/50 rounded-lg p-3">
                  <p className="text-base text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">
                      Importante:
                    </strong>{" "}
                    Não nos responsabilizamos por decisões financeiras ou
                    fiscais tomadas com base nas informações da plataforma.
                    Recomendamos sempre consultar um contador.
                  </p>
                </div>
                <ul className="space-y-1.5 text-base text-slate-600 dark:text-slate-400">
                  <li>
                    • Não garantimos resultados específicos no seu negócio
                  </li>
                  <li>
                    • Não nos responsabilizamos por perda de dados causada por
                    terceiros
                  </li>
                  <li>
                    • Não somos responsáveis por problemas causados por mau uso
                    da plataforma
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Suspensão e Encerramento</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2">
                <p className="text-base text-slate-600 dark:text-slate-400 mb-3">
                  Reservamo-nos o direito de suspender ou encerrar sua conta nas
                  seguintes situações:
                </p>
                <div className="space-y-2">
                  <div className="text-base">
                    <strong className="text-slate-900 dark:text-white">
                      Violação dos Termos:
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400">
                      {" "}
                      Uso indevido da plataforma ou descumprimento destes termos
                    </span>
                  </div>
                  <div className="text-base">
                    <strong className="text-slate-900 dark:text-white">
                      Inadimplência:
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400">
                      {" "}
                      Falta de pagamento por mais de 15 dias após o vencimento
                    </span>
                  </div>
                  <div className="text-base">
                    <strong className="text-slate-900 dark:text-white">
                      Atividade Suspeita:
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400">
                      {" "}
                      Indícios de fraude ou uso malicioso
                    </span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>Modificações nos Serviços</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2 space-y-3 text-base text-slate-600 dark:text-slate-400">
                <p>
                  Podemos, a qualquer momento, modificar, adicionar ou remover
                  funcionalidades da plataforma. Faremos o possível para
                  notificar os usuários sobre mudanças significativas.
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50 rounded-lg p-3">
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">
                      Melhorias Contínuas:
                    </strong>{" "}
                    Estamos constantemente aprimorando a plataforma para
                    oferecer a melhor experiência possível aos nossos usuários.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>Lei Aplicável e Foro</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2 space-y-3 text-base text-slate-600 dark:text-slate-400">
                <p>
                  Estes Termos de Uso são regidos pelas leis da República
                  Federativa do Brasil. Qualquer controvérsia ou litígio
                  decorrente destes termos será resolvido no foro da comarca de
                  São Paulo, SP.
                </p>
                <div className="bg-slate-50 dark:bg-[#1A1A1A] rounded-lg p-3">
                  <p>
                    <strong className="text-slate-900 dark:text-white">
                      Resolução Amigável:
                    </strong>{" "}
                    Antes de iniciar qualquer processo judicial, encorajamos o
                    contato com nossa equipe para tentarmos resolver qualquer
                    questão de forma amigável.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="container mx-auto max-w-5xl px-6 pb-12">
        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 border border-slate-200 dark:border-[#2A2A2A]">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
            Dúvidas sobre os Termos?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Entre em contato com nossa equipe jurídica ou de suporte para
            esclarecimentos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 p-3 bg-slate-50 dark:bg-[#1A1A1A] rounded-lg">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white mb-1">
                <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Suporte Geral
              </div>
              <a
                href="mailto:suporte@meibooster.com.br"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                suporte@meibooster.com.br
              </a>
            </div>
            <div className="flex-1 p-3 bg-slate-50 dark:bg-[#1A1A1A] rounded-lg">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white mb-1">
                <Scale className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                Jurídico
              </div>
              <a
                href="mailto:juridico@meibooster.com.br"
                className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
              >
                juridico@meibooster.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            MEI Booster — Todos os direitos reservados ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </div>
  );
}
