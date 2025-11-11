"use client";

import { DemoHeader } from "./components/demo-header";
import { DemoHero } from "./components/demo-hero";
import { MetricCard } from "./components/metric-card";
import { TrendBadge } from "./components/trend-badge";
import { RevenueChart } from "./components/revenue-chart";
import { CategoryChart } from "./components/category-chart";
import { RecentSales } from "./components/recent-sales";
import { UpcomingTasks } from "./components/upcoming-tasks";
import { DemoCTA } from "./components/demo-cta";
import { DollarSign, TrendingUp, FileText, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-white to-slate-50 dark:from-[#151823] dark:to-[#0F111A] transition-colors">
      <DemoHeader />

      <main className="relative overflow-hidden pt-20">
        {/* grid background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[24px_24px]"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto px-6 py-16 max-w-7xl relative z-10"
        >
          <DemoHero />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <MetricCard
              title="Faturamento Anual"
              value="R$ 100.000"
              icon={DollarSign}
              iconColor="text-emerald-600"
              trend={<TrendBadge value="+12.5% vs ano anterior" isPositive />}
            />
            <MetricCard
              title="Faturamento Mensal"
              value="R$ 10.500"
              icon={TrendingUp}
              iconColor="text-blue-600"
              trend={<TrendBadge value="+19.2% vs mês anterior" isPositive />}
            />
            <MetricCard
              title="Ticket Médio"
              value="R$ 1.456"
              icon={FileText}
              iconColor="text-violet-600"
              trend={
                <TrendBadge value="-2.1% vs mês anterior" isPositive={false} />
              }
            />
            <MetricCard
              title="Total de Vendas"
              value="89"
              icon={ShoppingCart}
              iconColor="text-amber-600"
              trend={<TrendBadge value="+8 vendas este mês" isPositive />}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            <RevenueChart />
            <CategoryChart />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentSales />
            <UpcomingTasks />
          </div>

          <DemoCTA />
        </motion.div>
      </main>
    </div>
  );
}
