import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ASSETS, CONTACTS, SUMMIT } from "../lib/summit-data";

const columns = [
  {
    title: "Summit",
    links: [
      { label: "Home", href: "/" },
      { label: "Sponsorship packages", href: "/sponsorship" },
      { label: "About the summit", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Previous summits",
    links: [
      { label: "8th Summit — 2024", href: "/ict-summit-2024" },
      { label: "7th Summit — 2023", href: "/ict-summit-2023" },
    ],
  },
];

/**
 * Navy footer with ministry attribution, link columns, named contacts and the
 * flag device — the one place the three Namibian accents appear together.
 */
export default function SiteFooter() {
  return (
    <footer className="bg-navy-950 px-4 pb-8 pt-16 font-body text-white sm:px-6 md:px-8">
      <div className="mx-auto w-full max-w-container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Image
                src={ASSETS.crest}
                alt="Republic of Namibia"
                width={60}
                height={60}
                className="h-[60px] w-auto object-contain"
              />
              <Image
                src={ASSETS.logo}
                alt="National ICT Summit"
                width={110}
                height={52}
                className="h-[52px] w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="m-0 max-w-[42ch] text-body-sm leading-relaxed text-white/[0.68]">
              Ministry of Information and Communication Technology, Republic of Namibia.
            </p>
            <p className="m-0 text-body-sm leading-relaxed text-white/[0.68]">
              {SUMMIT.dates} · {SUMMIT.venue}, {SUMMIT.region}
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <div className="text-overline font-bold uppercase tracking-overline text-gold-500">
                {col.title}
              </div>
              {col.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-body-sm text-white/[0.72] no-underline transition-colors duration-fast ease-standard hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <div className="text-overline font-bold uppercase tracking-overline text-gold-500">
              Enquiries
            </div>
            {CONTACTS.map((c) => (
              <div key={c.email} className="text-body-sm leading-normal text-white/[0.72]">
                <div className="font-semibold text-white">{c.name}</div>
                <div>{c.role}</div>
                <a
                  href={`mailto:${c.email}`}
                  className="block break-all text-white/[0.72] no-underline transition-colors duration-fast ease-standard hover:text-white"
                >
                  {c.email}
                </a>
                <a
                  href={`tel:${c.phone.replace(/\s/g, "")}`}
                  className="block text-white/[0.72] no-underline transition-colors duration-fast ease-standard hover:text-white"
                >
                  {c.phone}
                </a>
              </div>
            ))}
            <a
              href={`mailto:${SUMMIT.email}`}
              className="text-body-sm text-white/[0.72] no-underline transition-colors duration-fast ease-standard hover:text-white"
            >
              {SUMMIT.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-white/[0.14] pt-6 text-caption text-white/[0.52]">
          <span>
            © Copyright 2026, Government of the Republic of Namibia, MICT. Powered by{" "}
            <a
              href="https://bi-dynamics.com/"
              title="BI-Dynamics"
              className="font-semibold text-white/70 no-underline transition-colors duration-fast ease-standard hover:text-white"
            >
              BI Dynamics Pty Ltd.
            </a>
          </span>
          {/* Flag device — the only place the three accents appear together. */}
          <span aria-hidden="true" className="flex items-center gap-1">
            <span className="h-[3px] w-[22px] bg-blue-400" />
            <span className="h-[3px] w-[22px] bg-red-500" />
            <span className="h-[3px] w-[22px] bg-green-500" />
          </span>
        </div>
      </div>
    </footer>
  );
}
