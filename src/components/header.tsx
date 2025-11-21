"use client";

import { TrendingUp, X, Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { scrollToElement } from "@/utils/scrollToElement";
import { ThemeToggle } from "./theme-toggle";
import Link from "next/link";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#1E1E1E]/95 backdrop-blur-md border-b border-slate-200/50 dark:border-[#2A2A2A]/50 transition-colors">
      <div className="container mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 cursor-pointer">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-600 to-teal-600 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-slate-50">
              MEI Booster
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <button
              className="text-slate-600 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-medium"
              onClick={() => scrollToElement("#features")}
            >
              Funcionalidades
            </button>
            <button
              className="text-slate-600 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-medium"
              onClick={() => scrollToElement("#pricing")}
            >
              Preços
            </button>
            <button
              className="text-slate-600 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-medium"
              onClick={() => scrollToElement("#how-it-works")}
            >
              Como Funciona
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link href="/login">
              <Button
                variant="ghost"
                className="text-slate-900 dark:text-slate-50 hover:text-emerald-600 dark:hover:text-emerald-400"
              >
                Entrar
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">
                Começar grátis
              </Button>
            </Link>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-900 dark:text-slate-50 hover:bg-slate-100 dark:hover:bg-[#2A2A2A] rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
            <ThemeToggle />
          </div>
        </div>

        {isOpen && (
          <nav className="md:hidden pt-4 pb-2 space-y-2 border-t border-slate-200/50 dark:border-[#2A2A2A]/50 mt-4">
            <button
              className="w-full text-left px-4 py-2 text-slate-600 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-medium"
              onClick={() => scrollToElement("#features")}
            >
              Funcionalidades
            </button>
            <button
              className="w-full text-left px-4 py-2 text-slate-600 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-medium"
              onClick={() => scrollToElement("#pricing")}
            >
              Preços
            </button>
            <button
              className="w-full text-left px-4 py-2 text-slate-600 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-300 font-medium"
              onClick={() => scrollToElement("#how-it-works")}
            >
              Como Funciona
            </button>
            <div className="pt-2 space-y-2">
              <Link href="/login" className="block">
                <Button
                  variant="ghost"
                  className="w-full text-slate-900 dark:text-slate-50 hover:text-emerald-600 dark:hover:text-emerald-400"
                >
                  Entrar
                </Button>
              </Link>
              <Link href="/sign-up" className="block">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">
                  Começar grátis
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
