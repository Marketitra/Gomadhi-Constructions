import Image from "next/image";
import Link from "next/link";
import { Phone, MapPin, ArrowUpRight } from "lucide-react";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-concrete-line bg-concrete text-paper">
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-concrete-line/70">
          <div className="flex flex-col gap-4">
            <Link href="/" className="inline-block">
              <Image
                src="/logo/gomadhi-logo.png"
                alt={COMPANY.name}
                width={152}
                height={58}
                className="h-9 w-auto mix-blend-multiply"
              />
            </Link>
            <p className="text-xs leading-relaxed text-stone max-w-xs">
              {COMPANY.tagline} Quality civil and turnkey RCC construction across Nagpur residential, commercial & industrial sites.
            </p>
            <div className="mt-2 font-mono text-[11px] text-stone-muted">
              <span className="text-gold font-semibold">GSTIN:</span> {COMPANY.gstn}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
              NAVIGATION
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-xs text-stone transition-colors duration-200 hover:text-paper"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight size={12} className="opacity-0 -translate-y-0.5 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 text-gold" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
              SERVICES
            </h4>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICES.slice(0, 4).map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-xs text-stone transition-colors duration-200 hover:text-paper"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs font-semibold tracking-widest text-gold uppercase">
              HEAD OFFICE
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-xs text-stone">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-gold" />
                <span className="leading-relaxed">
                  {COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.city}
                </span>
              </div>
              <div className="flex flex-col gap-2 pt-1">
                {COMPANY.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:+91${phone}`}
                    className="flex items-center gap-2.5 text-stone transition-colors hover:text-paper font-mono"
                  >
                    <Phone size={14} className="text-gold" />
                    <span>+91 {phone}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
