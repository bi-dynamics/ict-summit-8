import * as React from "react";

import { cn } from "../lib/utils";

/**
 * A Facebook video in Facebook's own embedded player, 16:9 at full column
 * width. The iframe loads lazily, so it costs nothing until it scrolls into
 * view. Pair it with a visible "Watch on Facebook" link for visitors whose
 * browser or network blocks embedded Facebook content.
 */
export function FacebookVideo({
  title,
  embedUrl,
  className,
}: {
  /** Names the iframe for screen readers. */
  title: string;
  embedUrl: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-md bg-navy-950 shadow-[0_10px_30px_rgba(0,16,48,0.18)]",
        className
      )}
    >
      <iframe
        src={embedUrl}
        title={title}
        loading="lazy"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}
