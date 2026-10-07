import Link from "next/link";
import { SquareArrowOutUpRight } from "lucide-react";

import {
  ASSETS,
  EVENTS,
  OBJECTIVES,
  PACKAGES,
  POSTERS,
  SPEAKERS,
  SUMMIT,
} from "./lib/summit-data";
import { Card } from "./ui/ds/card";
import { Countdown } from "./ui/ds/countdown";
import { DocumentDownload } from "./ui/ds/document-download";
import { EventRow } from "./ui/ds/event-row";
import { Hero } from "./ui/ds/hero";
import { Section } from "./ui/ds/section";
import { SectionHeading } from "./ui/ds/section-heading";
import { SponsorshipCard } from "./ui/ds/sponsorship-card";
import { SummitLinkButton, summitButton } from "./ui/ds/button";
import { PosterGallery } from "./ui/poster-gallery";
import { SpeakerCarousel } from "./ui/speaker-carousel";
import { cn } from "./lib/utils";

const KEY_DATES: [string, string][] = [
  ["Sponsor profiles due", "30 July 2026"],
  ["Sponsorship handover & launch", "28 August 2026"],
  ["Networking dinner", "16 October 2026"],
];

function HeroAside() {
  return (
    <div className="glass-panel rounded-lg p-6">
      <div className="mb-4 font-body text-overline font-bold uppercase tracking-overline text-gold-500">
        Summit opens in
      </div>

      <Countdown target={SUMMIT.opensAt} inverse compact />

      <div className="mt-6 flex flex-col gap-3 border-t border-white/[0.18] pt-5">
        {KEY_DATES.map(([label, value]) => (
          <div key={label} className="flex justify-between gap-4 font-body text-body-sm">
            <span className="text-white/70">{label}</span>
            <span className="whitespace-nowrap font-semibold text-white">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-6">
        {/*
          Registration is handled by Passcard, an external provider, so this is
          a plain <a> opening in a new tab — never next/link.
        */}
        <SummitLinkButton
          variant="inverse"
          fullWidth
          href={SUMMIT.registrationUrl}
          title="Register for the 9th National ICT Summit 2026"
          target="_blank"
          rel="noopener noreferrer"
          iconRight={<SquareArrowOutUpRight className="h-4 w-4" />}
        >
          Register for 2026
        </SummitLinkButton>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Hero
        overline="Republic of Namibia · Ministry of Information and Communication Technology"
        title={SUMMIT.edition}
        theme={`“${SUMMIT.theme}”`}
        dates={SUMMIT.dates}
        venue={SUMMIT.venue}
        region={SUMMIT.region}
        backgroundSrc={ASSETS.heroPhoto}
        aside={<HeroAside />}
        actions={
          <>
            <SummitLinkButton
              variant="inverse"
              size="lg"
              href={SUMMIT.registrationUrl}
              title="Register for the 9th National ICT Summit 2026"
              target="_blank"
              rel="noopener noreferrer"
              iconRight={<SquareArrowOutUpRight className="h-5 w-5" />}
            >
              Register for the summit
            </SummitLinkButton>
            <Link
              href="/sponsorship"
              className={cn(summitButton({ variant: "outlineInverse", size: "lg" }), "no-underline")}
            >
              Sponsorship packages
            </Link>
          </>
        }
      />

      <Section id="about">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            overline="About the summit"
            title="A national platform running since 2014"
            description="The National ICT Summit, under the leadership of the Ministry of Information and Communication Technology, has been running since 2014. Formerly an initiative of Telecom Namibia, it was phased into the National ICT Summit to ensure provision of a broader spectrum of stakeholders."
          />
          <div className="font-body text-body leading-relaxed text-ink-secondary lg:pt-10">
            <p className="m-0 text-pretty">
              ICT has developed gradually over the years into a facilitator that enables industries
              and many other sectors of the economy to leapfrog. The Summit has become a significant
              stakeholder consultative platform to break down the digital divide, making it easier
              for stakeholders to access key information.
            </p>
            <div className="mt-6">
              <Link
                href="/about"
                className={cn(summitButton({ variant: "secondary" }), "no-underline")}
              >
                Read more about the summit
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="inverse" id="speakers">
        <SectionHeading
          inverse
          overline="Speakers"
          title="Who’s taking the stage"
          description={`Speakers, session hosts and the Master of Ceremonies at the ${SUMMIT.edition}, ${SUMMIT.dates}. Select a card to view it full size.`}
          className="mb-10"
        />
        <SpeakerCarousel speakers={SPEAKERS} />
      </Section>

      <Section tone="sunken" id="objectives">
        <SectionHeading
          overline="Objectives"
          title="What the summit sets out to do"
          className="mb-12"
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OBJECTIVES.map((objective, i) => (
            <Card key={objective} className="flex flex-col gap-4">
              <span className="font-display text-h3 font-black leading-none text-blue-200">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-body text-body-sm leading-relaxed text-ink-secondary text-pretty">
                {objective}
              </span>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="programme">
        <SectionHeading
          overline="Important dates"
          title="Activities on the 9th National ICT Summit"
          className="mb-10"
        />
        <div className="overflow-hidden rounded-md border border-line-subtle">
          {EVENTS.map((event) => (
            <EventRow key={event.date + event.name} {...event} />
          ))}
        </div>
      </Section>

      <Section tone="sunken" id="posters">
        <SectionHeading
          overline="Posters"
          title="Summit posters"
          description="The official posters for the summit, Hackathon Day and the Namibian film screenings. Select a poster to view it full size."
          className="mb-10"
        />
        <PosterGallery posters={POSTERS} />
      </Section>

      <DocumentDownload
        title="9th ICT Summit Booklet & Programme 2026"
        description="The full summit information booklet: objectives, programme, sponsorship packages, submission requirements and the pledge form."
        meta="PDF · 11 pages"
        fileLabel="Download"
        href={SUMMIT.bookletUrl}
        backgroundSrc={ASSETS.bandA}
      />

      <Section tone="sunken" id="sponsorship">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            overline="Sponsorship"
            title="Four ways to partner with the summit"
            description="Every package carries exhibition space, acknowledgement at the ceremonies, and speaking time."
          />
          <Link
            href="/sponsorship"
            className={cn(summitButton({ variant: "secondary" }), "no-underline")}
          >
            See full package details
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PACKAGES.map((pkg) => (
            <SponsorshipCard
              key={pkg.tier}
              {...pkg}
              benefits={pkg.benefits.slice(0, 3)}
              action={
                <Link
                  href="/sponsorship"
                  className={cn(
                    summitButton({
                      variant: pkg.featured ? "primary" : "secondary",
                      fullWidth: true,
                    }),
                    "no-underline"
                  )}
                >
                  View package
                </Link>
              }
            />
          ))}
        </div>
      </Section>

      <Section tone="inverse" pad="md" id="contact">
        <div className="flex flex-wrap items-center justify-between gap-8 lg:gap-12">
          <SectionHeading
            inverse
            overline={`Ongwediva · ${SUMMIT.dates}`}
            title="Pledge your sponsorship for the 9th summit"
            description="Pledge forms and enquiries go to Ms. Johanna Nashipili at the Ministry."
            className="min-w-[320px] flex-1"
          />
          <div className="flex flex-wrap gap-3">
            <Link
              href="/sponsorship"
              className={cn(summitButton({ variant: "inverse", size: "lg" }), "no-underline")}
            >
              Become a sponsor
            </Link>
            <SummitLinkButton
              variant="outlineInverse"
              size="lg"
              href={SUMMIT.registrationUrl}
              title="Register for the 9th National ICT Summit 2026"
              target="_blank"
              rel="noopener noreferrer"
              iconRight={<SquareArrowOutUpRight className="h-5 w-5" />}
            >
              Register to attend
            </SummitLinkButton>
          </div>
        </div>
      </Section>
    </>
  );
}
