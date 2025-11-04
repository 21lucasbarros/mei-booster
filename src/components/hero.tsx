import {
  ArrowRight,
  BarChart3,
  Bell,
  FileText,
  TrendingUp,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 px-4">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-sm font-medium text-slate-700">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            Mais de 15 milhões de MEIs no Brasil
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 max-w-4xl leading-tight">
            Gestão Inteligente para o Seu{" "}
            <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              MEI
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed">
            Nunca mais perca prazos de DAS ou se perca com vendas. Centralize
            obrigações, controle faturamento e receba insights de crescimento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 h-14 text-lg rounded-xl shadow-lg shadow-emerald-600/30"
            >
              Começar Gratuitamente
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg rounded-xl border-2"
            >
              Ver Demonstração
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl">
            {[
              {
                icon: Bell,
                label: "Alertas Automáticos",
                color: "text-amber-600",
              },
              {
                icon: BarChart3,
                label: "Painel de Vendas",
                color: "text-blue-600",
              },
              {
                icon: TrendingUp,
                label: "Insights de Crescimento",
                color: "text-emerald-600",
              },
              {
                icon: FileText,
                label: "Documentos Seguros",
                color: "text-violet-600",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center border border-slate-200">
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <p className="text-sm font-medium text-slate-700">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
