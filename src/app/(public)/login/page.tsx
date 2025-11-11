import Link from "next/link";
import { LoginBackground } from "./components/login-background";
import { LoginCard } from "./components/login-card";

export default function LoginPage() {
  return (
    <LoginBackground>
      <LoginCard />
      <p className="text-center text-xs text-muted-foreground mt-8 px-8">
        Ao continuar, você concorda com nossos{" "}
        <Link
          href="/terms"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Termos de Serviço
        </Link>{" "}
        e{" "}
        <Link
          href="/privacy"
          className="underline underline-offset-4 hover:text-foreground transition-colors"
        >
          Política de Privacidade
        </Link>
        .
      </p>
    </LoginBackground>
  );
}
