import { cn } from "@/lib/utils";

interface GradientBadgeProps {
  label: string;
  icon?: string;
  variant?: "blue" | "purple" | "cyan" | "emerald";
  size?: "sm" | "md" | "lg";
}

export function GradientBadge({
  label,
  icon,
  variant = "blue",
  size = "md",
}: GradientBadgeProps) {
  const variants = {
    blue: "from-blue-500 to-cyan-400",
    purple: "from-purple-500 to-pink-400",
    cyan: "from-cyan-500 to-blue-400",
    emerald: "from-emerald-500 to-cyan-400",
  };

  const sizes = {
    sm: "px-3 py-1 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-gradient-to-r backdrop-blur-md border border-white/10",
        variants[variant],
        sizes[size]
      )}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span className="font-medium text-white">{label}</span>
    </div>
  );
}
