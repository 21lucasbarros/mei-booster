"use client";

import { scrollToElement } from "@/utils/scrollToElement";
import { TrendingUp, Mail, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 dark:bg-[#151515] text-slate-300 dark:text-slate-400 py-16 px-4 transition-colors border-t border-slate-800 dark:border-[#2A2A2A]">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">MEI Booster</span>
            </div>
            <p className="text-sm text-slate-400 dark:text-slate-500 leading-relaxed">
              Gestão inteligente para MEIs que querem crescer de forma
              organizada e sustentável.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Produto</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#features"
                  className="hover:text-emerald-400 transition-colors"
                  onClick={() => scrollToElement("#features")}
                >
                  Funcionalidades
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-emerald-400 transition-colors"
                  onClick={() => scrollToElement("#pricing")}
                >
                  Preços
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Suporte</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/ajuda"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a
                  href="/contato"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="/privacidade"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Privacidade
                </a>
              </li>
              <li>
                <a
                  href="/termos"
                  className="hover:text-emerald-400 transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-[#2A2A2A] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400 dark:text-slate-500">
            © {currentYear} MEI Booster. Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="mailto:contato@meibooster.com"
              className="w-10 h-10 rounded-lg bg-slate-800 dark:bg-[#1E1E1E] hover:bg-slate-700 dark:hover:bg-[#2A2A2A] flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-slate-400" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-lg bg-slate-800 dark:bg-[#1E1E1E] hover:bg-slate-700 dark:hover:bg-[#2A2A2A] flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
