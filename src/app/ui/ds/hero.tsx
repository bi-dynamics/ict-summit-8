import * as React from "react";
import Image from "next/image";
import { cn } from "../../lib/utils";

/**
 * Full-bleed homepage hero with an open right-hand slot.
 *
 * Full-bleed photography appears only in heroes and page headers, and always
 * under the blue→navy brand wash at 92%, with the photo itself at 40–55%.
 * White type never sits on a raw photograph.
 */
export interface HeroProps {
  overline?: string;
  title?: React.ReactNode;
  theme?: React.ReactNode;
  dates?: string;
  venue?: string;
  region?: string;
  backgroundSrc?: string;
  actions?: React.ReactNode;
  aside?: React.ReactNode;
  className?: string;
}

export function Hero({
  overline,
  title,
  theme,
  dates,
  venue,
  region,
  backgroundSrc,
  actions,
  aside,
  className,
}: HeroProps) {
  const facts = [
    { key: "Dates", value: dates },
    { key: "Venue", value: venue },
    { key: "Region", value: region },
  ].filter((f) => f.value);

  return (
    <section
      className={cn(
        "relative flex min-h-[560px] items-center overflow-hidden bg-navy-950 lg:min-h-[620px]",
        className
      )}
    >
      {backgroundSrc ? (
        <Image
          src={backgroundSrc}
          alt=""
          aria-hidden="true"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover opacity-55"
        />
      ) : null}
      <div aria-hidden="true" className="bg-brand-wash absolute inset-0" />

      <div
        className={cn(
          "relative mx-auto grid w-full max-w-container items-center gap-10 px-4 py-16 sm:px-6 md:px-8 lg:gap-16 lg:py-20",
          aside ? "lg:grid-cols-[1.15fr_0.85fr]" : "grid-cols-1"
        )}
      >
        <div className="flex flex-col gap-5 text-white">
          {overline ? (
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-[2px] w-7 shrink-0 bg-gold-500" />
              <span className="font-body text-overline font-bold uppercase tracking-overline text-gold-500">
                {overline}
              </span>
            </div>
          ) : null}

          {title ? (
            <h1 className="m-0 font-display text-h1 font-black leading-tight tracking-display text-balance md:text-display">
              {title}
            </h1>
          ) : null}

          {theme ? (
            <p className="m-0 max-w-[52ch] font-body text-body-lg leading-relaxed text-white/80 text-pretty">
              {theme}
            </p>
          ) : null}

          {facts.length ? (
            <div className="mt-2 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/20 pt-5">
              {facts.map((f) => (
                <div key={f.key}>
                  <div className="font-body text-overline font-bold uppercase tracking-overline text-white/55">
                    {f.key}
                  </div>
                  <div className="mt-1 font-display text-h4 font-semibold text-white">
                    {f.value}
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {actions ? <div className="mt-4 flex flex-wrap gap-3">{actions}</div> : null}
        </div>

        {aside ? <div>{aside}</div> : null}
      </div>
    </section>
  );
}
