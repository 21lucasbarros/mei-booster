import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const recentSales = [
  { id: 1, client: "Erik Medeiros", value: 1250, date: "Hoje, 14:30" },
  { id: 2, client: "Charles Raikkonen", value: 890, date: "Hoje, 11:20" },
  { id: 3, client: "Victor Santiago", value: 2100, date: "Ontem, 16:45" },
  { id: 4, client: "Osi Paes", value: 450, date: "Ontem, 10:15" },
  { id: 5, client: "João Del", value: 1800, date: "2 dias atrás" },
];

export function RecentSales() {
  return (
    <Card className="bg-white dark:bg-[#232842] border border-slate-200 dark:border-[#2E3451] text-slate-900 dark:text-slate-50">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-slate-900 dark:text-slate-50">
          Atividade Recente
        </CardTitle>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Suas últimas transações
        </p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentSales.map((sale) => (
            <div
              key={sale.id}
              className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <div>
                <p className="font-semibold text-slate-900 dark:text-slate-50">
                  {sale.client}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {sale.date}
                </p>
              </div>
              <div className="text-lg font-bold text-emerald-600">
                R$ {sale.value.toLocaleString("pt-BR")}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
