"use client";

import * as React from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, SquareArrowOutUpRight, X } from "lucide-react";

import { cn } from "../lib/utils";

/**
 * Full-size viewer shared by the speaker carousel and the poster gallery.
 *
 * A modal dialog over the page: Escape or the backdrop closes it, the arrow
 * keys and buttons step through the set (wrapping at the ends), focus stays
 * inside while it is open, and the page behind does not scroll. The caller
 * returns focus to whatever opened it.
 */

export type ViewerItem = {
  key: string;
  src: string;
  alt: string;
  /** Shown in the caption and used to name the dialog. */
  label: string;
  width: number;
  height: number;
};

/** White round icon button, used by the viewer and the carousel arrows. */
export const ROUND_BUTTON =
  "grid h-[46px] w-[46px] place-items-center rounded-full border border-line-subtle bg-white p-0 text-ink " +
  "shadow-[0_2px_10px_rgba(0,0,0,0.25)] transition-colors duration-fast ease-standard hover:bg-blue-50 " +
  "disabled:cursor-default disabled:opacity-35 disabled:hover:bg-white " +
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500";

export function ImageViewer({
  items,
  index,
  onIndex,
  onClose,
  noun,
  dialogLabel,
}: {
  items: ViewerItem[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
  /** Singular noun for the step buttons: "Previous speaker", "Next poster". */
  noun: string;
  /** Prefix for the dialog's accessible name, e.g. "Speaker card", "Poster". */
  dialogLabel: string;
}) {
  const dialog = React.useRef<HTMLDivElement>(null);
  const closeButton = React.useRef<HTMLButtonElement>(null);
  const item = items[index];

  const go = React.useCallback(
    (direction: 1 | -1) => onIndex((index + direction + items.length) % items.length),
    [index, onIndex, items.length]
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
        const focusable = dialog.current?.querySelectorAll<HTMLElement>("button, a[href]");
        if (!focusable || focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
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
      aria-label={`${dialogLabel}: ${item.label}`}
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
        aria-label={`Previous ${noun}`}
        onClick={() => go(-1)}
        className={cn(ROUND_BUTTON, "fixed left-3 top-1/2 -translate-y-1/2 sm:left-5")}
      >
        <ChevronLeft className="h-[22px] w-[22px]" aria-hidden="true" />
      </button>

      <figure className="m-0 flex flex-col items-center gap-3">
        <Image
          key={item.key}
          src={item.src}
          alt={item.alt}
          width={item.width}
          height={item.height}
          quality={90}
          sizes="(max-width: 960px) 92vw, 880px"
          className="block h-auto max-h-[80vh] w-auto max-w-[min(92vw,880px)] rounded-md shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
        />
        <figcaption className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-center font-body text-body-sm text-white/85">
          <span>
            {index + 1} of {items.length} · {item.label}
          </span>
          <a
            href={item.src}
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
        aria-label={`Next ${noun}`}
        onClick={() => go(1)}
        className={cn(ROUND_BUTTON, "fixed right-3 top-1/2 -translate-y-1/2 sm:right-5")}
      >
        <ChevronRight className="h-[22px] w-[22px]" aria-hidden="true" />
      </button>
    </div>,
    document.body
  );
}
