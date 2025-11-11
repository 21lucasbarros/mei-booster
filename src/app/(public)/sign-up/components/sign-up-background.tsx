import { ReactNode } from "react";

interface SignUpBackgroundProps {
  children: ReactNode;
}

export function SignUpBackground({ children }: SignUpBackgroundProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 via-emerald-50/30 to-teal-50/50 dark:from-slate-950 dark:via-emerald-950/20 dark:to-slate-900 px-4 py-12 relative overflow-hidden">
      {/* efeito de brilho sutil */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-emerald-400/20 dark:bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-4 w-96 h-96 bg-teal-400/20 dark:bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="w-full max-w-md relative z-10">{children}</div>
    </div>
  );
}
