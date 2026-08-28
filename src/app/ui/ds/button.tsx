import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

/**
 * The action control.
 *
 * Controls use a crisper 4px radius than cards — the contrast between sharp
 * controls and softer 8px cards is intentional. Hover always changes colour,
 * never opacity; press is a uniform scale(0.98) with no further colour shift.
 */
const summitButton = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm",
    "font-body font-semibold leading-none tracking-[0.01em]",
    "border transition-colors duration-fast ease-standard",
    "active:scale-[0.98] active:transition-transform",
    "disabled:pointer-events-none disabled:opacity-45",
  ],
  {
    variants: {
      variant: {
        primary: "bg-brand text-white border-brand hover:bg-brand-hover hover:border-brand-hover",
        secondary: "bg-transparent text-brand border-line hover:bg-blue-50 hover:border-blue-300",
        ghost: "bg-transparent text-ink border-transparent hover:bg-grey-100",
        inverse: "bg-white text-blue-700 border-white hover:bg-blue-50 hover:border-blue-50",
        outlineInverse:
          "bg-transparent text-white border-white/55 hover:bg-white/10 hover:border-white",
      },
      size: {
        sm: "min-h-[34px] px-[14px] py-2 text-caption",
        md: "min-h-[42px] px-5 py-[11px] text-body-sm",
        lg: "min-h-[52px] px-7 py-[15px] text-body",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
    },
    defaultVariants: { variant: "primary", size: "md", fullWidth: false },
  }
);

type SummitButtonVariants = VariantProps<typeof summitButton>;

export interface SummitButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    SummitButtonVariants {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

export function SummitButton({
  className,
  variant,
  size,
  fullWidth,
  iconLeft,
  iconRight,
  children,
  type = "button",
  ...props
}: SummitButtonProps) {
  return (
    <button
      type={type}
      className={cn(summitButton({ variant, size, fullWidth }), className)}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

export interface SummitLinkButtonProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "color">,
    SummitButtonVariants {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

/**
 * Anchor-shaped button. Used for the external registration link and every PDF
 * download, both of which leave the Next.js router.
 */
export function SummitLinkButton({
  className,
  variant,
  size,
  fullWidth,
  iconLeft,
  iconRight,
  children,
  ...props
}: SummitLinkButtonProps) {
  return (
    <a
      className={cn(summitButton({ variant, size, fullWidth }), "no-underline", className)}
      {...props}
    >
      {iconLeft}
      {children}
      {iconRight}
    </a>
  );
}

export { summitButton };
