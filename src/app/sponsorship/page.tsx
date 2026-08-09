import type { Metadata } from "next";

import {
  ASSETS,
  CONTACTS,
  GENERAL_BENEFITS,
  PACKAGES,
  SUBMISSION_REQUIREMENTS,
  SUMMIT,
} from "../lib/summit-data";
import { Card } from "../ui/ds/card";
import { DocumentDownload } from "../ui/ds/document-download";
import { PageHeader } from "../ui/ds/page-header";
import { Section } from "../ui/ds/section";
import { SectionHeading } from "../ui/ds/section-heading";
import { SponsorshipCard } from "../ui/ds/sponsorship-card";
import { SummitLinkButton } from "../ui/ds/button";

export const metadata: Metadata = {
  title: "Sponsorship packages 2026",
  description:
    "Four sponsorship packages support the 9th National ICT Summit: Platinum N$110 000, Gold N$70 000, Diamond N$50 000 and Silver N$30 000.",
};

const PLEDGE_STEPS: [string, string][] = [
  ["Download the pledge form", "Section B of the booklet, also available on its own below."],
  [
    "Complete and sign it",
    "Confirm your organisation, contact person and sponsorship category.",
  ],
  [
    "Email it to the Ministry",
    "Send to Johanna.Nashipili@mict.gov.na — a member of the team will confirm your package and exhibition allocation.",
  ],
];

export default function SponsorshipPage() {
  return (
    <>
      <PageHeader
        overline="Sponsorship"
        title="Sponsorship packages 2026"
        description="Four packages support the 9th National ICT Summit. All sponsors receive exhibition space, media acknowledgement, and an invitation to the Minister’s gala dinner."
        backgroundSrc={ASSETS.headerPhoto}
      />

      <Section>
        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pkg) => (
            <SponsorshipCard
              key={pkg.tier}
              {...pkg}
              action={
                <SummitLinkButton
                  variant={pkg.featured ? "primary" : "secondary"}
                  fullWidth
                  href={SUMMIT.pledgeFormUrl}
                  target="_blank"
                  rel="noreferrer"
                  referrerPolicy="no-referrer"
                  title={`Pledge form for the ${pkg.name} package`}
                >
                  Pledge form (PDF)
                </SummitLinkButton>
              }
            />
          ))}
        </div>
      </Section>

      <Section tone="sunken">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              overline="All sponsors"
              title="Benefits every package carries"
              className="mb-8"
            />
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {GENERAL_BENEFITS.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-4 font-body text-body-sm leading-relaxed text-ink-secondary"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-[6px] w-[6px] shrink-0 rounded-pill bg-brand"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <Card padding="lg">
            <SectionHeading overline="How to pledge" title="Three steps" className="mb-6" />
            <ol className="m-0 flex list-none flex-col gap-5 p-0">
              {PLEDGE_STEPS.map(([title, detail], i) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-pill bg-blue-50 font-display text-body-sm font-bold text-brand">
                    {i + 1}
                  </span>
                  <span>
                    <span className="block font-body text-body font-semibold text-ink">
                      {title}
                    </span>
                    <span className="mt-1 block font-body text-body-sm leading-relaxed text-ink-secondary">
                      {detail}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </Card>
        </div>
      </Section>

      <DocumentDownload
        title="Sponsorship pledge form"
        description="Complete Section B and return it to the Ministry by email. Package amounts and benefits are set out in full in the summit booklet."
        meta="PDF · Section B of the booklet"
        fileLabel="Download pledge form"
        href={SUMMIT.pledgeFormUrl}
        backgroundSrc={ASSETS.bandB}
      />

      <Section>
        <SectionHeading
          overline="What we need from you"
          title="Information required for the website and programme guide"
          className="mb-10"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SUBMISSION_REQUIREMENTS.map((req) => (
            <Card key={req.title}>
              <div className="mb-2 font-display text-h4 font-bold text-ink">{req.title}</div>
              <div className="font-body text-body-sm leading-relaxed text-ink-secondary">
                {req.detail}
              </div>
            </Card>
          ))}
        </div>

        {/* Inline notice — a 4px left rule, the counterpart of the tier top rule. */}
        <div className="mt-8 rounded-sm border-l-rule border-l-brand bg-blue-50 px-6 py-5 font-body text-body-sm text-blue-800">
          Deadline for company profiles, topics and speakers: <b>30 July 2026</b> — email{" "}
          <a href="mailto:Johanna.Shihepo@mict.gov.na" className="font-semibold underline">
            Johanna.Shihepo@mict.gov.na
          </a>
        </div>
      </Section>

      <Section tone="sunken">
        <SectionHeading
          overline="Enquiries"
          title="Speak to the Ministry"
          description="Pledge forms, package questions and exhibition allocation are handled by the National ICT Summit working group."
          className="mb-10"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {CONTACTS.map((contact) => (
            <Card key={contact.email} padding="lg">
              <div className="font-display text-h4 font-bold text-ink">{contact.name}</div>
              <div className="mt-1 font-body text-body-sm text-ink-secondary">{contact.role}</div>
              <div className="mt-4 flex flex-col gap-1 font-body text-body-sm">
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
    </>
  );
}
