"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import Card from "./presentation-card";
import { Button } from "./button";
import clsx from "clsx";
import Card_2024 from "./presentation-card-2024";

// const images = [
//   {
//     image: "/presentations/presentation-ixpnam.svg",
//     presentation: "presentations/IXP-Namibia-Presentation-ICT-Summit-2023.pdf",
//   },
//   {
//     image: "/presentations/presentation-unodc.svg",
//     presentation: "presentations/Navigating-the-Cybersecurity-Landscape.pdf",
//   },
// ];

const day1Presentations = [
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_1/Ministers-Speech-National-ICT-Official-Opening-2024.pdf",
    title: "Ministers Speech by Hon. Emma Thoefelus",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation: "presentations/day_1/VOTE-OF-THANKS-8th-ICT-Summit.pdf",
    title: "Vote of Thanks by Mr. Gernot Piepmeyer",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_1/8th-ICT-National-Summit-Presentation-H.Mouton.pptx",
    title:
      "Preparing Namibian Businesses For AI Adoption Amidst IT Infrastructure Challenges by Mr. Hubert Mouton",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_1/DIGITAL-STRATEGY-PRESENTATION-ICT-SUMMIT.pptx",
    title:
      "The Framework for Digital Transformation by Ms. Llinda Aipinge-Nakale",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_1/Education-4.0-Building-Resilient-Learners-in-the-Digital-Age.pptx",
    title:
      "Education 4.0: Building Resilient Learners in the Digital Age by Mr. Barthromeus Shileka",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_1/High-performance-computing-ICT-SUMMIT.pptx",
    title:
      "Role of High-Performance Computing in Digital Transformation, Data Science and Artificial Intelligence by Mr. Arpit Jain",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_1/Leveraging-Open-Source-Software-in-the-age-of-AI.pptx",
    title:
      "Leveraging Open Source Software in the age of AI by Mr. Sakaria Ndadi",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation: "presentations/day_1/Peters_ICT_Summit_2024.pptx",
    title: "Namibia AI Readiness by Prof. Anicia Peters",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation: "presentations/day_1/The-Noise-Before-Defeat.pptx",
    title: "The Noise Before Defeat by Mr. Nithen Naidoo",
  },
];
const day2Presentations = [
  {
    image: "",
    presentation: "",
    title: "",
  },
  {
    image: "",
    presentation: "",
    title: "",
  },
];
const day3Presentations = [
  {
    image: "",
    presentation: "",
    title: "",
  },
  {
    image: "",
    presentation: "",
    title: "",
  },
];

export default function Presentations_2024() {
  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [day, setDay] = useState(1);

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
    <main
      id="presentations"
      className="py-16 relative overflow-hidden bg-[#ECEFF8] flex flex-col items-center justify-center space-y-4"
    >
      <h2 className=" text-headings font-bold text-3xl sm:text-4xl z-[12]">
        Presentations
      </h2>
      <div className="w-full h-fit flex flex-row gap-4 z-[12] max-w-screen-lg">
        <Button
          name="Register"
          className={clsx(
            "z-[2] rounded-xl font-bold w-full text-headings hover:text-white border-2 border-[#E5F4FF] hover:border-primary bg-[#E5F4FF] active:scale-[.99] transition-all shadow-lg hover:scale-105",
            { "bg-primary border-primary": day === 1 }
          )}
          size={"lg"}
          about="Day 1 Presentations"
          onClick={() => setDay(1)}
        >
          Day 1
        </Button>
        <Button
          name="Register"
          className={clsx(
            "z-[2] rounded-xl font-bold w-full text-headings hover:text-white border-2 border-[#E5F4FF] hover:border-primary bg-[#E5F4FF] active:scale-[.99] transition-all shadow-lg hover:scale-105",
            { "bg-primary border-primary": day === 2 }
          )}
          size={"lg"}
          about="Day 2 Presentations"
          onClick={() => setDay(2)}
        >
          Day 2
        </Button>
        <Button
          name="Register"
          className={clsx(
            "z-[2] rounded-xl font-bold w-full text-headings hover:text-white border-2 border-[#E5F4FF] hover:border-primary bg-[#E5F4FF] active:scale-[.99] transition-all shadow-lg hover:scale-105",
            { "bg-primary border-primary": day === 3 }
          )}
          size={"lg"}
          about="Day 3 Presentations"
          onClick={() => setDay(3)}
        >
          Day 3
        </Button>
      </div>
      {/* gradient layer */}
      <div className="absolute left-0 top-0 z-[11] h-full w-1/4 bg-gradient-to-r from-[#ECEFF8] to-transparent"></div>
      {/* gradient layer */}
      <div className="absolute right-0 top-0 z-[11] h-full w-1/4 bg-gradient-to-l from-[#ECEFF8] to-transparent"></div>
      {day === 1 && (
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
          {[...day1Presentations, ...day1Presentations].map(
            ({ image, presentation, title }, idx) => (
              <Card_2024
                image={`${image}`}
                href={presentation}
                title={title}
                key={idx}
              />
            )
          )}
        </motion.div>
      )}
      {/* {day === 2 && (
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
          {[...day2Presentations].map(({ image, presentation, title }, idx) => (
            <Card
              image={`${image}`}
              href={presentation}
              title={title}
              key={idx}
            />
          ))}
        </motion.div>
      )}
      {day === 3 && (
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
          {[...day3Presentations].map(({ image, presentation, title }, idx) => (
            <Card
              image={`${image}`}
              href={presentation}
              title={title}
              key={idx}
            />
          ))}
        </motion.div>
      )} */}
    </main>
  );
}
