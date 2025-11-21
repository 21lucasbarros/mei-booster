import dynamic from "next/dynamic";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";

// Lazy loading de componentes que não estão na primeira tela
const Features = dynamic(() =>
  import("@/components/features").then((mod) => ({ default: mod.Features }))
);
const HowItWorks = dynamic(() =>
  import("@/components/how-it-works").then((mod) => ({
    default: mod.HowItWorks,
  }))
);
const Pricing = dynamic(() =>
  import("@/components/pricing").then((mod) => ({ default: mod.Pricing }))
);
const CTA = dynamic(() =>
  import("@/components/cta").then((mod) => ({ default: mod.CTA }))
);

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
