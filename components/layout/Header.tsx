"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, COMPANY } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full pt-2 transition-all duration-300">
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "w-[92%] max-w-5xl rounded-full bg-concrete/90 border border-concrete-line shadow-lg backdrop-blur-md px-6 py-2.5"
            : "w-full max-w-6xl border-b border-concrete-line/60 bg-concrete/80 backdrop-blur-sm px-6 py-3.5"
        }`}
      >
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image
            src="/logo/gomadhi-logo.png"
            alt={COMPANY.name}
            width={152}
            height={58}
            className={`w-auto mix-blend-multiply transition-all duration-300 ${
              scrolled ? "h-8" : "h-9"
            }`}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 relative py-1 ${
                  isActive
                    ? "text-paper font-bold"
                    : "text-stone hover:text-paper font-medium"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block shrink-0">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-xs font-semibold text-paper shadow-sm transition-all duration-300 hover:bg-gold-dark hover:shadow"
          >
            Get a quote
          </Link>
        </div>

        <button
          className="rounded-lg p-1.5 text-paper hover:bg-concrete-card md:hidden transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav
          className={`mx-auto border-t px-6 py-5 md:hidden transition-all duration-300 ${
            scrolled
              ? "mt-2 w-[92%] max-w-5xl rounded-2xl bg-concrete/98 border border-concrete-line shadow-xl"
              : "w-full bg-concrete border-concrete-line"
          }`}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-gold font-bold" : "text-stone hover:text-paper"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-concrete-line">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-gold px-5 py-2.5 text-xs font-semibold text-paper w-full transition-all hover:bg-gold-dark"
                onClick={() => setOpen(false)}
              >
                Get a quote
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
