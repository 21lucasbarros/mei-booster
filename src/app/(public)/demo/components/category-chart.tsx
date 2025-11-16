"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const categoryData = [
  { name: "Produtos", value: 45000, color: "#10b981" },
  { name: "Serviços", value: 32000, color: "#3b82f6" },
  { name: "Consultorias", value: 18000, color: "#8b5cf6" },
  { name: "Outros", value: 5000, color: "#f59e0b" },
];

export function CategoryChart() {
  return (
    <Card className="bg-white dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2A2A2A] text-slate-900 dark:text-slate-50">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-50">
          Distribuição por Categoria
        </CardTitle>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Composição do seu portfólio
        </p>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={categoryData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              strokeWidth={2}
            >
              {categoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
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
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {categoryData.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
