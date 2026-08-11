import { motion } from "framer-motion";
import React from "react";
import { Download } from "lucide-react";
import Link from "next/link";

interface CardProps {
  image: string;
  href: string;
  title: string;
}

/**
 * 2024 presentation tile. The 2024 set has no per-talk artwork — every entry
 * carries the same summit mark — so the tile leads with the talk title and
 * speaker instead of a redundant logo.
 */
const Card_2024: React.FC<CardProps> = ({ href, title }) => (
  <motion.div
    className="relative flex h-[350px] min-w-[250px] max-w-[280px] flex-col overflow-hidden rounded-md border border-t-4 border-line-subtle border-t-brand bg-white"
    key={href}
  >
    <div className="flex flex-1 flex-col gap-3 p-6">
      <span className="font-body text-overline font-bold uppercase tracking-overline text-brand">
        Presentation
      </span>
      <span className="font-display text-h4 font-bold leading-snug text-ink text-pretty">
        {title}
      </span>
    </div>

    <Link
      href={href}
      target="_blank"
      referrerPolicy="no-referrer"
      title={`Download ${title}`}
      className="flex items-center justify-center gap-2 border-t border-line-subtle px-4 py-4 font-body text-body-sm font-semibold text-brand no-underline transition-colors duration-fast ease-standard hover:bg-blue-50 hover:text-blue-800"
    >
      Download PDF
      <Download className="h-4 w-4" />
    </Link>
  </motion.div>
);

export default Card_2024;
