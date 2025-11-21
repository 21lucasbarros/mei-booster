"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="w-9 h-9 rounded-lg">
        <Sun className="h-5 w-5" />
        <span className="sr-only">Alternar tema</span>
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 rounded-lg transition-colors"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-slate-200 hover:text-emerald-400 transition-colors" />
      ) : (
        <Moon className="h-5 w-5 text-slate-700 hover:text-emerald-600 transition-colors" />
      )}
      <span className="sr-only">Alternar tema</span>
    </Button>
  );
}
