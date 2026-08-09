import * as React from "react";
import Image from "next/image";
import { Badge } from "./badge";
import { cn } from "../../lib/utils";
import type { Tier } from "../../lib/summit-data";

/**
 * Presenter listing. The empty state is honest about what the booklet asks
 * sponsors to supply — an official JPG — rather than inventing a placeholder
 * portrait.
 */
export interface SpeakerCardProps {
  name: string;
  role?: string;
  organisation?: string;
  topic?: string;
  photo?: string;
  tier?: Tier;
  /** Photos vary in crop; `contain` keeps supplied portraits whole. */
  fit?: "cover" | "contain";
  className?: string;
}

export function SpeakerCard({
  name,
  role,
  organisation,
  topic,
  photo,
  tier,
  fit = "cover",
  className,
}: SpeakerCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-md border border-line-subtle bg-white",
        "transition-all duration-base ease-standard hover:-translate-y-[2px] hover:shadow-md",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-grey-100">
        {photo ? (
          <Image
            src={photo}
            alt={name}
            fill
            sizes="(max-width: 769px) 100vw, (max-width: 1025px) 50vw, 33vw"
            className={fit === "contain" ? "object-contain" : "object-cover"}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-body text-caption text-grey-400">
            Official photo (JPG)
          </div>
        )}
        {tier ? (
          <div className="absolute left-3 top-3">
            <Badge tone={tier} uppercase>
              {tier}
            </Badge>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col gap-2 p-5">
        <div className="font-display text-h4 font-bold leading-snug text-ink">{name}</div>
        {role || organisation ? (
          <div className="font-body text-body-sm leading-normal text-ink-secondary">
            {role}
            {role && organisation ? " · " : ""}
            {organisation}
          </div>
        ) : null}
        {topic ? (
          <div className="mt-2 border-t border-line-subtle pt-3 font-body text-body-sm leading-normal text-ink">
            {topic}
          </div>
        ) : null}
      </div>
    </div>
  );
}
