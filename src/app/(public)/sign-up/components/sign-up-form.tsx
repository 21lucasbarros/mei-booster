"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Lock, User, Eye, EyeOff, FileText, Phone } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type SignUpSchema } from "@/schemas/auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { formatCNPJ, formatPhone, cleanCNPJ } from "@/utils/cnpj";

export function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [cnpjValue, setCnpjValue] = useState("");
  const [telefoneValue, setTelefoneValue] = useState("");
  const [razaoSocial, setRazaoSocial] = useState("");
  const [loadingCNPJ, setLoadingCNPJ] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  async function handleCNPJBlur() {
    const cnpj = cleanCNPJ(cnpjValue);
    if (cnpj.length !== 14) return;

    setLoadingCNPJ(true);
    try {
      const res = await fetch(`/api/cnpj/${cnpj}`);
      if (res.ok) {
        const data = await res.json();
        setRazaoSocial(data.razaoSocial || "");
        toast.success("Dados do CNPJ carregados!");
      } else {
        toast.error("CNPJ não encontrado na Receita Federal");
      }
    } catch (error) {
      console.error("Erro ao consultar CNPJ:", error);
      toast.error("Erro ao consultar CNPJ");
    } finally {
      setLoadingCNPJ(false);
    }
  }

  async function onSubmit(data: SignUpSchema) {
    try {
      const res = await fetch("api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          cnpj: cleanCNPJ(data.cnpj),
          telefone: data.telefone.replace(/\D/g, ""),
          razaoSocial: razaoSocial,
          password: data.password,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.error || "Erro ao criar usuário");
        return;
      }

      toast.success("Usuário criado com sucesso!");
      router.push("/login");
    } catch (error) {
      console.error(error);
      toast.error("Erro inesperado ao criar usuário");
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          Nome Completo
        </Label>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="name"
            type="text"
            placeholder="Seu nome completo"
            className="h-10 pl-10"
            {...register("name")}
          />
        </div>
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          E-mail
        </Label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="email"
            type="email"
            placeholder="seu@email.com"
            className="h-10 pl-10"
            {...register("email")}
          />
        </div>
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="cnpj" className="text-sm font-medium">
          CNPJ
        </Label>
        <div className="relative">
          <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="cnpj"
            type="text"
            placeholder="00.000.000/0000-00"
            className="h-10 pl-10"
            value={cnpjValue}
            onChange={(e) => {
              const formatted = formatCNPJ(e.target.value);
              setCnpjValue(formatted);
              setValue("cnpj", formatted);
            }}
            onBlur={handleCNPJBlur}
            maxLength={18}
            disabled={loadingCNPJ}
          />
        </div>
        {errors.cnpj && (
          <p className="text-sm text-red-500">{errors.cnpj.message}</p>
        )}
        {loadingCNPJ && (
          <p className="text-sm text-blue-500">Consultando CNPJ...</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="razaoSocial" className="text-sm font-medium">
          Razão Social
        </Label>
        <div className="relative">
          <FileText className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="razaoSocial"
            type="text"
            placeholder="Preenchido automaticamente"
            className="h-10 pl-10 bg-muted"
            value={razaoSocial}
            readOnly
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="telefone" className="text-sm font-medium">
            Telefone
          </Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="telefone"
              type="text"
              placeholder="(00) 00000-0000"
              className="h-10 pl-10"
              value={telefoneValue}
              onChange={(e) => {
                const formatted = formatPhone(e.target.value);
                setTelefoneValue(formatted);
                setValue("telefone", formatted);
              }}
              maxLength={15}
            />
          </div>
          {errors.telefone && (
            <p className="text-sm text-red-500">{errors.telefone.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <Label htmlFor="password" className="text-sm font-medium">
            Senha
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="h-10 pl-10 pr-10"
              {...register("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showPassword ? (
                <EyeOff className="h-3.5 w-3.5" />
              ) : (
                <Eye className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="confirmPassword" className="text-sm font-medium">
            Confirmar
          </Label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="••••••••"
              className="h-10 pl-10 pr-10"
              {...register("confirmPassword")}
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            >
              {showConfirmPassword ? (
                <EyeOff className="h-3.5 w-3.5" />
              ) : (
                <Eye className="h-3.5 w-3.5" />
              )}
            </button>
          </div>
          {errors.confirmPassword && (
            <p className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex items-start space-x-2 pt-1">
        <Checkbox id="terms" className="mt-0.5" />
        <Label
          htmlFor="terms"
          className="text-xs leading-relaxed cursor-pointer text-muted-foreground"
        >
          Concordo com os{" "}
          <Link
            href="/termos"
            className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            Termos
          </Link>{" "}
          e{" "}
          <Link
            href="/privacidade"
            className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
          >
            Privacidade
          </Link>
        </Label>
      </div>

      <Button
        disabled={isSubmitting}
        type="submit"
        className="w-full h-10 bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all"
      >
        {isSubmitting ? "Criando conta..." : "Criar Conta"}
      </Button>
    </form>
  );
}
