import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "gold" | "rust";
  className?: string;
  external?: boolean;
  showArrow?: boolean;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  showArrow = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded px-5 py-2.5 text-sm font-medium transition-all duration-200 active:scale-98";

  const variants = {
    primary: "bg-gold text-paper hover:bg-gold-dark shadow-sm",
    gold: "bg-gold text-paper hover:bg-gold-dark shadow-sm",
    rust: "bg-rust text-white hover:bg-rust-dark shadow-sm",
    secondary:
      "border border-concrete-line text-paper hover:border-stone hover:bg-concrete-card",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group ${classes}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={`group ${classes}`}>
      {content}
    </Link>
  );
}
