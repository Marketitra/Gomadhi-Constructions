import { MATERIAL_BRANDS } from "@/lib/constants";

export default function MaterialBrands() {
  const marqueeItems = [...MATERIAL_BRANDS, ...MATERIAL_BRANDS, ...MATERIAL_BRANDS];

  return (
    <section className="border-b border-concrete-line bg-concrete px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-widest text-gold">
          TURNKEY MATERIAL SUPPLY
        </span>

        <div className="relative mt-6 w-full overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-concrete to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-concrete to-transparent" />

          <div className="animate-marquee gap-10 py-2">
            {marqueeItems.map((item, index) => (
              <div
                key={`${item.category}-${index}`}
                className="shrink-0 border-l border-concrete-line pl-4"
              >
                <p className="font-mono text-[11px] uppercase tracking-wide text-stone-muted">
                  {item.category}
                </p>
                <p className="mt-1 text-sm text-paper whitespace-nowrap">
                  {item.brands}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
