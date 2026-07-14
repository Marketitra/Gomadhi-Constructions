import { Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { WHY_CHOOSE_US, MISSION, VISION } from "@/lib/constants";

export default function WhyChooseUs() {
  return (
    <section className="border-b border-concrete-line px-6 py-20">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2">
        <div>
          <SectionHeading eyebrow="WHY GOMADHI" title="Built on supervision, not shortcuts" />
          <ul className="mt-8 flex flex-col gap-4">
            {WHY_CHOOSE_US.map((item) => (
              <li key={item} className="flex items-start gap-3 text-paper">
                <Check size={18} className="mt-0.5 shrink-0 text-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded border border-concrete-line bg-concrete-card p-6">
            <h3 className="font-mono text-xs tracking-widest text-gold">MISSION</h3>
            <p className="mt-3 text-stone">{MISSION}</p>
          </div>
          <div className="rounded border border-concrete-line bg-concrete-card p-6">
            <h3 className="font-mono text-xs tracking-widest text-gold">VISION</h3>
            <p className="mt-3 text-stone">{VISION}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
