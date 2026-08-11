import * as React from "react";
import Image from "next/image";
import { Download } from "lucide-react";
import { cn } from "../../lib/utils";

/**
 * A downloadable document with a page thumbnail — press releases, reports and
 * archived booklets. The whole card is the link; separation is the usual 1px
 * rule, with shadow reserved for the hover lift.
 */
export interface DocumentCardProps {
  title: string;
  href: string;
  thumbnail?: string;
  meta?: string;
  className?: string;
}

export function DocumentCard({ title, href, thumbnail, meta, className }: DocumentCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      referrerPolicy="no-referrer"
      title={title}
      className={cn(
        "group flex flex-col overflow-hidden rounded-md border border-line-subtle bg-white no-underline",
        "transition-all duration-base ease-standard hover:-translate-y-[2px] hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-[3/4] overflow-hidden border-b border-line-subtle bg-grey-50">
        {thumbnail ? (
          <Image
            src={thumbnail}
            alt={title}
            fill
            sizes="(max-width: 769px) 100vw, (max-width: 1025px) 50vw, 33vw"
            className="object-contain p-4"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-body text-caption text-grey-400">
            PDF
          </div>
        )}
      </div>

      <div className="flex flex-1 items-start justify-between gap-4 p-5">
        <div>
          <div className="font-display text-h4 font-bold leading-snug text-ink">{title}</div>
          {meta ? (
            <div className="mt-2 font-body text-caption font-semibold uppercase tracking-[0.04em] text-ink-muted">
              {meta}
            </div>
          ) : null}
        </div>
        <Download className="mt-1 h-5 w-5 shrink-0 text-brand transition-colors duration-fast ease-standard group-hover:text-blue-800" />
      </div>
    </a>
  );
}
