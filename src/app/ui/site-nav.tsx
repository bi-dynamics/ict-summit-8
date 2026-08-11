"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, SquareArrowOutUpRight, X } from "lucide-react";
import { cn } from "../lib/utils";
import { ASSETS, NAV_ITEMS, SUMMIT, type NavItem } from "../lib/summit-data";

/**
 * Site header.
 *
 * Nothing in this system is fixed or sticky — the header scrolls away with
 * the page, which is why there is no scroll listener here.
 */
export default function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [openDropdown, setOpenDropdown] = React.useState<string | null>(null);

  const isActive = (item: NavItem) =>
    item.href === "/"
      ? pathname === "/"
      : (item.href && pathname.startsWith(item.href)) ||
        (item.children ?? []).some((c) => pathname.startsWith(c.href));

  return (
    <header className="border-b border-line-subtle bg-white">
      <div className="mx-auto flex w-full max-w-container flex-col items-center gap-4 px-4 pt-5 sm:px-6 md:px-8">
        <Link
          href="/"
          className="flex flex-col items-center gap-2 no-underline"
          title="National ICT Summit — home"
        >
          <span className="flex items-center gap-4">
            <Image
              src={ASSETS.crest}
              alt="Republic of Namibia Coat of Arms"
              width={72}
              height={72}
              priority
              className="h-[56px] w-auto object-contain md:h-[72px]"
            />
            <Image
              src={ASSETS.logo}
              alt="National ICT Summit"
              width={140}
              height={66}
              priority
              className="h-[50px] w-auto object-contain md:h-[66px]"
            />
          </span>
          <span className="text-center font-body text-body-sm font-bold text-brand text-balance">
            Ministry of Information and Communication Technology
          </span>
        </Link>

        {/* Mobile trigger */}
        <div className="flex w-full items-center justify-between pb-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-expanded={mobileOpen}
            aria-controls="site-nav-mobile"
            className="inline-flex items-center gap-2 rounded-sm border border-line px-4 py-2 font-body text-body-sm font-semibold text-ink transition-colors duration-fast ease-standard hover:bg-grey-100"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            Menu
          </button>

          {/*
            The 2026 registration form is a separate PHP application served by
            nginx at /registerictsummit. It is NOT a Next.js route, so it must
            be a plain <a> — next/link would attempt a client-side navigation
            and 404.
          */}
          <a
            href={SUMMIT.registrationUrl}
            title="Register for the 9th National ICT Summit 2026"
            className="inline-flex min-h-[34px] items-center gap-2 rounded-sm bg-brand px-[14px] py-2 font-body text-caption font-semibold text-white no-underline transition-colors duration-fast ease-standard hover:bg-brand-hover active:scale-[0.98]"
          >
            Registration
            <SquareArrowOutUpRight className="h-[14px] w-[14px]" />
          </a>
        </div>

        {mobileOpen ? (
          <nav
            id="site-nav-mobile"
            className="flex w-full flex-col gap-1 border-t border-line-subtle pb-4 pt-3 lg:hidden"
          >
            {NAV_ITEMS.map((item) =>
              item.children ? (
                <div key={item.label} className="flex flex-col">
                  <span className="px-3 py-2 font-body text-overline font-bold uppercase tracking-overline text-ink-muted">
                    {item.label}
                  </span>
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-sm px-6 py-2 font-body text-body-sm font-medium text-ink no-underline transition-colors duration-fast ease-standard hover:bg-blue-50 hover:text-blue-700"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-sm px-3 py-2 font-body text-body-sm no-underline transition-colors duration-fast ease-standard hover:bg-blue-50 hover:text-blue-700",
                    isActive(item) ? "bg-blue-50 font-semibold text-brand" : "font-medium text-ink-secondary"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
        ) : null}

        {/* Desktop */}
        <nav className="hidden flex-wrap items-center justify-center gap-1 pb-3 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item);

            if (item.children) {
              const open = openDropdown === item.label;
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(open ? null : item.label)}
                    aria-expanded={open}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-sm px-[14px] py-[10px] font-body text-body-sm transition-colors duration-fast ease-standard hover:text-brand",
                      active ? "bg-blue-50 font-semibold text-brand" : "font-medium text-ink-secondary"
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        "h-[14px] w-[14px] transition-transform duration-fast ease-standard",
                        open && "rotate-180"
                      )}
                    />
                  </button>

                  {open ? (
                    <div className="absolute left-0 top-full z-40 flex min-w-[220px] flex-col rounded-md border border-t-4 border-line-subtle border-t-brand bg-white p-2 shadow-lg">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpenDropdown(null)}
                          className="whitespace-nowrap rounded-sm px-3 py-[10px] font-body text-body-sm font-medium text-ink no-underline transition-colors duration-fast ease-standard hover:bg-blue-50 hover:text-blue-700"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href!}
                className={cn(
                  "whitespace-nowrap rounded-sm px-[14px] py-[10px] font-body text-body-sm no-underline transition-colors duration-fast ease-standard hover:text-brand",
                  active ? "bg-blue-50 font-semibold text-brand" : "font-medium text-ink-secondary"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <a
            href={SUMMIT.registrationUrl}
            title="Register for the 9th National ICT Summit 2026"
            className="ml-4 inline-flex min-h-[34px] items-center gap-2 rounded-sm bg-brand px-[14px] py-2 font-body text-caption font-semibold text-white no-underline transition-colors duration-fast ease-standard hover:bg-brand-hover active:scale-[0.98]"
          >
            Registration
            <SquareArrowOutUpRight className="h-[14px] w-[14px]" />
          </a>
        </nav>
      </div>
    </header>
  );
}
