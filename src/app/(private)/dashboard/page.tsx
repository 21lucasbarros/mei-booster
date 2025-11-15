import { LogoutButton } from "@/components/logout-button";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <LogoutButton />
      </div>
      <p className="text-muted-foreground">
        Bem-vindo ao dashboard! Esta é uma área protegida que só pode ser
        acessada por usuários autenticados.
      </p>
    </div>
  );
}
