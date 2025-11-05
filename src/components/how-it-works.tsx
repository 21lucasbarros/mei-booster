"use client";

import { UserPlus, Settings, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Crie sua conta",
    description:
      "Comece em menos de dois minutos. Sem burocracia, sem cartão de crédito — apenas o essencial.",
    step: "01",
  },
  {
    icon: Settings,
    title: "Personalize sua experiência",
    description:
      "Adicione suas informações, conecte vendas e ative alertas inteligentes. Tudo configurado do seu jeito.",
    step: "02",
  },
  {
    icon: TrendingUp,
    title: "Cresça com clareza",
    description:
      "Receba análises automáticas, mantenha obrigações em dia e tome decisões estratégicas baseadas em dados reais.",
    step: "03",
  },
];

export function HowItWorks() {
  return (
    <section
      className="py-24 px-4 bg-slate-50 dark:bg-[#1A1D2E] transition-colors"
      id="#how-it-works"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-50 mb-6">
            Como Funciona
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Em três passos, seu negócio ganha clareza, controle e direção.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-linear-to-r from-emerald-200 via-emerald-400 to-emerald-200 dark:from-emerald-800/40 dark:via-emerald-600/40 dark:to-emerald-800/40"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white dark:bg-[#232842] rounded-2xl p-8 shadow-lg border-2 border-slate-100 dark:border-[#2E3451] hover:border-emerald-200 dark:hover:border-emerald-600/50 transition-all duration-300 hover:shadow-xl">
                <div className="absolute -top-6 left-8 w-12 h-12 bg-linear-to-br from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>

                <div className="mt-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
