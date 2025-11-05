"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 px-4 bg-linear-to-br from-emerald-600 via-teal-600 to-emerald-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium text-white">
            <Sparkles className="w-4 h-4" />
            Empreendedores que escolhem clareza, não caos.
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Pronto para elevar a gestão do seu negócio a um novo padrão?
          </h2>

          <p className="text-xl text-emerald-50 max-w-2xl mx-auto leading-relaxed">
            Comece gratuitamente e experimente a tranquilidade de ter prazos,
            vendas e documentos sob controle — com alertas inteligentes e
            insights que impulsionam crescimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-white hover:bg-slate-50 text-emerald-600 px-8 h-14 text-lg rounded-xl shadow-xl"
            >
              Criar minha conta gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg rounded-xl border-2 border-white/40 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 hover:border-white/60 transition-all shadow-lg"
            >
              Ver demonstração
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15M+</div>
              <div className="text-emerald-100 text-sm">MEIs no Brasil</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">R$ 5-8k</div>
              <div className="text-emerald-100 text-sm">MRR Potencial</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-emerald-100 text-sm">Satisfação</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
