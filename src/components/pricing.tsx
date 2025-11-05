"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    price: "R$ 0",
    period: "/mês",
    description: "Para começar com organização e clareza",
    features: [
      "Agenda básica de obrigações (DAS, declarações, vencimentos)",
      "Painel de vendas manual",
      "Até 50 vendas/mês",
      "Alertas por e-mail",
      "Suporte via e-mail",
    ],
    cta: "Iniciar gratuitamente",
    popular: false,
  },
  {
    name: "Premium",
    price: "R$ 67",
    period: "/mês",
    description: "Para MEIs que querem escala, previsibilidade e crescimento",
    features: [
      "Todas as funcionalidades do Essencial",
      "Vendas ilimitadas",
      "Alertas inteligentes por SMS",
      "Insights automáticos de crescimento",
      "Integrações externas (Stripe, marketplaces etc.)",
      "Armazenamento ilimitado de documentos",
      "Dashboard B2B para contador ou parceiro",
      "Suporte prioritário com atendimento rápido",
    ],
    cta: "Assinar Premium",
    popular: true,
  },
];

export function Pricing() {
  return (
    <section
      className="py-24 px-4 bg-[#f7f7f7] dark:bg-[#151823] transition-colors"
      id="#pricing"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Planos Transparentes
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Comece gratuitamente e evolua para o nível que o seu negócio merece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 relative ${
                plan.popular
                  ? "border-2 border-emerald-600 shadow-2xl shadow-emerald-600/20 scale-105 dark:bg-[#232842]"
                  : "border-2 border-slate-200 dark:border-[#2E3451] dark:bg-[#232842]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-emerald-600 to-teal-600 text-white text-sm font-semibold rounded-full flex items-center gap-1">
                  <Sparkles className="w-4 h-4" />
                  Mais Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-slate-900 dark:text-slate-50">
                    {plan.price}
                  </span>
                  <span className="text-slate-600 dark:text-slate-300">
                    {plan.period}
                  </span>
                </div>
              </div>

              <Button
                className={`w-full h-12 text-lg rounded-xl mb-8 ${
                  plan.popular
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-600/30"
                    : "bg-slate-900 hover:bg-slate-800 dark:bg-[#2E3451] dark:hover:bg-[#3A3E5A] text-white"
                }`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                        plan.popular
                          ? "bg-emerald-100 dark:bg-emerald-900/40"
                          : "bg-slate-100 dark:bg-[#2E3451]"
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.popular
                            ? "text-emerald-600 dark:text-emerald-400"
                            : "text-slate-600 dark:text-slate-300"
                        }`}
                      />
                    </div>
                    <span className="text-slate-700 dark:text-slate-200 text-sm leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600 dark:text-slate-300 text-sm">
            Todos os planos incluem 14 dias de garantia. Cancele quando quiser.
          </p>
        </div>
      </div>
    </section>
  );
}
