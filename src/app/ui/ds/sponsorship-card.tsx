import * as React from "react";
import { Badge } from "./badge";
import { cn } from "../../lib/utils";
import type { Tier } from "../../lib/summit-data";

const tierMeta: Record<Tier, { rule: string; soft: string; dot: string; tone: Tier }> = {
  platinum: {
    rule: "border-t-tier-platinum",
    soft: "bg-tier-platinum-soft",
    dot: "bg-tier-platinum",
    tone: "platinum",
  },
  gold: {
    rule: "border-t-tier-gold",
    soft: "bg-tier-gold-soft",
    dot: "bg-tier-gold",
    tone: "gold",
  },
  diamond: {
    rule: "border-t-tier-diamond",
    soft: "bg-tier-diamond-soft",
    dot: "bg-tier-diamond",
    tone: "diamond",
  },
  silver: {
    rule: "border-t-tier-silver",
    soft: "bg-tier-silver-soft",
    dot: "bg-tier-silver",
    tone: "silver",
  },
};

const featuredBorder: Record<Tier, string> = {
  platinum: "border-tier-platinum",
  gold: "border-tier-gold",
  diamond: "border-tier-diamond",
  silver: "border-tier-silver",
};

export interface SponsorshipCardProps {
  tier: Tier;
  name: string;
  amount: string;
  note?: string;
  benefits: string[];
  featured?: boolean;
  /** Rendered in the card footer. Usually a link to the pledge form PDF. */
  action?: React.ReactNode;
  className?: string;
}

/**
 * One of the booklet's four packages. The 4px top rule in the tier colour is
 * how the card declares its level; the featured (Platinum / Main Sponsor)
 * card additionally carries a full tier border and a soft tinted head.
 */
export function SponsorshipCard({
  tier,
  name,
  amount,
  note,
  benefits,
  featured = false,
  action,
  className,
}: SponsorshipCardProps) {
  const m = tierMeta[tier];

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-md border border-t-4 bg-white",
        "transition-all duration-base ease-standard hover:-translate-y-[2px]",
        // The all-sides border colour must precede the tier rule: an
        // all-sides colour supersedes a top-only one, so putting m.rule first
        // would let border-line-subtle overwrite the tier accent.
        featured ? cn(featuredBorder[tier], "shadow-md") : "border-line-subtle",
        m.rule,
        className
      )}
    >
      <div className={cn("border-b border-line-subtle p-6", featured ? m.soft : "bg-transparent")}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Badge tone={m.tone} uppercase>
            {name}
          </Badge>
          {featured ? (
            <Badge tone="brand" uppercase>
              Main sponsor
            </Badge>
          ) : null}
        </div>

        <div className="mt-4 font-display text-h1 font-bold leading-tight tracking-tightish text-ink">
          {amount}
        </div>

        {note ? (
          <div className="mt-2 font-body text-body-sm text-ink-secondary">{note}</div>
        ) : null}
      </div>

      <ul className="m-0 flex flex-1 list-none flex-col gap-3 p-6">
        {benefits.map((b) => (
          <li
            key={b}
            className="flex items-start gap-3 font-body text-body-sm leading-normal text-ink-secondary"
          >
            {/* The booklet's Wingdings bullet, redrawn as a 6px tier dot. */}
            <span
              aria-hidden="true"
              className={cn("mt-[7px] h-[6px] w-[6px] shrink-0 rounded-pill", m.dot)}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {action ? <div className="px-6 pb-6">{action}</div> : null}
    </div>
  );
}
