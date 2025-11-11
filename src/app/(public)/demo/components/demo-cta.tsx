"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import Link from "next/link";

export function DemoCTA() {
  return (
    <Card className="mt-12 bg-linear-to-br from-emerald-600 via-emerald-600 to-teal-600 text-white border-0 overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <CardContent className="p-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
          <Sparkles className="w-4 h-4" />
          <span className="text-sm font-semibold">
            Plano Gratuito Disponível
          </span>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Pronto para transformar
          <br />a gestão do seu MEI?
        </h3>

        <p className="text-emerald-50 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Junte-se a milhares de empreendedores que já descobriram como é fácil
          gerenciar um negócio com as ferramentas certas.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/sign-up">
            <Button
              size="lg"
              variant="secondary"
              className="h-14 px-8 text-base font-semibold shadow-xl hover:scale-105 transition-transform"
            >
              Começar Gratuitamente
            </Button>
          </Link>
          <Link href="/">
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base font-semibold border-2 border-white/40 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 hover:border-white/60 transition-all shadow-lg hover:scale-105"
            >
              Explorar Recursos
            </Button>
          </Link>
        </div>

        <p className="text-emerald-100 text-sm mt-6">
          Sem cartão de crédito • Configuração em 2 minutos • Suporte
          especializado
        </p>
      </CardContent>
    </Card>
  );
}
