import type { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";

import { ASSETS } from "../lib/summit-data";
import { DocumentCard } from "../ui/ds/document-card";
import { DocumentDownload } from "../ui/ds/document-download";
import { PageHeader } from "../ui/ds/page-header";
import { Section } from "../ui/ds/section";
import { SectionHeading } from "../ui/ds/section-heading";
import Sponsors2024 from "../ui/sponsors-2024";
import Presentations_2024 from "../ui/presentations-2024";
import Exhibitors_2024 from "../ui/exhibitors-2024";

const PhotoGallery = dynamic(() => import("../ui/photo-gallery"), { ssr: false });

export const metadata: Metadata = {
  title: "8th National ICT Summit — 2024",
  description:
    "The 8th National ICT Summit ran 9–11 September 2024 in Windhoek under the theme “Building resilience to ‘Adapt or die’ in the era of Digital Transformation and Artificial Intelligence (AI)”.",
};

export default function Summit2024Page() {
  return (
    <>
      <PageHeader
        overline="Previous summits · 8th edition"
        title="8th National ICT Summit — 2024"
        description="“Building resilience to ‘Adapt or die’ in the era of Digital Transformation and Artificial Intelligence (AI)”"
        backgroundSrc={ASSETS.headerPhoto}
      >
        <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-white/20 pt-5">
          {[
            { key: "Dates", value: "9–11 September 2024" },
            { key: "Venue", value: "Mercure Hotel" },
            { key: "Region", value: "Windhoek, Khomas" },
          ].map((fact) => (
            <div key={fact.key}>
              <div className="font-body text-overline font-bold uppercase tracking-overline text-white/55">
                {fact.key}
              </div>
              <div className="mt-1 font-display text-h4 font-semibold text-white">
                {fact.value}
              </div>
            </div>
          ))}
        </div>
      </PageHeader>

      <Section>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <SectionHeading
            overline="The summit in brief"
            title="Hundreds of ICT experts converged in Windhoek"
            description="Hundreds of Information and Communication Technology experts and institutions converged in Windhoek for the 8th National ICT Summit, held from 9 to 11 September 2024."
          />
          <div className="flex flex-col gap-6 font-body text-body leading-relaxed text-ink-secondary lg:pt-10">
            <p className="m-0 text-pretty">
              The Summit creates a platform for the ICT industry to discuss trends and challenges
              facing the industry globally and in the country. ICT industry players use this
              platform to showcase their ICT solutions and services. The Summit also exposes the
              youth to the latest ICT trends and affords them the opportunity to present their own
              innovations and inventions.
            </p>
            <p className="m-0 text-pretty">
              This Summit defined the roadmap for development and effective integration of
              technology, as well as the agenda for growing ICT for an inclusive society. It
              positioned ICT as a vital tool in achieving Government’s main national priorities of
              economic growth and development towards the goals of poverty eradication and shared
              prosperity for all Namibians.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="sunken">
        <SectionHeading
          overline="Launch"
          title="The 2024 summit launch"
          className="mb-10"
        />
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-md border border-line-subtle bg-white">
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FMICTNamibia%2Fvideos%2F841037374827966%2F&show_text=false&width=560&t=0"
              title="National ICT Summit 2024 — Minister’s address"
              className="h-[360px] w-full border-none md:h-[480px]"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="relative h-[360px] overflow-hidden rounded-md border border-line-subtle bg-white md:h-[480px]">
            <Image
              src="/ict-launch.jpg"
              alt="8th National ICT Summit launch"
              fill
              sizes="(max-width: 1025px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </Section>

      <Sponsors2024 />

      <DocumentDownload
        title="ICT Summit Programme & Booklet 2024"
        description="The full programme and information booklet for the 8th National ICT Summit."
        meta="PDF · 2024 edition"
        fileLabel="Download"
        href="/ICT-SUMMIT-BOOKLET-&-PROGRAMME-2024.pdf"
        backgroundSrc={ASSETS.bandA}
      />

      <Section>
        <SectionHeading overline="Press" title="Press release" className="mb-10" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <DocumentCard
            title="Media Release for ICT Summit 2024"
            href="/press-release/media-release-ict-summit-2024.pdf"
            thumbnail="/press-release/media-release-ict-summit-2024.png"
            meta="PDF · Media release"
          />
        </div>
      </Section>

      <Presentations_2024 />
      <PhotoGallery />
      <Exhibitors_2024 />
    </>
  );
}
