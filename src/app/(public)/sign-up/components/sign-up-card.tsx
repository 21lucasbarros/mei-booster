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
import { SignUpForm } from "./sign-up-form";
import { SocialLogin } from "./social-login";

export function SignUpCard() {
  return (
    <Card className="shadow-xl">
      <CardHeader className="space-y-2 text-center pb-6">
        <div className="mx-auto w-14 h-14 bg-linear-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-600/25 mb-1">
          <TrendingUp className="w-7 h-7 text-white" strokeWidth={2.5} />
        </div>
        <CardTitle className="text-2xl font-bold tracking-tight">
          Criar Conta
        </CardTitle>
        <CardDescription className="text-sm">
          Comece a gerir seu negócio inteligentemente
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-5">
        <SignUpForm />
        <SocialLogin />
      </CardContent>

      <CardFooter className="flex flex-col space-y-3 pt-4">
        <Separator />
        <p className="text-sm text-center text-muted-foreground">
          Já tem conta?{" "}
          <Link
            href="/login"
            className="text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
          >
            Fazer login
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
