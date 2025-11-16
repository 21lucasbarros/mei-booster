import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

export function DemoHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1E1E1E]/95 backdrop-blur-md border-b border-slate-200/50 dark:border-[#2A2A2A]/50 transition-colors">
      <div className="container mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                MEI Booster
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Experiência Interativa
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/">
              <Button variant="ghost" size="sm" className="hidden sm:flex">
                Voltar
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button
                size="sm"
                className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg"
              >
                Começar Agora
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
