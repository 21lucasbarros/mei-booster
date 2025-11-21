import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TrendingUp } from "lucide-react";
import Link from "next/link";
import { LoginForm } from "./login-form";

export function LoginCard() {
  return (
    <Card className="shadow-xl">
      <CardHeader className="space-y-3 text-center pb-8">
        <div className="mx-auto w-16 h-16 bg-linear-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/25 mb-2">
          <TrendingUp className="w-8 h-8 text-white" strokeWidth={2.5} />
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight">
          MEI Booster
        </CardTitle>
        <CardDescription className="text-base">
          Bem-vindo de volta ao seu negócio
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <LoginForm />
      </CardContent>

      <CardFooter className="flex flex-col space-y-4">
        <Separator />
        <p className="text-sm text-center text-muted-foreground">
          Ainda não tem conta?{" "}
          <Link
            href="/sign-up"
            className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            Criar conta
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
