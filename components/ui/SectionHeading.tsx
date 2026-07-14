interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center mx-auto" : "text-left";

  return (
    <div className={`flex max-w-2xl flex-col gap-3 ${alignment}`}>
      <span className="font-mono text-xs tracking-widest text-gold">{eyebrow}</span>
      <h2 className="font-display text-3xl font-bold leading-tight text-paper sm:text-4xl">
        {title}
      </h2>
      {description && <p className="text-stone">{description}</p>}
    </div>
  );
}
