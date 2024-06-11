import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { ArrowBigRight } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

interface CardProps {
  image: string;
  sponsorLevel: string;
  onShowModal: () => void;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  image,
  sponsorLevel,
  onShowModal,
  onClick,
}) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <motion.div
        className="relative group overflow-hidden h-[350px] min-w-[250px] rounded-xl flex justify-center items-center"
        key={image}
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
        onClick={onClick}
      >
        <p
          className={clsx(
            " group-hover:translate-y-16 text-center transition-all absolute mt-8 bottom-0 p-2 pt-4 px-4 bg-headings w-full h-16 rounded-b-xl mx-auto font-bold text-md",
            {
              " text-primary bg-gradient-to-t from-[#e5e4e2] to-[#ECEFF8]":
                sponsorLevel === "Platinum",
              " text-primary bg-gradient-to-t from-[#FFD700] from-10% to-[#ECEFF8]":
                sponsorLevel === "Gold",
              " text-primary bg-gradient-to-t from-[#b8f2ff] to-[#ECEFF8]":
                sponsorLevel === "Diamond",
              " text-primary bg-gradient-to-t from-[#c0c0c0] from-10% to-[#ECEFF8]":
                sponsorLevel === "Silver",
            }
          )}
        >
          {sponsorLevel}
        </p>
        {/* Hover overlay */}
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className="absolute left-0 top-0 bottom-0 right-0 z-10 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
              <motion.h1
                className="bg-headings font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75"
                initial={{ y: 10 }}
                animate={{ y: 0 }}
                exit={{ y: 10 }}
                onClick={() => {
                  onShowModal();
                }}
              >
                <span className="text-white">About</span>
                {/* change button to view {comapny.name} and have modal */}
                <ArrowBigRight className="h-4 w-4 text-white" />
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
        <Image
          src={image}
          alt={image.split(".")[0]}
          fill
          style={{ objectFit: "fill" }}
          className="p-8"
        />
      </motion.div>
    </>
  );
};

export default Card;
