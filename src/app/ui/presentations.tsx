"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import Card from "./presentation-card";
import { SectionHeading } from "./ds/section-heading";

const images = [
  {
    image: "/presentations/presentation-ixpnam.svg",
    presentation: "presentations/IXP-Namibia-Presentation-ICT-Summit-2023.pdf",
  },
  {
    image: "/presentations/presentation-unodc.svg",
    presentation: "presentations/Navigating-the-Cybersecurity-Landscape.pdf",
  },
  {
    image: "/presentations/presentation-salt-essential-it.svg",
    presentation:
      "presentations/SALT2023-CyberSecurity-Awareness-Session-for-NA-Chapters-1-to-8-Youth.pdf",
  },
  {
    image: "/presentations/presentation-ict.svg",
    presentation: "presentations/Iyaloos-ICT-Sumit-Presentation-2023.pdf",
  },
  {
    image: "/presentations/presentation-unodc.svg",
    presentation: "presentations/balancing-risk-and-reward.pdf",
  },
  {
    image: "/presentations/presentation-cran.svg",
    presentation: "presentations/CRAN2023.pdf",
  },
];

export default function Presentations() {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width, mustFinish]);

  return (
    <section
      id="presentations-2023"
      className="relative flex flex-col items-center justify-center gap-10 overflow-hidden bg-grey-50 py-16 md:py-24"
    >
      <SectionHeading
        align="center"
        overline="Presentations"
        title="2023 presentations"
        description="Download the slides presented at the 7th National ICT Summit."
        className="z-[12] px-4 sm:px-6"
      />
      {/* Edge fades so the marquee reads as continuous rather than clipped. */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 z-[11] h-full w-1/4 bg-gradient-to-r from-grey-50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 z-[11] h-full w-1/4 bg-gradient-to-l from-grey-50 to-transparent"
      />
      <motion.div
        className="relative left-0 z-10 flex gap-4 overflow-hidden"
        style={{ x: xTranslation, width: "max-content" }}
        ref={ref}
        onHoverStart={() => {
          setMustFinish(true);
          setDuration(SLOW_DURATION);
        }}
        onHoverEnd={() => {
          setMustFinish(true);
          setDuration(FAST_DURATION);
        }}
      >
        {[...images, ...images].map(({ image, presentation }, idx) => (
          <Card image={`${image}`} href={presentation} key={idx} title={""} />
        ))}
      </motion.div>
    </section>
  );
}
