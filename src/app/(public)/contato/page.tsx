"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import Link from "next/link";

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Erro ao enviar mensagem");
      }

      toast.success("Mensagem enviada com sucesso! Responderemos em breve.");
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Erro ao enviar mensagem. Tente novamente."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-slate-50 dark:from-[#1A1A1A] dark:to-[#151515]">
      <Header />

      <div className="container mx-auto px-4 py-20 pt-32">
        {/* Botão Voltar */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para a página inicial
          </Link>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Entre em Contato
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos aqui para ajudar! Envie sua mensagem e nossa equipe
            responderá o mais breve possível.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Informações de Contato */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/20">
                    <Mail className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-sm text-muted-foreground">
                      contato@mei-booster.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/20">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telefone</h3>
                    <p className="text-sm text-muted-foreground">
                      (11) 9 9999-9999
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/20">
                    <MessageSquare className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <p className="text-sm text-muted-foreground">
                      (11) 9 9999-9999
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/20">
                    <MapPin className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Endereço</h3>
                    <p className="text-sm text-muted-foreground">
                      São Paulo, SP
                      <br />
                      Brasil
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-3">Horário de Atendimento</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Segunda - Sexta: 9h às 18h</p>
                  <p>Sábado: 9h às 13h</p>
                  <p>Domingo: Fechado</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulário de Contato */}
          <Card className="lg:col-span-2">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Seu nome"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sobre o que você quer falar?"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem *</Label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full min-h-[150px] px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-emerald-600"
                    placeholder="Descreva sua dúvida ou sugestão..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700"
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  );
}
