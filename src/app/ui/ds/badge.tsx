import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

/**
 * Classification pill. Badges are the only fully-rounded element in the
 * system — everything else uses the 4px/8px radii.
 */
const badge = cva(
  "inline-flex items-center gap-2 rounded-pill border font-body text-overline font-semibold leading-[1.3]",
  {
    variants: {
      tone: {
        neutral: "bg-grey-100 text-grey-700 border-transparent",
        brand: "bg-blue-50 text-blue-700 border-transparent",
        success: "bg-green-100 text-green-600 border-transparent",
        danger: "bg-red-100 text-red-600 border-transparent",
        warning: "bg-gold-100 text-[#8a6d00] border-transparent",
        platinum: "bg-tier-platinum-soft text-tier-platinum border-transparent",
        gold: "bg-tier-gold-soft text-tier-gold border-transparent",
        diamond: "bg-tier-diamond-soft text-tier-diamond border-transparent",
        silver: "bg-tier-silver-soft text-tier-silver border-transparent",
        inverse: "bg-white/[0.14] text-white border-transparent",
      },
      uppercase: {
        true: "uppercase tracking-overline px-[10px] py-[5px]",
        false: "normal-case tracking-[0.01em] px-[10px] py-1",
      },
    },
    defaultVariants: { tone: "neutral", uppercase: false },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badge> {}

export function Badge({ className, tone, uppercase, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badge({ tone, uppercase }), className)} {...props}>
      {children}
    </span>
  );
}
