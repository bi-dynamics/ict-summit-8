"use client";

import * as React from "react";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";

import { posterImage, type Poster } from "../lib/summit-data";
import { cn } from "../lib/utils";
import { ImageViewer, type ViewerItem } from "./image-viewer";

/**
 * MICT's posters, side by side: four across on desktop, two on tablets and
 * phones. Each poster sits whole in a frame of the same shape, so posters of
 * different proportions still line up. Selecting one opens it full size in the
 * same viewer as the speaker cards.
 */
export function PosterGallery({ posters }: { posters: Poster[] }) {
  const opener = React.useRef<HTMLElement | null>(null);
  const [open, setOpen] = React.useState<number | null>(null);

  const items: ViewerItem[] = React.useMemo(
    () =>
      posters.map((p) => ({
        key: p.slug,
        src: posterImage(p),
        alt: p.alt,
        label: p.title,
        width: p.width,
        height: p.height,
      })),
    [posters]
  );

  const close = React.useCallback(() => {
    setOpen(null);
    opener.current?.focus();
  }, []);

  return (
    <>
      <ul className="m-0 grid list-none grid-cols-2 gap-x-4 gap-y-8 p-0 sm:gap-x-6 lg:grid-cols-4">
        {posters.map((poster, i) => (
          <li key={poster.slug} className="flex min-w-0 flex-col">
            <button
              type="button"
              onClick={(e) => {
                opener.current = e.currentTarget;
                setOpen(i);
              }}
              className={cn(
                "block w-full cursor-zoom-in rounded-md border border-line-subtle bg-white p-2 sm:p-3",
                "shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-shadow duration-base ease-standard",
                "hover:shadow-[0_10px_28px_rgba(0,0,0,0.14)]",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
              )}
            >
              <span className="relative block aspect-[3/4] w-full">
                <Image
                  src={posterImage(poster)}
                  alt={poster.alt}
                  fill
                  quality={85}
                  sizes="(max-width: 1024px) 46vw, 270px"
                  className="object-contain"
                />
              </span>
              <span className="sr-only">View full size</span>
            </button>

            <div className="mt-3 font-body">
              <div className="text-body-sm font-semibold leading-snug text-ink">{poster.title}</div>
              <div className="mt-1 text-caption leading-normal text-ink-secondary">{poster.caption}</div>
              {poster.link ? (
                <a
                  href={poster.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-body-sm font-semibold text-blue-700 no-underline underline-offset-4 hover:underline"
                >
                  {poster.link.label}
                  <SquareArrowOutUpRight className="h-[14px] w-[14px]" aria-hidden="true" />
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>

      {open !== null ? (
        <ImageViewer
          items={items}
          index={open}
          onIndex={setOpen}
          onClose={close}
          noun="poster"
          dialogLabel="Poster"
        />
      ) : null}
    </>
  );
}
