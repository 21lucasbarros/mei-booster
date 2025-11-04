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
      "Alertas automáticos de DAS, declarações anuais e vencimentos de boletos. Nunca mais perca um prazo importante.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: TrendingUp,
    title: "Painel de Vendas",
    description:
      "Centralize suas vendas, calcule ticket médio e acompanhe o faturamento em tempo real. Integração com Stripe disponível.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Insights de Crescimento",
    description:
      "Sugestões inteligentes baseadas no seu histórico: produtos mais vendidos, horários de pico e oportunidades de upsell.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: FolderLock,
    title: "Documentos Seguros",
    description:
      "Armazene certificados, contratos e recibos com segurança. Acesso rápido quando você precisar.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Mail,
    title: "Notificações por E-mail",
    description:
      "Resumos diários, alertas e lembretes entregues diretamente no seu e-mail. Mantenha-se sempre informado.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: MessageSquare,
    title: "Alertas por SMS",
    description:
      "Receba notificações urgentes via SMS. Ideal para prazos críticos que não podem ser perdidos.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: Zap,
    title: "Integrações Externas",
    description:
      "Conecte com marketplaces, emissores de notas e outras ferramentas. Automatize seu fluxo de trabalho.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: Users,
    title: "Solução B2B",
    description:
      "Dashboards para contadores e empresas parceiras. Escale seu negócio com nossa plataforma.",
    color: "from-slate-500 to-gray-600",
  },
];

export function Features() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Tudo que seu MEI precisa em um só lugar
          </h2>
          <p className="text-xl text-slate-600">
            Simplifique sua gestão com ferramentas inteligentes e centralizadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-slate-200 group cursor-pointer"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-linear-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
