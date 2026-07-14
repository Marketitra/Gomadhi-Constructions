import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

export default function ServicesGrid() {
  return (
    <section className="border-b border-concrete-line px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="WHAT WE BUILD"
          title="All types of civil construction work"
          description="From a single bungalow to a five-tower scheme, one contract covers the full build."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="rounded border border-concrete-line bg-concrete-card p-6"
            >
              <span className="font-mono text-xs text-stone-muted">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-lg font-bold text-paper">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-stone">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
