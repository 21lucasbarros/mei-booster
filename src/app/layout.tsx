import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap", // Otimização de carregamento de fonte
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // Não preload da fonte mono (menos usada)
});

export const metadata: Metadata = {
  title: {
    default: "MEI Booster - Gestão Inteligente para MEI",
    template: "%s | MEI Booster",
  },
  description:
    "Plataforma completa de gestão para Microempreendedores Individuais. Controle vendas, documentos, lembretes e muito mais.",
  keywords: [
    "MEI",
    "microempreendedor",
    "gestão empresarial",
    "controle financeiro",
    "CNPJ",
  ],
  authors: [{ name: "MEI Booster" }],
  creator: "MEI Booster",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://mei-booster.vercel.app",
    title: "MEI Booster - Gestão Inteligente para MEI",
    description:
      "Plataforma completa de gestão para Microempreendedores Individuais.",
    siteName: "MEI Booster",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEI Booster - Gestão Inteligente para MEI",
    description:
      "Plataforma completa de gestão para Microempreendedores Individuais.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
