import {
  Home,
  Building2,
  Warehouse,
  Hammer,
  Route,
  PackageCheck,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/constants";

const ICONS: Record<string, typeof Home> = {
  residential: Home,
  commercial: Building2,
  industrial: Warehouse,
  renovation: Hammer,
  "civil-works": Route,
  turnkey: PackageCheck,
};

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
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.id] ?? Home;
            return (
              <div
                key={service.id}
                className="group rounded border border-concrete-line bg-concrete-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/10"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors duration-300 group-hover:bg-gold group-hover:text-paper">
                    <Icon size={18} />
                  </div>
                  <span className="font-mono text-xs text-stone-muted">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-paper">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-stone">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
