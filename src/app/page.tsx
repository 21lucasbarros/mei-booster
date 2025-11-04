import { Features } from "@/components/features";
import Header from "@/components/header";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-b from-white to-slate-50">
      <Header />
      <Hero />
      <Features />
    </main>
  );
}
