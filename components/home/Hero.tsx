import Button from "@/components/ui/Button";
import TitleBlock from "@/components/ui/TitleBlock";
import AccordionGallery, { AccordionItem } from "@/components/reactbits/AccordionGallery";
import { COMPANY } from "@/lib/constants";

const HERO_GALLERY_ITEMS: AccordionItem[] = [
  {
    id: "sr-lake-view",
    title: "SR Lake View",
    subtitle: "7-Floor RCC Residential Tower",
    category: "Residential",
    image: "https://images.pexels.com/photos/35482397/pexels-photo-35482397.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/projects",
  },
  {
    id: "raghav-keystone",
    title: "Raghav Keystone",
    subtitle: "Commercial Spaces & Hubs",
    category: "Commercial",
    image: "https://images.pexels.com/photos/17909242/pexels-photo-17909242.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/projects",
  },
  {
    id: "gmc-trauma",
    title: "GMC Trauma Care",
    subtitle: "Institutional Healthcare Build",
    category: "Institutional",
    image: "https://images.pexels.com/photos/34911458/pexels-photo-34911458.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/projects",
  },
  {
    id: "central-heights",
    title: "Central Heights",
    subtitle: "5-Tower Residential Scheme",
    category: "Turnkey Scheme",
    image: "https://images.pexels.com/photos/31268433/pexels-photo-31268433.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/projects",
  },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-concrete-line bg-concrete">
      <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-16">
        <div className="mx-auto max-w-3xl text-center flex flex-col items-center mb-12">
          <span className="font-mono text-xs tracking-widest text-gold font-semibold uppercase">
            {COMPANY.shortName.toUpperCase()} — {COMPANY.address.city.toUpperCase()}
          </span>

          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.1] text-paper sm:text-5xl lg:text-6xl">
            Foundation to finishing.
            <br />
            <span className="text-rust">Built to hold.</span>
          </h1>

          <p className="mt-4 text-stone text-base leading-relaxed max-w-xl">
            Turnkey RCC construction across Nagpur residential, commercial and
            industrial with material supply included from foundation to final coat.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button href="/contact" variant="primary">
              Get a quote
            </Button>
            <Button href="/projects" variant="secondary">
              View projects
            </Button>
          </div>
        </div>

        <div className="w-full">
          <AccordionGallery items={HERO_GALLERY_ITEMS} />
        </div>

        <div className="mt-12">
          <TitleBlock sheet="01 HOME" />
        </div>
      </div>
    </section>
  );
}
