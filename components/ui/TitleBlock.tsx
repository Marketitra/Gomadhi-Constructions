import { COMPANY } from "@/lib/constants";

interface TitleBlockProps {
  sheet: string;
  className?: string;
}

export default function TitleBlock({ sheet, className = "" }: TitleBlockProps) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-2 border-t border-concrete-line pt-3 font-mono text-[10px] tracking-wide text-stone-muted ${className}`}
    >
      <span>GSTN {COMPANY.gstn}</span>
      <span>SHEET {sheet}</span>
      <span>{COMPANY.address.city.toUpperCase()}</span>
    </div>
  );
}
