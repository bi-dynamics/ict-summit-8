"use client";

import * as React from "react";
import { Download } from "lucide-react";

import { presentationUrl, type PresentationDay } from "../lib/summit-data";
import { cn } from "../lib/utils";

/**
 * The summit's presentations, one tab per day, Day 1 selected on load.
 *
 * Follows the WAI-ARIA tabs pattern: the arrow keys, Home and End move between
 * days. Every day's list is in the page (inactive ones hidden), so all the
 * downloads are there for search engines and for printing.
 */
export function PresentationTabs({ days }: { days: PresentationDay[] }) {
  const [active, setActive] = React.useState(0);
  const tabs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const select = (i: number) => {
    setActive(i);
    tabs.current[i]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const last = days.length - 1;
    if (e.key === "ArrowRight") select(active === last ? 0 : active + 1);
    else if (e.key === "ArrowLeft") select(active === 0 ? last : active - 1);
    else if (e.key === "Home") select(0);
    else if (e.key === "End") select(last);
    else return;
    e.preventDefault();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label="Summit days"
        onKeyDown={onKeyDown}
        className="mb-8 flex flex-wrap gap-x-2 border-b border-line-subtle"
      >
        {days.map((day, i) => (
          <button
            key={day.id}
            ref={(el) => {
              tabs.current[i] = el;
            }}
            id={`tab-${day.id}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`panel-${day.id}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            className={cn(
              "-mb-px flex flex-col items-start border-0 border-b-[3px] border-solid bg-transparent px-4 pb-3 pt-2 text-left",
              "transition-colors duration-fast ease-standard",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand",
              i === active ? "border-brand text-ink" : "border-transparent text-ink-secondary hover:text-ink"
            )}
          >
            <span className="font-display text-h4 font-bold leading-snug">{day.label}</span>
            <span className="font-body text-caption">{day.date}</span>
          </button>
        ))}
      </div>

      {days.map((day, i) => (
        <div
          key={day.id}
          role="tabpanel"
          id={`panel-${day.id}`}
          aria-labelledby={`tab-${day.id}`}
          hidden={i !== active}
          tabIndex={0}
          className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
        >
          <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 lg:grid-cols-3">
            {day.presentations.map((p) => (
              <li
                key={p.file + p.title}
                className="flex min-w-0 flex-col overflow-hidden rounded-md border border-t-4 border-line-subtle border-t-brand bg-white"
              >
                <div className="flex flex-1 flex-col gap-2 p-5">
                  {p.time ? (
                    <span className="font-body text-overline font-bold uppercase tracking-overline text-brand">
                      {p.time}
                    </span>
                  ) : null}
                  <h3 className="m-0 font-display text-body-lg font-bold leading-snug text-ink text-pretty">
                    {p.title}
                  </h3>
                  <p className="m-0 mt-1 font-body text-body-sm font-semibold leading-snug text-ink">
                    {p.presenter}
                  </p>
                  {p.role ? (
                    <p className="m-0 font-body text-caption leading-normal text-ink-secondary">{p.role}</p>
                  ) : null}
                </div>

                <a
                  href={presentationUrl(p)}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    "flex items-center justify-between gap-3 border-t border-line-subtle px-5 py-3",
                    "font-body text-body-sm font-semibold text-brand no-underline",
                    "transition-colors duration-fast ease-standard hover:bg-blue-50",
                    "focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
                  )}
                >
                  <span>
                    Download PDF<span className="sr-only">: {p.title}</span>
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="font-normal text-caption text-ink-secondary">
                      {p.pages} slides · {p.size}
                    </span>
                    <Download className="h-4 w-4" aria-hidden="true" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
