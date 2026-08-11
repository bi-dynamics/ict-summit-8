/**
 * Type declarations for global (non-module) stylesheet imports.
 *
 * Next.js ships declarations for `*.module.css` only — see
 * `next/types/global.d.ts` — so a side-effect import like the
 * `import "./globals.css"` in `src/app/layout.tsx` has no declaration to
 * resolve against.
 *
 * TypeScript ignored that until 5.6 added `noUncheckedSideEffectImports`.
 * With the check on, the import reports TS2307. The project pins TypeScript
 * 5.4.5, so `next build` is unaffected, but editors that run their own newer
 * TypeScript flag it. Declaring the modules here fixes it for every consumer
 * regardless of compiler version or that flag's setting.
 */

declare module "*.css";
declare module "*.scss";
declare module "*.sass";
