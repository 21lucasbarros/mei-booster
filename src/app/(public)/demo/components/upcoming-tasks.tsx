"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, CheckCircle2, Clock, AlertTriangle } from "lucide-react";

const upcomingTasks = [
  {
    id: 1,
    task: "Pagamento DAS Dezembro",
    date: "20/12/2025",
    status: "pending" as const,
  },
  {
    id: 2,
    task: "Declaração Anual DASN-SIMEI",
    date: "31/05/2026",
    status: "pending" as const,
  },
  {
    id: 3,
    task: "Backup de Documentos",
    date: "15/12/2025",
    status: "done" as const,
  },
  {
    id: 4,
    task: "Revisão de Faturamento",
    date: "Hoje",
    status: "urgent" as const,
  },
];

const statusConfig = {
  done: {
    icon: CheckCircle2,
    color: "text-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
  },
  pending: {
    icon: Clock,
    color: "text-blue-600",
    bg: "bg-blue-50 dark:bg-blue-900/20",
  },
  urgent: {
    icon: AlertTriangle,
    color: "text-amber-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
  },
};

export function UpcomingTasks() {
  return (
    <Card className="bg-white dark:bg-[#1E1E1E] border border-slate-200 dark:border-[#2A2A2A] text-slate-900 dark:text-slate-50">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-50">
          Compromissos & Prazos
        </CardTitle>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Nunca perca uma obrigação importante
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {upcomingTasks.map((task) => {
            const config = statusConfig[task.status];
            const Icon = config.icon;

            return (
              <div
                key={task.id}
                className={`flex items-center gap-4 p-4 rounded-xl ${config.bg} transition-all hover:scale-[1.02]`}
              >
                <Icon className={`w-5 h-5 ${config.color} shrink-0`} />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 dark:text-slate-50 truncate">
                    {task.task}
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3" />
                    {task.date}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
