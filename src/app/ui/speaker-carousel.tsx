"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, SquareArrowOutUpRight, X } from "lucide-react";

import { speakerAlt, speakerImage, type Speaker } from "../lib/summit-data";
import { cn } from "../lib/utils";

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

const ROUND_BUTTON =
  "grid h-[46px] w-[46px] place-items-center rounded-full border border-line-subtle bg-white p-0 text-ink " +
  "shadow-[0_2px_10px_rgba(0,0,0,0.25)] transition-colors duration-fast ease-standard hover:bg-blue-50 " +
  "disabled:cursor-default disabled:opacity-35 disabled:hover:bg-white " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

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

        {stops > 1 ? (
          <div className="mt-2 flex justify-center gap-2">
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
      </div>

      {open !== null ? (
        <SpeakerViewer speakers={speakers} index={open} onIndex={setOpen} onClose={close} />
      ) : null}
    </>
  );
}

/** Full-size view of one card, stepping through the rest in order. */
function SpeakerViewer({
  speakers,
  index,
  onIndex,
  onClose,
}: {
  speakers: Speaker[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
}) {
  const dialog = React.useRef<HTMLDivElement>(null);
  const closeButton = React.useRef<HTMLButtonElement>(null);
  const speaker = speakers[index];

  const go = React.useCallback(
    (direction: 1 | -1) => onIndex((index + direction + speakers.length) % speakers.length),
    [index, onIndex, speakers.length]
  );

  React.useEffect(() => {
    closeButton.current?.focus();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "Tab") {
        // keep focus inside the dialog
        const items = dialog.current?.querySelectorAll<HTMLElement>("button, a[href]");
        if (!items || items.length === 0) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go, onClose]);

  return createPortal(
    <div
      ref={dialog}
      role="dialog"
      aria-modal="true"
      aria-label={`Speaker card: ${speaker.name}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(0,8,30,0.9)] p-4 sm:p-6"
    >
      <button
        ref={closeButton}
        type="button"
        aria-label="Close"
        onClick={onClose}
        className={cn(ROUND_BUTTON, "fixed right-4 top-4")}
      >
        <X className="h-5 w-5" aria-hidden="true" />
      </button>

      <button
        type="button"
        aria-label="Previous speaker"
        onClick={() => go(-1)}
        className={cn(ROUND_BUTTON, "fixed left-3 top-1/2 -translate-y-1/2 sm:left-5")}
      >
        <ChevronLeft className="h-[22px] w-[22px]" aria-hidden="true" />
      </button>

      <figure className="m-0 flex flex-col items-center gap-3">
        <Image
          key={speaker.slug}
          src={speakerImage(speaker)}
          alt={speakerAlt(speaker)}
          width={1080}
          height={1080}
          quality={90}
          sizes="(max-width: 960px) 92vw, 880px"
          className="block h-auto max-h-[80vh] w-auto max-w-[min(92vw,880px)] rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        />
        <figcaption className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center font-body text-body-sm text-white/85">
          <span>
            {index + 1} of {speakers.length} · {speaker.name}
          </span>
          <a
            href={speakerImage(speaker)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-gold-500 no-underline underline-offset-4 hover:underline"
          >
            Open full size
            <SquareArrowOutUpRight className="h-[14px] w-[14px]" aria-hidden="true" />
          </a>
        </figcaption>
      </figure>

      <button
        type="button"
        aria-label="Next speaker"
        onClick={() => go(1)}
        className={cn(ROUND_BUTTON, "fixed right-3 top-1/2 -translate-y-1/2 sm:right-5")}
      >
        <ChevronRight className="h-[22px] w-[22px]" aria-hidden="true" />
      </button>
    </div>,
    document.body
  );
}
