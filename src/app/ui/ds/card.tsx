import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

/**
 * Container.
 *
 * Separation comes from a 1px rule, not a shadow — this is the system's
 * strongest habit. Shadows are rationed to hover (md) and dropdowns (lg), and
 * every one is navy-tinted rather than black. A 4px top rule in a tier colour
 * is how a card declares its sponsorship level.
 */
const card = cva("relative overflow-hidden rounded-md transition-all duration-base ease-standard", {
  variants: {
    variant: {
      default: "bg-white border border-line-subtle",
      raised: "bg-white border border-line-subtle shadow-md",
      sunken: "bg-grey-50 border border-line-subtle",
      inverse: "bg-navy-950 border border-white/[0.12] text-white",
      outline: "bg-transparent border border-line",
    },
    padding: {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
    interactive: {
      true: "cursor-pointer hover:-translate-y-[2px] hover:shadow-lg hover:border-line",
      false: "",
    },
  },
  defaultVariants: { variant: "default", padding: "md", interactive: false },
});

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof card> {
  /** Tier colour for the 4px declaring rule along the card's top edge. */
  accent?: string;
}

export function Card({
  className,
  variant,
  padding,
  interactive,
  accent,
  style,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(card({ variant, padding, interactive }), className)}
      style={accent ? { borderTop: `4px solid ${accent}`, ...style } : style}
      {...props}
    >
      {children}
    </div>
  );
}
