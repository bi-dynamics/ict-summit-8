import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { DocumentCard } from "../ui/ds/document-card";
import { DocumentDownload } from "../ui/ds/document-download";
import { PageHeader } from "../ui/ds/page-header";
import { Section } from "../ui/ds/section";
import { SectionHeading } from "../ui/ds/section-heading";
import { SpeakerCard } from "../ui/ds/speaker-card";
import { Card } from "../ui/ds/card";
import Presentations from "../ui/presentations";
import Sponsors2023 from "../ui/sponsors-2023";

const PhotoGallery2023 = dynamic(() => import("../ui/photo-gallery_2023"), { ssr: false });
const VideoGallery = dynamic(() => import("../ui/video-gallery"), { ssr: false });

export const metadata: Metadata = {
  title: "7th National ICT Summit — 2023",
  description:
    "Presenters, presentations, press releases, reports and photography from the 7th National ICT Summit, 2023.",
};

const PRESENTERS = [
  {
    name: "Elton Witbooi",
    role: "Executive: Cyber Security & ICT",
    organisation: "CRAN",
    photo: "/elton-witbooi.jpeg",
  },
  {
    name: "Nashilongo Gervasius Nakale",
    role: "Executive Director and Founder",
    organisation: "Namtshuew Digital cc",
    photo: "/nakale.jpeg",
  },
];

const PANEL = [
  {
    name: "Dr. Becky Ndjoze-Ojo",
    detail:
      "Member of Parliament and a member of the Parliamentary Standing Committee on ICT and Innovation.",
  },
  { name: "Mrs. Emilia Nghikembua", detail: "CEO: CRAN" },
  {
    name: "Prof. Heike Winschiers-Theophilus",
    detail: "Professor, Department of Software Engineering, NUST",
  },
];

const PRESS = [
  {
    title: "Invitation: Industry Challenge for ICT Summit 2019",
    href: "/press-release/Ict-summit-industry-challenge-2019.pdf",
    thumbnail: "/press-release/ict-industry-challenge-2019.jpg",
    meta: "PDF · Invitation",
  },
  {
    title: "ICT Summit Press Ad 2019",
    href: "/press-release/Ict-summit-press-ad-2019.pdf",
    thumbnail: "/press-release/ict-summit-press-ad-2019.png",
    meta: "PDF · Press advert",
  },
  {
    title: "ICT Summit Booklet 2023",
    href: "/press-release/Ict-summit-booklet-2023.pdf",
    thumbnail: "/press-release/ict-summit-logo.png",
    meta: "PDF · Booklet",
  },
];

const REPORTS = [
  {
    title: "ICT Summit Report 2023",
    href: "/reports/ICT-Summit-Report-2023.pdf",
    thumbnail: "/reports/ICT-Summit-Report-2023-thumb.webp",
    meta: "PDF · Summit report",
  },
  {
    title: "ICT Summit Sponsor Survey Analysis Report 2023",
    href: "/reports/Sponsor-Feedback-Report.pdf",
    thumbnail: "/reports/Sponsor-Feedback-Report-thumb.webp",
    meta: "PDF · Sponsor survey",
  },
];

export default function Summit2023Page() {
  return (
    <>
      <PageHeader
        overline="Previous summits · 7th edition"
        title="7th National ICT Summit — 2023"
        description="Presenters, presentations, press material, reports and photography from the 2023 edition of the National ICT Summit."
        backgroundSrc="/2023-Banner.jpeg"
      />

      <DocumentDownload
        title="ICT Summit Programme 2023"
        description="The full programme for the 7th National ICT Summit."
        meta="PDF · 2023 edition"
        fileLabel="Download programme"
        href="/ICT-SUMMIT-PROGRAMME-2023.pdf"
        backgroundSrc="/ict-invitation-background.jpg"
      />

      <Section>
        <SectionHeading overline="Presenters" title="Who took the stage" className="mb-10" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRESENTERS.map((p) => (
            <SpeakerCard key={p.name} {...p} fit="contain" />
          ))}

          <Card padding="lg" accent="var(--brand-primary)" className="flex flex-col gap-4">
            <div className="font-display text-h4 font-bold text-ink">Panel discussion</div>
            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {PANEL.map((member) => (
                <li key={member.name} className="font-body text-body-sm leading-normal">
                  <span className="block font-semibold text-ink">{member.name}</span>
                  <span className="block text-ink-secondary">{member.detail}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      <Presentations />

      <Section>
        <SectionHeading overline="Press" title="Press release" className="mb-10" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRESS.map((doc) => (
            <DocumentCard key={doc.href} {...doc} />
          ))}
        </div>
      </Section>

      <Section tone="sunken">
        <SectionHeading overline="Reports" title="Summit reports" className="mb-10" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REPORTS.map((doc) => (
            <DocumentCard key={doc.href} {...doc} />
          ))}
        </div>
      </Section>

      <PhotoGallery2023 />
      <VideoGallery />
      <Sponsors2023 />
    </>
  );
}
