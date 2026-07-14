import { MATERIAL_BRANDS } from "@/lib/constants";

export default function MaterialBrands() {
  return (
    <section className="border-b border-concrete-line px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <span className="font-mono text-xs tracking-widest text-gold">
          TURNKEY MATERIAL SUPPLY
        </span>
        <div className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
          {MATERIAL_BRANDS.map((item) => (
            <div key={item.category} className="border-l border-concrete-line pl-4">
              <p className="font-mono text-[11px] uppercase tracking-wide text-stone-muted">
                {item.category}
              </p>
              <p className="mt-1 text-sm text-paper">{item.brands}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
