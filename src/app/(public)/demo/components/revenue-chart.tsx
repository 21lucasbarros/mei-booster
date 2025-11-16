"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const revenueData = [
  { month: "Jan", value: 4200 },
  { month: "Fev", value: 5100 },
  { month: "Mar", value: 4800 },
  { month: "Abr", value: 6200 },
  { month: "Mai", value: 7500 },
  { month: "Jun", value: 8100 },
  { month: "Jul", value: 6900 },
  { month: "Ago", value: 7800 },
  { month: "Set", value: 8500 },
  { month: "Out", value: 9200 },
  { month: "Nov", value: 8800 },
  { month: "Dez", value: 10500 },
];

export function RevenueChart() {
  return (
    <Card className="lg:col-span-2 bg-white dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2A2A2A] text-slate-900 dark:text-slate-50">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-50">
          Evolução do Faturamento
        </CardTitle>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Trajetória de crescimento ao longo de 2025
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart
            data={revenueData}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              className="dark:stroke-slate-700"
            />
            <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
            <YAxis stroke="#64748b" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(255, 255, 255, 0.98)",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                color: "#0f172a",
              }}
              itemStyle={{
                color: "#0f172a",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#10b981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRevenue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
