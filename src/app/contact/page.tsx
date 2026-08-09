import type { Metadata } from "next";
import { SquareArrowOutUpRight } from "lucide-react";

import { ASSETS, CONTACTS, SUMMIT } from "../lib/summit-data";
import { Card } from "../ui/ds/card";
import { PageHeader } from "../ui/ds/page-header";
import { Section } from "../ui/ds/section";
import { SectionHeading } from "../ui/ds/section-heading";
import { SummitLinkButton } from "../ui/ds/button";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Enquiries about the 9th National ICT Summit, sponsorship pledges and exhibition stands are handled by the Ministry of Information and Communication Technology.",
};

/** Kept from the live site — the general summit line, alongside the booklet's named contacts. */
const GENERAL_LINE = [
  { label: "Mr. Fillemon Johannes", phone: "+264 81 286 6223" },
  { label: "Ms. Johanna Nashipili", phone: "+264 81 259 8216" },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        overline="Contact"
        title="Speak to the Ministry"
        description="For any queries or contributions about the National ICT Summit, please do not hesitate to reach us."
        backgroundSrc={ASSETS.bandB}
      />

      <Section>
        <SectionHeading
          overline="Summit working group"
          title="Named contacts"
          description="Sponsorship pledges, package questions and exhibition allocation."
          className="mb-10"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CONTACTS.map((contact) => (
            <Card key={contact.email} padding="lg" accent="var(--brand-primary)">
              <div className="font-display text-h3 font-bold text-ink">{contact.name}</div>
              <div className="mt-1 font-body text-body-sm text-ink-secondary">{contact.role}</div>
              <div className="mt-5 flex flex-col gap-2 font-body text-body-sm">
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-blue-600 no-underline transition-colors duration-fast ease-standard hover:text-blue-800"
                >
                  {contact.email}
                </a>
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="text-blue-600 no-underline transition-colors duration-fast ease-standard hover:text-blue-800"
                >
                  {contact.phone}
                </a>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="sunken">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              overline="General enquiries"
              title="Summit office"
              className="mb-6"
            />
            <div className="flex flex-col gap-3 font-body text-body text-ink-secondary">
              <div>
                <span className="font-semibold text-ink">Email: </span>
                <a
                  href={`mailto:${SUMMIT.email}`}
                  className="text-blue-600 no-underline transition-colors duration-fast ease-standard hover:text-blue-800"
                >
                  {SUMMIT.email}
                </a>
              </div>
              {GENERAL_LINE.map((c) => (
                <div key={c.phone}>
                  <span className="font-semibold text-ink">{c.label}: </span>
                  <a
                    href={`tel:${c.phone.replace(/\s/g, "")}`}
                    className="text-blue-600 no-underline transition-colors duration-fast ease-standard hover:text-blue-800"
                  >
                    {c.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <Card padding="lg">
            <SectionHeading overline="Venue" title={SUMMIT.venue} className="mb-4" />
            <p className="m-0 font-body text-body leading-relaxed text-ink-secondary">
              {SUMMIT.region}, Republic of Namibia
              <br />
              {SUMMIT.dates}
            </p>
            <div className="mt-6">
              {/*
                Registration is a separate PHP application served by nginx at
                /registerictsummit — not a Next.js route, so this stays a plain <a>.
              */}
              <SummitLinkButton
                href={SUMMIT.registrationUrl}
                title="Register for the 9th National ICT Summit 2026"
                iconRight={<SquareArrowOutUpRight className="h-4 w-4" />}
              >
                Register for the summit
              </SummitLinkButton>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
