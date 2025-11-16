"use client";

import { Card } from "@/components/ui/card";
import {
  CalendarCheck,
  TrendingUp,
  Lightbulb,
  FolderLock,
  Mail,
  MessageSquare,
  Zap,
  Users,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Agenda de Obrigações",
    description:
      "Alertas refinados para DAS, declarações e vencimentos essenciais. Tranquilidade para nunca perder um prazo.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Painel de Vendas",
    description:
      "Todas as vendas em um único lugar. Ticket médio, faturamento em tempo real e integração com Stripe — clareza para decidir.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Insights de Crescimento",
    description:
      "Análises inteligentes baseadas no seu histórico: produtos mais rentáveis, horários de maior conversão e oportunidades estratégicas.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: FolderLock,
    title: "Documentos Seguros",
    description:
      "Certificados, contratos e recibos protegidos em um cofre digital. Acesso rápido, segurança absoluta.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Mail,
    title: "Notificações por E-mail",
    description:
      "Alertas elegantes e resumos inteligentes direto na sua caixa de entrada. Gestão sem ruídos, apenas o essencial.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: MessageSquare,
    title: "Alertas por SMS",
    description:
      "Para prazos críticos, notificações via SMS garantem que nada passe despercebido. É controle na palma da sua mão.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Integrações Externas",
    description:
      "Conecte marketplaces, emissores de nota e outras plataformas. Automatize fluxos e ganhe tempo de verdade.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Users,
    title: "Solução B2B",
    description:
      "Dashboard para contadores e empresas parceiras. Uma estrutura elegante para escalar operações com eficiência.",
    color: "from-slate-500 to-gray-600",
  },
];

export function Features() {
  return (
    <section
      className="py-24 px-4 bg-[#f7f7f7] dark:bg-[#1A1A1A] transition-colors"
      id="#features"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            O nível mais elegante de gestão para MEIs
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Simplicidade na rotina. Precisão nas finanças. Estratégia no
            crescimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-slate-200 dark:hover:border-[#2A2A2A] group cursor-pointer dark:bg-[#1E1E1E] dark:border-[#2A2A2A]"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
