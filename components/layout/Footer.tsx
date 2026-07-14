import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import TitleBlock from "@/components/ui/TitleBlock";

export default function Footer() {
  return (
    <footer className="border-t border-concrete-line bg-concrete-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-bold text-paper">
              {COMPANY.shortName}
            </h3>
            <p className="mt-2 text-sm text-stone">{COMPANY.tagline}</p>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-wide text-gold">NAVIGATE</h4>
            <ul className="mt-3 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-stone hover:text-paper">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs tracking-wide text-gold">CONTACT</h4>
            <div className="mt-3 flex flex-col gap-2 text-sm text-stone">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-stone-muted" />
                <span>
                  {COMPANY.address.line1}, {COMPANY.address.line2},{" "}
                  {COMPANY.address.city}
                </span>
              </div>
              {COMPANY.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:+91${phone}`}
                  className="flex items-center gap-2 hover:text-paper"
                >
                  <Phone size={16} className="text-stone-muted" />
                  {phone}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10">
          <TitleBlock sheet="FOOTER" />
        </div>
      </div>
    </footer>
  );
}
