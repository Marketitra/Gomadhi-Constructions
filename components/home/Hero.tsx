import Button from "@/components/ui/Button";
import TitleBlock from "@/components/ui/TitleBlock";
import HeroBackground from "@/components/home/HeroBackground";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[640px] overflow-hidden border-b border-concrete-line">
      <HeroBackground
        images={[
          "https://images.pexels.com/photos/35482397/pexels-photo-35482397.jpeg?auto=compress&cs=tinysrgb&w=1920",
          "https://images.pexels.com/photos/17909242/pexels-photo-17909242.jpeg?auto=compress&cs=tinysrgb&w=1920",
          "https://images.pexels.com/photos/34911458/pexels-photo-34911458.jpeg?auto=compress&cs=tinysrgb&w=1920",
          "https://images.pexels.com/photos/31268433/pexels-photo-31268433.jpeg?auto=compress&cs=tinysrgb&w=1920",
        ]}
      />
      <div className="relative mx-auto flex min-h-[640px] max-w-6xl flex-col justify-center px-6 py-20">
        <span className="font-mono text-xs tracking-widest text-gold">
          {COMPANY.shortName.toUpperCase()} —{" "}
          {COMPANY.address.city.toUpperCase()}
        </span>
        <h1 className="mt-4 max-w-xl font-display text-4xl font-bold leading-[1.1] text-paper sm:text-5xl">
          Foundation to finishing.
          <br />
          <span className="text-rust">Built to hold.</span>
        </h1>
        <p className="mt-5 max-w-md text-stone">
          Turnkey RCC construction across Nagpur residential, commercial and
          industrial with material supply included from foundation to final
          coat.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/contact" variant="primary">
            Get a quote
          </Button>
          <Button href="/projects" variant="secondary">
            View projects
          </Button>
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pb-6">
        <TitleBlock sheet="01 HOME" />
      </div>
    </section>
  );
}
