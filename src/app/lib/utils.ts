import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

/**
 * tailwind-merge resolves conflicts by looking class names up in its own copy
 * of the *default* Tailwind config. Our type scale renames every size
 * (`text-body-sm`, `text-h2`, `text-overline`, ...), and tailwind-merge does
 * not recognise those — so it falls back to treating any unknown `text-*` as
 * a text *colour* and resolves it against real colours, silently dropping
 * whichever came first. That deleted `text-white` from primary buttons,
 * `text-blue-700` from inverse buttons, and `text-h2` from section headings.
 *
 * Registering the scale under `font-size` puts each class in the right
 * conflict group, so a size and a colour can coexist.
 */
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [
        {
          text: [
            "display-lg",
            "display",
            "h1",
            "h2",
            "h3",
            "h4",
            "body-lg",
            "body",
            "body-sm",
            "caption",
            "overline",
          ],
        },
      ],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
