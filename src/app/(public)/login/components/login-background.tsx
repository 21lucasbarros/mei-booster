import { ReactNode } from "react";

interface LoginBackgroundProps {
  children: ReactNode;
}

export function LoginBackground({ children }: LoginBackgroundProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden bg-linear-to-br from-slate-50 via-slate-100 to-emerald-50/40 dark:from-[#151515] dark:via-[#1A1A1A] dark:to-emerald-950/20">
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.1]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(16 185 129 / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(16 185 129 / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Gradientes flutuantes animados */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-emerald-500/30 dark:bg-emerald-500/20 rounded-full blur-[120px] animate-pulse"></div>
      <div
        className="absolute bottom-1/4 -right-48 w-[500px] h-[500px] bg-teal-500/20 dark:bg-teal-500/10 rounded-full blur-[120px] animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 dark:bg-emerald-600/5 rounded-full blur-[140px] animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>

      {/* Pontos decorativos */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-emerald-400/40 dark:bg-emerald-400/30 rounded-full"></div>
      <div className="absolute top-40 right-32 w-1.5 h-1.5 bg-teal-400/40 dark:bg-teal-400/30 rounded-full"></div>
      <div className="absolute bottom-32 left-40 w-2 h-2 bg-emerald-300/30 dark:bg-emerald-300/20 rounded-full"></div>
      <div className="absolute bottom-48 right-20 w-1 h-1 bg-teal-300/40 dark:bg-teal-300/30 rounded-full"></div>

      {/* Linha decorativa superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-emerald-500/50 dark:via-emerald-500/30 to-transparent"></div>

      {/* Overlay de vinheta */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]"></div>

      <div className="w-full max-w-md relative z-10">{children}</div>
    </div>
  );
}
