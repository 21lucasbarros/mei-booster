import { ArrowUpRight, ArrowDownRight } from "lucide-react";

interface TrendBadgeProps {
  value: string;
  isPositive: boolean;
}

export function TrendBadge({ value, isPositive }: TrendBadgeProps) {
  return (
    <div
      className={`flex items-center gap-1 text-xs font-medium ${
        isPositive ? "text-emerald-600" : "text-red-600"
      }`}
    >
      {isPositive ? (
        <ArrowUpRight className="w-3 h-3" />
      ) : (
        <ArrowDownRight className="w-3 h-3" />
      )}
      <span>{value}</span>
    </div>
  );
}
