import * as React from "react";
import Image from "next/image";
import { SectionHeading } from "./section-heading";
import { cn } from "../../lib/utils";

/**
 * Inner-page header — the booklet's horizontal photo band. Same treatment as
 * the hero: photography under the brand wash, never raw behind white type.
 */
export interface PageHeaderProps {
  overline?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  backgroundSrc?: string;
  children?: React.ReactNode;
  className?: string;
}

export function PageHeader({
  overline,
  title,
  description,
  backgroundSrc,
  children,
  className,
}: PageHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-navy-950 px-4 pb-16 pt-16 sm:px-6 md:px-8 md:pt-20",
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
          sizes="100vw"
          className="object-cover opacity-40"
        />
      ) : null}
      <div aria-hidden="true" className="bg-brand-wash absolute inset-0" />

      <div className="relative mx-auto w-full max-w-container">
        <SectionHeading
          as="h1"
          inverse
          overline={overline}
          title={title}
          description={description}
        />
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
