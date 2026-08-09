import * as React from "react";
import { cn } from "../../lib/utils";

/**
 * Layout primitives.
 *
 * A single 1200px container with 32px page gutters. Section rhythm runs on the
 * large end of the scale (64/80/96px vertical padding). Body sections
 * alternate white and the sunken grey — flat fills, no texture, and never
 * more than two background tones on a page.
 */

type Tone = "page" | "sunken" | "inverse";

const toneClass: Record<Tone, string> = {
  page: "bg-white",
  sunken: "bg-grey-50",
  inverse: "bg-navy-950 text-white",
};

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: Tone;
  /** Vertical rhythm. `lg` is the default 96px section padding. */
  pad?: "md" | "lg";
  containerClassName?: string;
}

export function Section({
  tone = "page",
  pad = "lg",
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        toneClass[tone],
        pad === "lg" ? "py-16 md:py-24" : "py-12 md:py-20",
        "px-4 sm:px-6 md:px-8",
        className
      )}
      {...props}
    >
      <div className={cn("mx-auto w-full max-w-container", containerClassName)}>{children}</div>
    </section>
  );
}

export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("mx-auto w-full max-w-container", className)} {...props}>
      {children}
    </div>
  );
}
