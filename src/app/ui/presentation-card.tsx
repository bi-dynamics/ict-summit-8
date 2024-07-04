import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";

interface CardProps {
  image: string;
  href: string;
}

const Card: React.FC<CardProps> = ({ image, href }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden h-[350px] min-w-[250px] rounded-2xl flex justify-center items-center"
      key={image}
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <motion.div className="absolute left-0 top-0 px-2 bottom-0 right-0 z-10 flex justify-center items-end">
        <div className="absolute bg-gradient-to-t from-primary to-transparent pointer-events-none opacity-50 h-1/2 w-full" />
        <Link
          href={href}
          className="w-fit h-fit z-10"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          <Button
            about="download presentation"
            aria-label="Download Presentation"
            className="bg-transparent text-headings active:scale-[.99] transition-all hover:scale-105 hover:text-white font-semibold mb-2 text-sm z-10 w-full rounded-lg flex items-center justify-center gap-[0.5ch] hover:border hover:border-primary"
          >
            Download Presentation
          </Button>
        </Link>
      </motion.div>

      <Image
        src={image}
        alt={image}
        fill
        style={{ objectFit: "fill" }}
        className="p-8"
      />
    </motion.div>
  );
};

export default Card;
