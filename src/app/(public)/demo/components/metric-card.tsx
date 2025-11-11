import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  iconColor: string;
  trend: ReactNode;
}

export function MetricCard({
  title,
  value,
  icon: Icon,
  iconColor,
  trend,
}: MetricCardProps) {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 bg-white dark:bg-[#232842] border border-slate-200 dark:border-[#2E3451] text-slate-900 dark:text-slate-50">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-slate-600 dark:text-slate-400">
          {title}
        </CardTitle>
        <Icon className={`w-4 h-4 ${iconColor}`} />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">
          {value}
        </div>
        <div className="mt-2">{trend}</div>
      </CardContent>
    </Card>
  );
}
