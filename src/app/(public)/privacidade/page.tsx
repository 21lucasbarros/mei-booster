"use client";

import {
  Shield,
  ArrowLeft,
  Mail,
  ShieldCheck,
  Lock,
  Eye,
  Database,
  CheckCircle,
  Zap,
  Settings,
  BarChart3,
  Target,
} from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#151515]">
      {/* Header */}
      <div className="relative bg-white dark:bg-[#1E1E1E] border-b border-slate-200 dark:border-[#2A2A2A]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[24px_24px]"></div>

        <div className="container mx-auto max-w-5xl px-6 py-8 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para home
          </Link>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/20 flex items-center justify-center shrink-0">
              <Shield className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">
                Política de Privacidade
              </h1>
              <p className="text-slate-600 dark:text-slate-400">
                Como protegemos e utilizamos seus dados pessoais
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

      {/* Intro */}
      <div className="container mx-auto max-w-5xl px-6 py-8">
        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 border border-slate-200 dark:border-[#2A2A2A]">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            A MEI Booster está comprometida em proteger sua privacidade. Esta
            política descreve como coletamos, usamos e protegemos suas
            informações pessoais, em total conformidade com a{" "}
            <strong className="text-slate-900 dark:text-white">
              Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)
            </strong>
            .
          </p>
        </div>
      </div>

      {/* Accordion Content */}
      <div className="container mx-auto max-w-5xl px-6 pb-12">
        <Accordion type="single" collapsible className="w-full">
          {/* Item 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger>Informações que Coletamos</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="space-y-4 pt-2">
                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2 text-sm">
                    Informações Fornecidas por Você
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <li>
                      • Nome completo e informações de contato (e-mail,
                      telefone)
                    </li>
                    <li>• Dados cadastrais da empresa (CNPJ, razão social)</li>
                    <li>• Informações financeiras e tributárias do MEI</li>
                    <li>• Dados de vendas e transações comerciais</li>
                    <li>
                      • Informações de pagamento (processadas por terceiros
                      seguros)
                    </li>
                  </ul>
                </div>

                <div className="h-px bg-slate-200 dark:bg-[#2A2A2A]"></div>

                <div>
                  <h4 className="font-medium text-slate-900 dark:text-white mb-2 text-sm">
                    Informações Coletadas Automaticamente
                  </h4>
                  <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                    <li>• Endereço IP e dados de localização</li>
                    <li>• Tipo de navegador e dispositivo utilizado</li>
                    <li>• Páginas visitadas e tempo de navegação</li>
                    <li>• Cookies e tecnologias similares de rastreamento</li>
                  </ul>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Item 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Como Utilizamos suas Informações
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Utilizamos suas informações exclusivamente para:
                </p>
                <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                  <li>
                    • Fornecer e melhorar nossos serviços de gestão para MEI
                  </li>
                  <li>• Processar pagamentos e transações financeiras</li>
                  <li>• Gerar relatórios fiscais e documentos obrigatórios</li>
                  <li>
                    • Enviar notificações importantes sobre sua conta e
                    obrigações fiscais
                  </li>
                  <li>• Personalizar sua experiência na plataforma</li>
                  <li>• Cumprir obrigações legais e regulatórias</li>
                  <li>
                    • Prevenir fraudes e garantir a segurança da plataforma
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Item 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger>Compartilhamento de Informações</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2 space-y-3">
                <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-200 dark:border-emerald-800/50 rounded-lg p-3">
                  <p className="text-sm font-medium text-emerald-900 dark:text-emerald-100">
                    Não vendemos suas informações pessoais para terceiros.
                  </p>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Compartilhamos dados apenas quando estritamente necessário:
                </p>

                <div className="space-y-2">
                  <div className="text-sm">
                    <strong className="text-slate-900 dark:text-white">
                      Prestadores de Serviços:
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400">
                      {" "}
                      Empresas que auxiliam na operação da plataforma
                    </span>
                  </div>
                  <div className="text-sm">
                    <strong className="text-slate-900 dark:text-white">
                      Obrigações Legais:
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400">
                      {" "}
                      Quando exigido por lei ou ordem judicial
                    </span>
                  </div>
                  <div className="text-sm">
                    <strong className="text-slate-900 dark:text-white">
                      Órgãos Governamentais:
                    </strong>
                    <span className="text-slate-600 dark:text-slate-400">
                      {" "}
                      Para cumprimento de obrigações fiscais e tributárias
                    </span>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Item 4 */}
          <AccordionItem value="item-4">
            <AccordionTrigger>Segurança dos Dados</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2">
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                  Implementamos medidas rigorosas para proteger suas
                  informações:
                </p>
                <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                  <li className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>
                      Criptografia SSL/TLS 256-bit para dados em trânsito e em
                      repouso
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>
                      Autenticação multifator e controles de acesso rigorosos
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>
                      Monitoramento 24/7 com detecção de incidentes em tempo
                      real
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Database className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Backups automáticos e recuperação de desastres</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Auditorias regulares e testes de penetração</span>
                  </li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Item 5 */}
          <AccordionItem value="item-5">
            <AccordionTrigger>Seus Direitos pela LGPD</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2 space-y-3">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  De acordo com a Lei Geral de Proteção de Dados, você tem
                  direito a:
                </p>
                <ul className="space-y-1.5 text-sm text-slate-600 dark:text-slate-400">
                  <li>• Confirmar a existência de tratamento de dados</li>
                  <li>• Acessar seus dados pessoais</li>
                  <li>• Corrigir dados incompletos ou desatualizados</li>
                  <li>• Solicitar a portabilidade de seus dados</li>
                  <li>• Eliminar dados tratados com seu consentimento</li>
                  <li>• Revogar o consentimento a qualquer momento</li>
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800/50 rounded-lg p-3">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    <strong className="text-slate-900 dark:text-white">
                      Para exercer seus direitos:
                    </strong>{" "}
                    Entre em contato através do e-mail{" "}
                    <a
                      href="mailto:privacidade@meibooster.com.br"
                      className="text-emerald-600 dark:text-emerald-400 font-medium hover:underline"
                    >
                      privacidade@meibooster.com.br
                    </a>
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Item 6 */}
          <AccordionItem value="item-6">
            <AccordionTrigger>Cookies e Tecnologias Similares</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <div className="pt-2 space-y-3">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  Utilizamos cookies para melhorar sua experiência. Você pode
                  controlá-los nas configurações do navegador.
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <div className="flex items-start gap-2 text-sm">
                    <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 dark:text-white">
                        Essenciais:
                      </strong>
                      <span className="text-slate-600 dark:text-slate-400">
                        {" "}
                        Necessários para funcionamento
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Settings className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 dark:text-white">
                        Funcionais:
                      </strong>
                      <span className="text-slate-600 dark:text-slate-400">
                        {" "}
                        Lembram suas preferências
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <BarChart3 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 dark:text-white">
                        Analíticos:
                      </strong>
                      <span className="text-slate-600 dark:text-slate-400">
                        {" "}
                        Entendem uso da plataforma
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-slate-900 dark:text-white">
                        Marketing:
                      </strong>
                      <span className="text-slate-600 dark:text-slate-400">
                        {" "}
                        Apenas com consentimento
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      {/* Footer Contact */}
      <div className="container mx-auto max-w-5xl px-6 pb-12">
        <div className="bg-white dark:bg-[#1E1E1E] rounded-xl p-6 border border-slate-200 dark:border-[#2A2A2A]">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
            Dúvidas sobre Privacidade?
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            Nossa equipe está pronta para esclarecer qualquer questão sobre como
            protegemos seus dados.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 p-3 bg-slate-50 dark:bg-[#1A1A1A] rounded-lg">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white mb-1">
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Privacidade
              </div>
              <a
                href="mailto:privacidade@meibooster.com.br"
                className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                privacidade@meibooster.com.br
              </a>
            </div>
            <div className="flex-1 p-3 bg-slate-50 dark:bg-[#1A1A1A] rounded-lg">
              <div className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white mb-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                Encarregado de Dados (DPO)
              </div>
              <a
                href="mailto:dpo@meibooster.com.br"
                className="text-sm text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                dpo@meibooster.com.br
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            Esta Política de Privacidade está em conformidade com a{" "}
            <strong className="text-slate-700 dark:text-slate-400">
              Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
