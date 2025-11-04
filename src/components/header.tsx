"use client";

import { TrendingUp, X, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { scrollToElement } from "@/utils/scrollToElement";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900">
              MEI Booster
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <button
              className="text-slate-600 hover:text-emerald-600 transition-colors duration-300 font-medium"
              onClick={() => scrollToElement("#features")}
            >
              Funcionalidades
            </button>
            <button
              className="text-slate-600 hover:text-emerald-600 transition-colors duration-300 font-medium"
              onClick={() => scrollToElement("#pricing")}
            >
              Preços
            </button>
            <button
              className="text-slate-600 hover:text-emerald-600 transition-colors duration-300 font-medium"
              onClick={() => scrollToElement("#how-it-works")}
            >
              Como Funciona
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-slate-900-hover:text-emerald-600"
            >
              Entrar
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">
              Começar grátis
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-2 border-t border-slate-200/50 mt-4">
            <button
              className="w-full text-left px-4 py-2 text-slate-600 hover:text-emerald-600 transition-colors duration-300 font-medium"
              onClick={() => scrollToElement("#features")}
            >
              Funcionalidades
            </button>
            <button
              className="w-full text-left px-4 py-2 text-slate-600 hover:text-emerald-600 transition-colors duration-300 font-medium"
              onClick={() => scrollToElement("#pricing")}
            >
              Preços
            </button>
            <button
              className="w-full text-left px-4 py-2 text-slate-600 hover:text-emerald-600 transition-colors duration-300 font-medium"
              onClick={() => scrollToElement("#how-it-works")}
            >
              Como Funciona
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
