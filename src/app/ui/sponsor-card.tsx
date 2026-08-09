import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { cn } from "../lib/utils";

interface CardProps {
  image: string;
  sponsorLevel: string;
  title: string;
  onShowModal: () => void;
  onClick?: () => void;
}

/**
 * Archive sponsor tile for the marquee. The tier band along the bottom uses
 * the design system's tier colours rather than the old metallic gradients —
 * flat fills only, no texture.
 */
const tierBand: Record<string, string> = {
  Platinum: "bg-tier-platinum-soft text-tier-platinum",
  Gold: "bg-tier-gold-soft text-tier-gold",
  Diamond: "bg-tier-diamond-soft text-tier-diamond",
  Silver: "bg-tier-silver-soft text-tier-silver",
};

const Card: React.FC<CardProps> = ({ image, sponsorLevel, onShowModal, onClick }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="group relative flex h-[350px] min-w-[250px] items-center justify-center overflow-hidden rounded-md border border-line-subtle bg-white"
      key={image}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
      onClick={onClick}
    >
      <span
        className={cn(
          "absolute inset-x-0 bottom-0 z-[2] border-t border-line-subtle px-4 py-3 text-center font-body text-overline font-bold uppercase tracking-overline",
          tierBand[sponsorLevel] ?? "bg-grey-100 text-grey-700"
        )}
      >
        {sponsorLevel}
      </span>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.2, 0, 0.2, 1] }}
          >
            <div aria-hidden="true" className="absolute h-full w-full bg-navy-950/[0.62]" />
            <button
              type="button"
              className="z-10 inline-flex items-center gap-2 rounded-sm bg-white px-4 py-[10px] font-body text-body-sm font-semibold text-blue-700 transition-colors duration-fast ease-standard hover:bg-blue-50"
              onClick={onShowModal}
            >
              About
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <Image
        src={image}
        alt={image.split(".")[0].split("/")[2].split("-")[0]}
        fill
        className="object-contain p-8 pb-16"
      />
    </motion.div>
  );
};

export default Card;
