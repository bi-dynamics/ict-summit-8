/**
 * Tailwind theme for the National ICT Summit design system.
 *
 * Scales mirror src/app/globals.css token-for-token. Hex is repeated here
 * rather than referencing the custom properties so that Tailwind's opacity
 * modifiers (bg-navy-950/60) keep working.
 */

const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        md: "769px",
        lg: "1025px",
      },
      colors: {
        blue: {
          50: "#eef2fe",
          100: "#dce4fd",
          200: "#b9c8fb",
          300: "#8fa6f6",
          400: "#5b7bee",
          500: "#1441cc",
          600: "#1136a8",
          700: "#0d2b85",
          800: "#0a2065",
          900: "#071747",
        },
        navy: {
          900: "#002050",
          950: "#001030",
        },
        green: {
          100: "#d9f0e2",
          500: "#009540",
          600: "#007a34",
        },
        red: {
          100: "#fbdde2",
          500: "#d40d2f",
          600: "#ad0a26",
        },
        gold: {
          100: "#fff4cc",
          500: "#ffd000",
          600: "#d6ae00",
        },
        grey: {
          0: "#ffffff",
          50: "#f6f8fb",
          100: "#eceff5",
          200: "#dde2ec",
          300: "#c3cbda",
          400: "#97a1b5",
          500: "#6b768e",
          600: "#4c566b",
          700: "#363e4f",
          800: "#232936",
          900: "#141821",
        },
        tier: {
          platinum: "#3d4757",
          "platinum-soft": "#e7eaf0",
          gold: "#b8860b",
          "gold-soft": "#fdf1d4",
          diamond: "#1f8fb5",
          "diamond-soft": "#ddf1f8",
          silver: "#6f7b8a",
          "silver-soft": "#eef1f4",
        },
        brand: {
          DEFAULT: "#1441cc",
          hover: "#1136a8",
          active: "#0d2b85",
        },
        // Text tones. Named "ink" so text-ink / text-ink-secondary read
        // cleanly instead of colliding with Tailwind's own text- prefix.
        ink: {
          DEFAULT: "#141821",
          secondary: "#4c566b",
          muted: "#6b768e",
          inverse: "#ffffff",
        },
        // 1px rules are this system's primary separator.
        line: {
          DEFAULT: "#c3cbda",
          subtle: "#dde2ec",
          strong: "#97a1b5",
        },
        // Legacy alias kept for the untouched form/package primitives.
        headings: "#0a2065",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        "display-lg": ["4.25rem", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        display: ["3.25rem", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        h1: ["2.5rem", { lineHeight: "1.06", letterSpacing: "-0.02em" }],
        h2: ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h3: ["1.4375rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        h4: ["1.1875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        body: ["1rem", { lineHeight: "1.45" }],
        "body-sm": ["0.9375rem", { lineHeight: "1.45" }],
        caption: ["0.8125rem", { lineHeight: "1.45" }],
        overline: ["0.75rem", { lineHeight: "1.2", letterSpacing: "0.14em" }],
      },
      lineHeight: {
        tight: "1.06",
        snug: "1.2",
        normal: "1.45",
        relaxed: "1.65",
      },
      letterSpacing: {
        display: "-0.02em",
        tightish: "-0.01em",
        overline: "0.14em",
      },
      fontWeight: {
        black: "800",
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        md: "8px",
        lg: "14px",
        xl: "20px",
        pill: "999px",
      },
      // --rule-accent (4px) is Tailwind's stock border-*-4, so no custom width
      // is defined here: a custom name would be unknown to tailwind-merge and
      // get mistaken for a border *colour*, dropping one of the two classes.
      boxShadow: {
        sm: "0 1px 2px rgba(0, 16, 48, 0.06), 0 1px 1px rgba(0, 16, 48, 0.04)",
        md: "0 4px 12px rgba(0, 16, 48, 0.08), 0 1px 3px rgba(0, 16, 48, 0.06)",
        lg: "0 12px 32px rgba(0, 16, 48, 0.12), 0 2px 8px rgba(0, 16, 48, 0.06)",
        brand: "0 8px 24px rgba(20, 65, 204, 0.24)",
      },
      maxWidth: {
        container: "1200px",
        narrow: "760px",
        measure: "62ch",
      },
      fontFamily: {
        display: ["var(--font-archivo)", ...fontFamily.sans],
        body: ["var(--font-source-sans)", ...fontFamily.sans],
        sans: ["var(--font-source-sans)", ...fontFamily.sans],
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0, 0.2, 1)",
      },
      transitionDuration: {
        fast: "140ms",
        base: "220ms",
        slow: "360ms",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // Section reveal: a fade with a short, distance-limited rise.
        "reveal-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "reveal-up": "reveal-up 360ms cubic-bezier(0.2, 0, 0.2, 1) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
