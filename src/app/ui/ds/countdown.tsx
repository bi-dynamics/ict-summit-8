"use client";

import * as React from "react";
import { cn } from "../../lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");

export interface CountdownProps {
  /** ISO timestamp of the summit opening. */
  target: string;
  inverse?: boolean;
  compact?: boolean;
  className?: string;
}

/**
 * Live countdown to the summit opening.
 *
 * The glass treatment (translucent fill + 12px blur + hairline white border)
 * is only correct because these cells sit on hero photography. It is never
 * used on a solid background.
 *
 * The first render deliberately shows placeholder dashes: the remaining time
 * depends on the client clock, so rendering a real value on the server would
 * mismatch on hydration.
 */
export function Countdown({ target, inverse = false, compact = false, className }: CountdownProps) {
  const [remaining, setRemaining] = React.useState<number | null>(null);

  React.useEffect(() => {
    const tick = () => setRemaining(Math.max(0, new Date(target).getTime() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const units =
    remaining === null
      ? [
          { label: "Days", value: null },
          { label: "Hours", value: null },
          { label: "Minutes", value: null },
          { label: "Seconds", value: null },
        ]
      : [
          { label: "Days", value: Math.floor(remaining / 86400000) },
          { label: "Hours", value: Math.floor(remaining / 3600000) % 24 },
          { label: "Minutes", value: Math.floor(remaining / 60000) % 60 },
          { label: "Seconds", value: Math.floor(remaining / 1000) % 60 },
        ];

  return (
    <div
      className={cn("flex", compact ? "gap-3" : "gap-4", className)}
      role="timer"
      aria-label="Time until the summit opens"
    >
      {units.map((u) => (
        <div
          key={u.label}
          className={cn(
            "flex-1 rounded-md border text-center",
            compact ? "min-w-[62px] p-3" : "min-w-[78px] p-4",
            inverse
              ? "glass-panel border-white/20"
              : "border-line-subtle bg-grey-50"
          )}
        >
          <div
            className={cn(
              "font-display font-bold leading-none tracking-tightish tabular-nums",
              compact ? "text-h3" : "text-h2",
              inverse ? "text-white" : "text-ink"
            )}
          >
            {u.value === null ? "––" : pad(u.value)}
          </div>
          <div
            className={cn(
              "mt-2 font-body text-overline font-semibold uppercase tracking-overline",
              inverse ? "text-white/70" : "text-ink-muted"
            )}
          >
            {u.label}
          </div>
        </div>
      ))}
    </div>
  );
}
