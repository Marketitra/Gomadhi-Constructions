import type { Metadata } from "next";
import { Phone, MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import TitleBlock from "@/components/ui/TitleBlock";
import EnquiryForm from "@/components/forms/EnquiryForm";
import WhatsAppCTA from "@/components/forms/WhatsAppCTA";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact | ${COMPANY.name}`,
  description:
    "Get a construction quote from Gomadhi Construction, Nagpur. Call, WhatsApp or send an enquiry.",
};

export default function ContactPage() {
  return (
    <div className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="GET IN TOUCH"
          title="Let's talk about your build"
          description="Share your plot details and timeline. We respond within a business day."
        />

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <div className="flex flex-col gap-4 rounded border border-concrete-line bg-concrete-card p-6">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
                <p className="text-stone">
                  {COMPANY.address.line1}
                  <br />
                  {COMPANY.address.line2}
                  <br />
                  {COMPANY.address.city}
                </p>
              </div>
              <div className="flex flex-col gap-2 border-t border-concrete-line pt-4">
                {COMPANY.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:+91${phone}`}
                    className="flex items-center gap-3 text-paper hover:text-gold"
                  >
                    <Phone size={18} className="text-gold" />
                    +91 {phone}
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <WhatsAppCTA className="w-full justify-center" />
            </div>
          </div>

          <EnquiryForm />
        </div>

        <div className="mt-16">
          <TitleBlock sheet="06 CONTACT" />
        </div>
      </div>
    </div>
  );
}
