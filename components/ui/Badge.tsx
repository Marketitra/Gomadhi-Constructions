import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  tone?: "gold" | "rust" | "neutral";
}

export default function Badge({ children, tone = "neutral" }: BadgeProps) {
  const tones = {
    gold: "bg-gold text-paper",
    rust: "bg-rust text-neutral-50",
    neutral: "border border-concrete-line text-stone",
  };

  return (
    <span
      className={`inline-block rounded px-2 py-1 font-mono text-[10px] font-medium tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
