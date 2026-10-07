"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { speakerAlt, speakerImage, type Speaker } from "../lib/summit-data";
import { cn } from "../lib/utils";
import { ImageViewer, ROUND_BUTTON, type ViewerItem } from "./image-viewer";

/**
 * The 2026 speaker announcement cards, shown exactly as MICT supplied them.
 *
 * A native scroll-snap carousel rather than a library: swipe works on touch
 * screens, the track scrolls with the keyboard, and there is nothing extra to
 * download. Three cards per view on desktop, two on tablets, and one on phones
 * with the next card peeking in to show there is more.
 *
 * Styled for the navy (inverse) section it sits in.
 *
 * The cards carry their wording inside the image, so on a phone the topic line
 * is too small to read at card size. Selecting a card opens it full size, with
 * a link to the original file, which phones can pinch-zoom.
 */

const GOLD_FOCUS =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500";

function scrollBehaviour(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
}

export function SpeakerCarousel({ speakers }: { speakers: Speaker[] }) {
  const viewport = React.useRef<HTMLDivElement>(null);
  const opener = React.useRef<HTMLElement | null>(null);

  const [stops, setStops] = React.useState(0);
  const [current, setCurrent] = React.useState(0);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);
  const [open, setOpen] = React.useState<number | null>(null);

  const items: ViewerItem[] = React.useMemo(
    () =>
      speakers.map((s) => ({
        key: s.slug,
        src: speakerImage(s),
        alt: speakerAlt(s),
        label: s.name,
        width: 1080,
        height: 1080,
      })),
    [speakers]
  );

  /** Distance between the left edges of two neighbouring cards. */
  const step = React.useCallback(() => {
    const first = viewport.current?.querySelector<HTMLElement>("[data-slide]");
    if (!first?.parentElement) return 1;
    const gap = parseFloat(getComputedStyle(first.parentElement).columnGap) || 0;
    // never 0, even if measured while hidden, so position maths can't divide by zero
    return first.offsetWidth + gap || 1;
  }, []);

  const sync = React.useCallback(() => {
    const vp = viewport.current;
    if (!vp) return;
    setCurrent(Math.round(vp.scrollLeft / step()));
    setAtStart(vp.scrollLeft < 4);
    setAtEnd(vp.scrollLeft + vp.clientWidth >= vp.scrollWidth - 4);
  }, [step]);

  React.useEffect(() => {
    const vp = viewport.current;
    if (!vp) return;
    const measure = () => {
      const perView = Math.max(1, Math.round(vp.clientWidth / step()));
      setStops(Math.max(1, speakers.length - perView + 1));
      sync();
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(vp);
    vp.addEventListener("scroll", sync, { passive: true });
    return () => {
      observer.disconnect();
      vp.removeEventListener("scroll", sync);
    };
  }, [speakers.length, step, sync]);

  const scrollByCard = (direction: 1 | -1) =>
    viewport.current?.scrollBy({ left: direction * step(), behavior: scrollBehaviour() });

  const scrollToStop = (i: number) =>
    viewport.current?.scrollTo({ left: i * step(), behavior: scrollBehaviour() });

  const openCard = (i: number, from: HTMLElement) => {
    opener.current = from;
    setOpen(i);
  };

  const close = React.useCallback(() => {
    setOpen(null);
    opener.current?.focus();
  }, []);

  return (
    <>
      <div role="region" aria-roledescription="carousel" aria-label="Speakers">
        <div className="relative">
          <div
            ref={viewport}
            tabIndex={0}
            className={cn(
              "-mx-1 snap-x snap-mandatory overflow-x-auto rounded-md px-1 pb-4 pt-1",
              "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              GOLD_FOCUS
            )}
          >
            <div className="flex gap-3 sm:gap-5">
              {speakers.map((speaker, i) => (
                <div
                  key={speaker.slug}
                  data-slide
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${speakers.length}`}
                  className="shrink-0 basis-[86%] snap-start sm:basis-[calc((100%_-_20px)/2)] lg:basis-[calc((100%_-_40px)/3)]"
                >
                  <button
                    type="button"
                    onClick={(e) => openCard(i, e.currentTarget)}
                    className={cn(
                      "block w-full cursor-zoom-in overflow-hidden rounded-md border-0 bg-white p-0",
                      "shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-transform duration-base ease-standard",
                      "motion-safe:hover:-translate-y-[3px]",
                      GOLD_FOCUS
                    )}
                  >
                    <Image
                      src={speakerImage(speaker)}
                      alt={speakerAlt(speaker)}
                      width={1080}
                      height={1080}
                      quality={90}
                      sizes="(max-width: 639px) 86vw, (max-width: 1024px) 50vw, 390px"
                      className="block h-auto w-full"
                    />
                    <span className="sr-only">View full size</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Arrows on tablet and desktop; phones swipe. */}
          <button
            type="button"
            aria-label="Previous speakers"
            disabled={atStart}
            onClick={() => scrollByCard(-1)}
            className={cn(ROUND_BUTTON, "absolute left-[6px] top-1/2 hidden -translate-y-1/2 sm:grid lg:left-[-23px]")}
          >
            <ChevronLeft className="h-[22px] w-[22px]" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next speakers"
            disabled={atEnd}
            onClick={() => scrollByCard(1)}
            className={cn(ROUND_BUTTON, "absolute right-[6px] top-1/2 hidden -translate-y-1/2 sm:grid lg:right-[-23px]")}
          >
            <ChevronRight className="h-[22px] w-[22px]" aria-hidden="true" />
          </button>
        </div>

        {/*
          Position dots on tablet and desktop. With twenty-odd cards a row of
          dots is wider than a phone screen, so phones get a counter instead.
        */}
        {stops > 1 ? (
          <div className="mt-2 hidden justify-center gap-2 sm:flex">
            {Array.from({ length: stops }, (_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to position ${i + 1} of ${stops}`}
                aria-current={i === current ? "true" : undefined}
                onClick={() => scrollToStop(i)}
                className={cn(
                  "h-[9px] rounded-full border-0 p-0 transition-all duration-base ease-standard",
                  i === current ? "w-[26px] bg-gold-500" : "w-[9px] bg-white/30 hover:bg-white/50",
                  GOLD_FOCUS
                )}
              />
            ))}
          </div>
        ) : null}
        <p
          aria-hidden="true"
          className="m-0 mt-1 text-center font-body text-body-sm tabular-nums text-white/70 sm:hidden"
        >
          {Math.min(current + 1, speakers.length)} / {speakers.length}
        </p>
      </div>

      {open !== null ? (
        <ImageViewer
          items={items}
          index={open}
          onIndex={setOpen}
          onClose={close}
          noun="speaker"
          dialogLabel="Speaker card"
        />
      ) : null}
    </>
  );
}
