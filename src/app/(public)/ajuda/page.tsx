"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import {
  Search,
  HelpCircle,
  BookOpen,
  FileText,
  DollarSign,
  Shield,
  Users,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const categories = [
  {
    icon: HelpCircle,
    title: "Primeiros Passos",
    slug: "primeiros-passos",
    description: "Como começar a usar o MEI Booster",
  },
  {
    icon: DollarSign,
    title: "Vendas e Faturamento",
    slug: "vendas",
    description: "Registre e controle suas vendas",
  },
  {
    icon: FileText,
    title: "Documentos",
    slug: "documentos",
    description: "Organize seus documentos fiscais",
  },
  {
    icon: Shield,
    title: "Segurança e Privacidade",
    slug: "seguranca",
    description: "Proteção dos seus dados",
  },
  {
    icon: Users,
    title: "Conta e Perfil",
    slug: "conta",
    description: "Gerencie sua conta",
  },
  {
    icon: BookOpen,
    title: "Planos e Pagamentos",
    slug: "planos",
    description: "Informações sobre assinaturas",
  },
];

const faqs = {
  "primeiros-passos": [
    {
      question: "Como criar minha conta no MEI Booster?",
      answer:
        "Para criar sua conta, clique em 'Criar Conta' no topo da página, preencha seu CNPJ, email e senha. Seu CNPJ será validado automaticamente e suas informações da Receita Federal serão carregadas.",
    },
    {
      question: "Preciso ter um CNPJ MEI ativo?",
      answer:
        "Sim, o MEI Booster é uma plataforma específica para Microempreendedores Individuais. Seu CNPJ precisa estar ativo na Receita Federal.",
    },
    {
      question: "O que posso fazer com a conta gratuita?",
      answer:
        "Com o plano gratuito você tem acesso a funcionalidades básicas como registro de vendas, controle de documentos e lembretes fiscais. Para recursos avançados, considere o plano Premium.",
    },
  ],
  vendas: [
    {
      question: "Como registrar uma venda?",
      answer:
        "No dashboard, clique em 'Nova Venda', preencha o valor, data e cliente (opcional). A venda será computada automaticamente no seu faturamento mensal.",
    },
    {
      question: "Posso editar ou excluir uma venda?",
      answer:
        "Sim, você pode editar ou excluir vendas registradas a qualquer momento. Acesse a lista de vendas e clique nas opções ao lado de cada registro.",
    },
    {
      question: "Como funciona o limite de faturamento MEI?",
      answer:
        "O sistema monitora automaticamente seu faturamento e te alerta quando estiver próximo do limite anual de R$ 81.000,00. Você recebe notificações em 70%, 85% e 95% do limite.",
    },
  ],
  documentos: [
    {
      question: "Que tipos de documentos posso armazenar?",
      answer:
        "Você pode armazenar notas fiscais, recibos, contratos, DAS MEI, declarações anuais e qualquer outro documento relacionado ao seu negócio.",
    },
    {
      question: "Os documentos ficam seguros?",
      answer:
        "Sim! Todos os documentos são criptografados e armazenados com segurança. Utilizamos infraestrutura cloud de alta disponibilidade com backup automático.",
    },
    {
      question: "Por quanto tempo os documentos ficam guardados?",
      answer:
        "Seus documentos ficam armazenados indefinidamente enquanto sua conta estiver ativa. Recomendamos manter documentos fiscais por no mínimo 5 anos.",
    },
  ],
  seguranca: [
    {
      question: "Meus dados estão seguros?",
      answer:
        "Sim! Utilizamos criptografia de ponta a ponta, autenticação segura, rate limiting contra ataques e seguimos as melhores práticas de segurança da LGPD.",
    },
    {
      question: "Como funciona a autenticação?",
      answer:
        "Você pode fazer login com seu email ou CNPJ. Exigimos senhas fortes (mínimo 8 caracteres, com maiúsculas, minúsculas, números e caracteres especiais).",
    },
    {
      question: "O que é feito com meus dados pessoais?",
      answer:
        "Seus dados são usados exclusivamente para fornecer nossos serviços. Não vendemos ou compartilhamos suas informações. Consulte nossa Política de Privacidade para mais detalhes.",
    },
  ],
  conta: [
    {
      question: "Como alterar minha senha?",
      answer:
        "Acesse 'Configurações' > 'Segurança' e clique em 'Alterar Senha'. Digite sua senha atual e a nova senha duas vezes para confirmar.",
    },
    {
      question: "Posso alterar meu CNPJ?",
      answer:
        "O CNPJ é o identificador principal da sua conta e não pode ser alterado. Se você mudou de CNPJ, será necessário criar uma nova conta.",
    },
    {
      question: "Como excluir minha conta?",
      answer:
        "Entre em contato conosco através da página de contato solicitando a exclusão. Confirmaremos sua identidade e processaremos a exclusão em até 7 dias úteis, conforme a LGPD.",
    },
  ],
  planos: [
    {
      question: "Quais são os planos disponíveis?",
      answer:
        "Oferecemos um plano FREE com funcionalidades básicas e um plano PREMIUM com recursos avançados, relatórios personalizados e suporte prioritário.",
    },
    {
      question: "Como fazer upgrade para Premium?",
      answer:
        "Acesse 'Planos' no menu e clique em 'Assinar Premium'. Você será direcionado para o checkout seguro onde poderá escolher a forma de pagamento.",
    },
    {
      question: "Posso cancelar a qualquer momento?",
      answer:
        "Sim! Você pode cancelar sua assinatura Premium a qualquer momento. Você continuará tendo acesso aos recursos Premium até o fim do período pago.",
    },
  ],
};

export default function AjudaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredFaqs = selectedCategory
    ? faqs[selectedCategory as keyof typeof faqs]
    : Object.values(faqs)
        .flat()
        .filter(
          (faq) =>
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );

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
            Central de Ajuda
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Encontre respostas rápidas para suas dúvidas sobre o MEI Booster
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar ajuda..."
              className="pl-12 h-14 text-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Categories */}
        {!searchTerm && !selectedCategory && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category) => (
              <Card
                key={category.slug}
                className="cursor-pointer hover:shadow-lg transition-all hover:-translate-y-1"
                onClick={() => setSelectedCategory(category.slug)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/20">
                      <category.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Back to Categories */}
        {selectedCategory && (
          <button
            onClick={() => setSelectedCategory(null)}
            className="text-emerald-600 hover:text-emerald-700 mb-8 flex items-center gap-2"
          >
            ← Voltar para categorias
          </button>
        )}

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6">
                {selectedCategory
                  ? categories.find((c) => c.slug === selectedCategory)?.title
                  : "Perguntas Frequentes"}
              </h2>

              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {filteredFaqs.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground mb-4">
                    Nenhum resultado encontrado para &quot;{searchTerm}&quot;
                  </p>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="text-emerald-600 hover:text-emerald-700"
                  >
                    Limpar busca
                  </button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="mt-8 bg-linear-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-800">
            <CardContent className="p-8 text-center">
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-emerald-600" />
              <h3 className="text-xl font-bold mb-2">
                Não encontrou o que procurava?
              </h3>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para ajudar você!
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-6 bg-linear-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 transition-all"
              >
                Entre em Contato
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </main>
  );
}
