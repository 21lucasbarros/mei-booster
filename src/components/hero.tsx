"use client";

import {
  ArrowRight,
  BarChart3,
  Bell,
  FileText,
  TrendingUp,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 px-4 bg-[#f7f7f7] dark:bg-[#1A1A1A] transition-colors">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[24px_24px]"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2A2A2A] text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors"
          >
            <TrendingUp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            O mercado que movimenta mais de 15 milhões de negócios no Brasil.
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-slate-50 max-w-4xl leading-tight"
          >
            Gestão Inteligente para o Seu{" "}
            <span className="bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              MEI
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
          >
            Nunca mais deixe um DAS passar despercebido — e nem uma venda sem
            controle. Centralize obrigações, monitore seu faturamento com
            clareza absoluta e receba análises inteligentes para elevar o
            crescimento do seu negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Link href="/sign-up">
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 h-14 text-lg rounded-xl shadow-lg shadow-emerald-600/30"
              >
                Começar Gratuitamente
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg rounded-xl border-2 dark:border-[#2A2A2A] dark:text-slate-200 dark:hover:bg-[#1E1E1E]"
              >
                Ver Demonstração
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 w-full max-w-4xl"
          >
            {[
              {
                icon: Bell,
                label: "Alertas inteligentes e automáticos",
                color: "text-amber-600 dark:text-amber-400",
              },
              {
                icon: BarChart3,
                label: "Dashboard de desempenho",
                color: "text-blue-600 dark:text-blue-400",
              },
              {
                icon: TrendingUp,
                label: "Análises estratégicas de crescimento",
                color: "text-emerald-600 dark:text-emerald-400",
              },
              {
                icon: FileText,
                label: "Gestão segura de documentos",
                color: "text-violet-600 dark:text-violet-400",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-14 h-14 rounded-2xl bg-white dark:bg-[#1E1E1E] shadow-md flex items-center justify-center border border-slate-200 dark:border-[#2A2A2A] transition-colors">
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
