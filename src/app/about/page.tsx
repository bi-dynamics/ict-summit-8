import type { Metadata } from "next";
import Link from "next/link";

import { ASSETS, OBJECTIVES, SUMMIT } from "../lib/summit-data";
import { Card } from "../ui/ds/card";
import { PageHeader } from "../ui/ds/page-header";
import { Section } from "../ui/ds/section";
import { SectionHeading } from "../ui/ds/section-heading";
import { summitButton } from "../ui/ds/button";
import { cn } from "../lib/utils";

export const metadata: Metadata = {
  title: "About the summit",
  description:
    "The National ICT Summit has run since 2014 under the leadership of the Ministry of Information and Communication Technology, Republic of Namibia.",
};

const PILLARS = [
  {
    title: "Mandate",
    body: "To create a platform for the Information and Communication Technology (ICT) industry to discuss the trends and challenges facing the industry globally and in the country. To encourage ICT industry players to showcase their ICT solutions as well as to expose the youth to the latest ICT trends.",
  },
  {
    title: "Vision",
    body: "To be the ICT Summit for all Namibians, joining hands and living up to the image of ICT for all Namibians.",
  },
  {
    title: "Mission",
    body: "To be the main catalyst in empowering Namibians to be ICT professionals able to unlock the full potential of technology and human capital, and to deliver value to the citizens, visitors and investors, so that Namibia becomes a leader in ICT development in Africa.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        overline="About"
        title="The National ICT Summit"
        description="A national stakeholder platform run by the Ministry of Information and Communication Technology, Republic of Namibia, since 2014."
        backgroundSrc={ASSETS.headerPhoto}
      />

      <Section>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            overline="In brief"
            title="A platform built to close the digital divide"
            description="The Summit began as a Telecom Namibia initiative, later partnered with government through the Ministry, and was phased into the National ICT Summit so that it could serve a broader spectrum of stakeholders."
          />
          <div className="flex flex-col gap-6 font-body text-body leading-relaxed text-ink-secondary lg:pt-10">
            <p className="m-0 text-pretty">
              ICT has developed gradually over the years into a facilitator that enables the
              industries and many other sectors of the economy to leapfrog. The Summit creates a
              platform for the ICT industry to discuss trends and challenges facing the industry
              globally and in the country, and industry players use it to showcase their ICT
              solutions and services.
            </p>
            <p className="m-0 text-pretty">
              The Summit also exposes the youth to the latest ICT trends and affords them the
              opportunity to present their own innovations and inventions. It positions ICT as a
              vital tool in achieving Government’s national priorities of economic growth and
              development towards the goals of poverty eradication and shared prosperity for all
              Namibians.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="sunken">
        <SectionHeading
          overline="Mandate, vision and mission"
          title="What the Ministry commits to"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PILLARS.map((pillar) => (
            <Card key={pillar.title} padding="lg" accent="var(--brand-primary)">
              <h2 className="m-0 font-display text-h3 font-bold text-ink">{pillar.title}</h2>
              <p className="mt-4 font-body text-body-sm leading-relaxed text-ink-secondary text-pretty">
                {pillar.body}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          overline="Objectives"
          title="Objectives of the National ICT Summit"
          className="mb-10"
        />
        <ol className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2">
          {OBJECTIVES.map((objective, i) => (
            <li key={objective} className="flex items-start gap-4">
              <span className="font-display text-h3 font-black leading-none text-blue-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-body text-body-sm leading-relaxed text-ink-secondary text-pretty">
                {objective}
              </span>
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="inverse" pad="md">
        <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-12">
          <SectionHeading
            inverse
            overline={`${SUMMIT.venue} · ${SUMMIT.dates}`}
            title="The 9th National ICT Summit"
            description={`“${SUMMIT.theme}”`}
            className="min-w-[320px] flex-1"
          />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sponsorship"
              className={cn(summitButton({ variant: "inverse", size: "lg" }), "no-underline")}
            >
              Sponsorship packages
            </Link>
            <Link
              href="/contact"
              className={cn(
                summitButton({ variant: "outlineInverse", size: "lg" }),
                "no-underline"
              )}
            >
              Contact the Ministry
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
