"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { COMPANY } from "@/lib/constants";

const DRIFT_IMAGES_LEFT = [
  {
    id: "drift-1",
    title: "SR Lake View Tower",
    image: "https://images.pexels.com/photos/35482397/pexels-photo-35482397.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "drift-2",
    title: "Raghav Keystone Hub",
    image: "https://images.pexels.com/photos/17909242/pexels-photo-17909242.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "drift-3",
    title: "GMC Trauma Care",
    image: "https://images.pexels.com/photos/34911458/pexels-photo-34911458.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "drift-4",
    title: "Central Heights",
    image: "https://images.pexels.com/photos/31268433/pexels-photo-31268433.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const DRIFT_IMAGES_RIGHT = [
  {
    id: "drift-5",
    title: "Besa Royal Villas",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "drift-6",
    title: "Nagpur Metro Plaza",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "drift-7",
    title: "Wardha Commercial Block",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "drift-8",
    title: "MIDC Industrial Slab",
    image: "https://images.pexels.com/photos/35482397/pexels-photo-35482397.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function DriftWallHero() {
  // Duplicated arrays for seamless infinite looping
  const infiniteLeft = [...DRIFT_IMAGES_LEFT, ...DRIFT_IMAGES_LEFT];
  const infiniteRight = [...DRIFT_IMAGES_RIGHT, ...DRIFT_IMAGES_RIGHT];

  return (
    <section className="relative overflow-hidden bg-concrete pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-concrete-line select-none">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(217,160,0,0.07)_0%,rgba(223,220,213,0)_70%)] pointer-events-none"
      />

      <div
        className="absolute inset-0 bg-[radial-gradient(#1e1c19_1px,transparent_1px)] [background-size:32px_32px] sm:[background-size:36px_36px] opacity-[0.05] pointer-events-none"
      />

      <div className="absolute top-1/4 left-1/3 w-[300px] sm:w-[600px] h-[200px] sm:h-[350px] bg-gold/10 blur-[100px] sm:blur-[140px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[auto] lg:min-h-[580px]">

          <div className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left z-10">
            <span className="font-mono text-[11px] sm:text-xs tracking-widest text-gold font-semibold uppercase mb-2 sm:mb-3">
              {COMPANY.shortName.toUpperCase()} — {COMPANY.address.city.toUpperCase()}
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] sm:leading-[1.12] text-paper">
              Foundation to finishing,
              <br />
              <span className="font-display font-extrabold text-rust">Built to hold.</span>
            </h1>

            <p className="mt-4 sm:mt-5 text-stone text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg font-sans">
              Turnkey RCC construction across Nagpur residential, commercial, and
              industrial schemes with material supply included from foundation to final coat.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 w-full">
              <Button
                href="/contact"
                variant="gold"
                className="rounded-full !bg-gold !text-paper px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-medium hover:!bg-gold-dark transition-all whitespace-nowrap shadow-xl"
                showArrow
              >
                Get a Quote
              </Button>

              <Button
                href="/projects"
                variant="secondary"
                className="rounded-full border border-concrete-line/80 bg-concrete-card/60 px-6 sm:px-7 py-3 sm:py-3.5 text-sm !text-paper hover:border-gold hover:bg-concrete-card transition-all font-medium whitespace-nowrap"
              >
                View Projects
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative h-[380px] sm:h-[480px] lg:h-[580px] w-full overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-10 sm:h-14 bg-gradient-to-b from-concrete via-concrete/70 to-transparent z-20 pointer-events-none" />

            <div className="absolute bottom-0 inset-x-0 h-10 sm:h-14 bg-gradient-to-t from-concrete via-concrete/70 to-transparent z-20 pointer-events-none" />

            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 h-full">

              <div className="overflow-hidden h-full">
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 22,
                    ease: "linear",
                  }}
                  className="flex flex-col gap-2.5 sm:gap-4"
                >
                  {infiniteLeft.map((item, idx) => (
                    <div
                      key={`left-${item.id}-${idx}`}
                      className="relative group h-[170px] sm:h-[220px] lg:h-[250px] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-concrete-line bg-concrete-card shadow-md shrink-0 transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 350px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-paper/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-4">
                        <h3 className="font-display text-[11px] sm:text-xs lg:text-sm font-bold text-concrete-card leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              <div className="overflow-hidden h-full">
                <motion.div
                  animate={{ y: ["-50%", "0%"] }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  }}
                  className="flex flex-col gap-2.5 sm:gap-4"
                >
                  {infiniteRight.map((item, idx) => (
                    <div
                      key={`right-${item.id}-${idx}`}
                      className="relative group h-[170px] sm:h-[220px] lg:h-[250px] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-concrete-line bg-concrete-card shadow-md shrink-0 transition-transform duration-300 hover:scale-[1.02]"
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, 350px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-paper/85 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                      <div className="absolute bottom-0 inset-x-0 p-2.5 sm:p-4">
                        <h3 className="font-display text-[11px] sm:text-xs lg:text-sm font-bold text-concrete-card leading-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
