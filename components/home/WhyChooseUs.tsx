import SectionHeading from "@/components/ui/SectionHeading";
import MagicBento from "@/components/reactbits/MagicBento";

export default function WhyChooseUs() {
  return (
    <section className="border-b border-concrete-line px-6 py-20 bg-concrete">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <SectionHeading
            eyebrow="WHY GOMADHI"
            title="Built on supervision, not shortcuts"
            description="Our turnkey civil framework integrates strict quality control, verified material procurement, and dedicated site leadership."
          />
        </div>

        <MagicBento />
      </div>
    </section>
  );
}
