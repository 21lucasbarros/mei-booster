import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Pricing } from "@/components/pricing";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white to-slate-50 dark:from-[#1A1A1A] dark:to-[#151515] transition-colors">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
