import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * The standard section opener: overline, title and lede.
 *
 * The booklet sets its section headers in full uppercase ("ABOUT THE SUMMIT:").
 * On screen that uppercase survives as the small tracked overline only — the
 * heading itself is sentence case.
 */
export interface SectionHeadingProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  overline?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  inverse?: boolean;
  /** The short accent rule before the overline. Suppressed when centred. */
  rule?: boolean;
  as?: "h1" | "h2" | "h3";
}

export function SectionHeading({
  overline,
  title,
  description,
  align = "left",
  inverse = false,
  rule = true,
  as: Heading = "h2",
  className,
  ...props
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        centered ? "items-center text-center max-w-narrow mx-auto" : "items-start text-left",
        className
      )}
      {...props}
    >
      {overline ? (
        <div className="flex items-center gap-3">
          {rule && !centered ? (
            <span
              aria-hidden="true"
              className={cn("h-[2px] w-7 shrink-0", inverse ? "bg-gold-500" : "bg-brand")}
            />
          ) : null}
          <span
            className={cn(
              "font-body text-overline font-bold uppercase tracking-overline",
              inverse ? "text-gold-500" : "text-brand"
            )}
          >
            {overline}
          </span>
        </div>
      ) : null}

      {title ? (
        <Heading
          className={cn(
            "m-0 font-display text-h2 font-bold leading-snug tracking-tightish text-balance",
            inverse ? "text-white" : "text-ink"
          )}
        >
          {title}
        </Heading>
      ) : null}

      {description ? (
        <p
          className={cn(
            "m-0 max-w-measure font-body text-body-lg leading-relaxed text-pretty",
            inverse ? "text-white/75" : "text-ink-secondary"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
