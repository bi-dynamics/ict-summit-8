import * as React from "react";
import { cn } from "../../lib/utils";
import type { SummitEvent } from "../../lib/summit-data";

/**
 * One row of the important-dates table. A 4px *left* rule in the brand colour
 * marks the highlighted row — the counterpart to the 4px *top* rule that
 * declares a sponsorship tier on a card.
 */
export function EventRow({ name, date, town, detail, dressCode, highlight = false }: SummitEvent) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-start gap-2 border-b border-l-rule border-line-subtle px-4 py-5 last:border-b-0 sm:px-6",
        "md:grid-cols-[150px_1fr_180px] md:gap-6",
        highlight ? "border-l-brand bg-blue-50" : "border-l-transparent"
      )}
    >
      <div
        className={cn(
          "font-display text-body-sm font-bold leading-snug",
          highlight ? "text-blue-700" : "text-ink"
        )}
      >
        {date}
      </div>

      <div>
        <div className="font-body text-body font-semibold leading-snug text-ink">{name}</div>
        {detail ? (
          <div className="mt-2 font-body text-body-sm leading-normal text-ink-secondary">
            {detail}
          </div>
        ) : null}
        {dressCode ? (
          <div className="mt-2 font-body text-caption italic text-ink-muted">
            Dress code: {dressCode}
          </div>
        ) : null}
      </div>

      <div className="font-body text-body-sm leading-normal text-ink-secondary">{town}</div>
    </div>
  );
}
