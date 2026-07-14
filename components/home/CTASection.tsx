import Button from "@/components/ui/Button";
import WhatsAppCTA from "@/components/forms/WhatsAppCTA";

export default function CTASection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 rounded border border-concrete-line bg-concrete-card p-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-paper sm:text-3xl">
            Planning a build in Nagpur?
          </h2>
          <p className="mt-2 max-w-md text-stone">
            Tell us the plot, the scale and the timeline we'll get back with a
            clear quote.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Get a quote
          </Button>
          <WhatsAppCTA />
        </div>
      </div>
    </section>
  );
}
