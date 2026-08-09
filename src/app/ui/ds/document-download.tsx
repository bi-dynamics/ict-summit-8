import * as React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { SummitLinkButton } from "./button";
import { cn } from "../../lib/utils";

/**
 * Full-bleed PDF download band — the pattern the live site already uses for
 * the programme and booklet. Every form-shaped interaction on this website is
 * either a PDF download or a redirect; there are no forms.
 */
export interface DocumentDownloadProps {
  title: string;
  description?: string;
  /** Short spec line, e.g. "PDF · 11 pages". */
  meta?: string;
  fileLabel?: string;
  href: string;
  backgroundSrc?: string;
  className?: string;
}

export function DocumentDownload({
  title,
  description,
  meta,
  fileLabel = "Download",
  href,
  backgroundSrc,
  className,
}: DocumentDownloadProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy-950 px-4 py-16 sm:px-6 md:px-8",
        className
      )}
    >
      {backgroundSrc ? (
        <Image
          src={backgroundSrc}
          alt=""
          aria-hidden="true"
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
      ) : null}
      <div aria-hidden="true" className="bg-brand-wash absolute inset-0" />

      <div className="relative mx-auto flex max-w-container flex-wrap items-center justify-between gap-8 lg:gap-12">
        <div className="flex min-w-[280px] flex-1 flex-col gap-3">
          <h2 className="m-0 font-display text-h2 font-bold leading-snug tracking-tightish text-white text-balance">
            {title}
          </h2>
          {description ? (
            <p className="m-0 max-w-[60ch] font-body text-body-lg leading-relaxed text-white/[0.78] text-pretty">
              {description}
            </p>
          ) : null}
          {meta ? (
            <div className="mt-2 font-body text-caption font-semibold uppercase tracking-[0.04em] text-white/55">
              {meta}
            </div>
          ) : null}
        </div>

        <SummitLinkButton
          variant="inverse"
          size="lg"
          href={href}
          target="_blank"
          rel="noreferrer"
          referrerPolicy="no-referrer"
          title={title}
          iconRight={<Download className="h-[18px] w-[18px]" strokeWidth={2.5} />}
          className="shrink-0"
        >
          {fileLabel}
        </SummitLinkButton>
      </div>
    </section>
  );
}
