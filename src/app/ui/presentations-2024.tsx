"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import Card_2024 from "./presentation-card-2024";
import { SummitButton } from "./ds/button";
import { SectionHeading } from "./ds/section-heading";

const day1Presentations = [
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_1/Ministers-Speech-National-ICT-Official-Opening-2024.pdf",
    title: "Ministers Speech by Hon. Emma Theofelus",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation: "presentations/day_1/VOTE-OF-THANKS-8th-ICT-Summit.pdf",
    title: "Vote of Thanks by Mr. Gernot Piepmeyer",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_1/8th-ICT-National-Summit-Presentation-H.Mouton.pdf",
    title:
      "Preparing Namibian Businesses For AI Adoption Amidst IT Infrastructure Challenges by Mr. Hubert Mouton",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_1/DIGITAL-STRATEGY-PRESENTATION-ICT-SUMMIT.pdf",
    title:
      "The Framework for Digital Transformation by Ms. Llinda Aipinge-Nakale",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_1/Education-4.0-Building-Resilient-Learners-in-the-Digital-Age.pdf",
    title:
      "Education 4.0: Building Resilient Learners in the Digital Age by Mr. Barthromeus Shileka",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_1/High-performance-computing-ICT-SUMMIT.pdf",
    title:
      "Role of High-Performance Computing in Digital Transformation, Data Science and Artificial Intelligence by Mr. Arpit Jain",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation: "presentations/day_1/Peters_ICT_Summit_2024.pdf",
    title: "Namibia AI Readiness by Prof. Anicia Peters",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation: "presentations/day_1/The-Noise-Before-Defeat.pdf",
    title: "The Noise Before Defeat by Mr. Nithen Naidoo",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_1/Real-time-monitoring-in-home-networks.pdf",
    title: "Real-time Monitoring in Home Networks by Mr. Klaus von Kries",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_1/MTC-Ndafenongo_8th-National-ICT-Summit-2024.pdf",
    title:
      "The Benefits of Smart Partnerships in enabling Digital Transformation and Artificial Intelligence by Mr. Adolf Ndafenongo",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation: "presentations/day_1/DS_ICT-Summit-2024.pdf",
    title: "Strategic Alignment of AI & Automation by Mr. Medmillian Handura",
  },
];
const day2Presentations = [
  {
    image: "",
    presentation: "presentation/day_2/Guest-of-Honour-8th-Summit-Nambia.pdf",
    title:
      "Guest of Honor Speech by Hon. Thulagano Merafe Segokgo Minister of Communications, Knowledge and Technology, Republic of Botswana",
  },
  {
    image: "",
    presentation:
      "presentation/day_2/Ndafenongo_8th-National-ICT-Summit-2024_The-Role-of-Telco-in-Enabling-Digital-Transformation-and-Artificial-Intelligence.pdf",
    title:
      "The Role of Telco in Enabling Digital Transformation and Artificial Intelligence by Adolf Ndafenongo",
  },
  {
    image: "/press-release/ict-summit-logo.png",
    presentation:
      "presentations/day_2/Leveraging-Open-Source-Software-in-the-age-of-AI.pdf",
    title:
      "Leveraging Open Source Software in the age of AI by Mr. Sakaria Ndadi",
  },
  {
    image: "",
    presentation:
      "presentations/day_2/Namibia-Digitalization-Journey_10-September-2024-JvW.pdf",
    title: "Namibian Government's Digitalisation Journey by Johan van Wyk",
  },
  {
    image: "",
    presentation: "presentations/day_2/Nithen-Naidoo_Bsides-JHB-2024.pdf",
    title:
      "I've seen you get hacked! (AI Real-time Attack Simulation) by Dillon Peens",
  },
  {
    image: "",
    presentation:
      "presentations/day_2/Unlocking-Urban-Mobility-with-Yango_Zanyiwe-ASARE.pdf",
    title:
      "Unlocking Urban Mobility with Yango: Exploring Digital Platofrm Innovations and Technology Applications by Zanyiwe ASARE",
  },
  {
    image: "",
    presentation:
      "presentations/day_2/nbcPlus-Presentation_ICT Summit_Sept2024.pdf",
    title:
      "Running A Viable Streaming Service As a Public Broadcaster by Nico Mwiya",
  },
  {
    image: "",
    presentation:
      "presentations/day_2/Unlocking-Urban-Mobility-with-Yango_Zanyiwe-ASARE.pdf",
    title:
      "Navigating the Future of Urban Mobility: Digital Innovations to Ensure Safety by Kabanda Chewe",
  },
];
const day3Presentations = [
  {
    image: "",
    presentation:
      "presentations/day_3/NIPDB-ScaleUp-Namibia-Presentation_National-ICT-Summit-2024.pdf",
    title:
      "ScaleUp Namibia (SUN): A Network of Namibian Startup Enablers Fostering an Entrepreneurial, Innovative, and Technological Ecosystem by Ms. Linda McLeod",
  },
  {
    image: "",
    presentation: "presentations/day_3/Innovators-pitch.pdf",
    title: "INNOVATOR: Innovators",
  },
  {
    image: "",
    presentation:
      "presentations/day_3/Media-Practitioners-Online-Registration-Portal_pitch.pdf",
    title: "INNOVATOR: Medical Practitioners Online Registration Portal",
  },
  {
    image: "",
    presentation: "presentations/day_3/Meva.ai-pitch.pdf",
    title: "INNOVATOR: Meva.ai",
  },
  {
    image: "",
    presentation: "presentations/day_3/Press-Track-Nam_Pitch.pdf",
    title: "INNOVATOR: PressTrack Namibia",
  },
  {
    image: "",
    presentation: "presentations/day_3/SIZA-pitch.pdf",
    title: "INNOVATOR: SIZA",
  },
  {
    image: "",
    presentation: "presentations/day_3/Okaluli-MICT_Pitch.pdf",
    title: "INNOVATOR: OKALULI",
  },
  {
    image: "",
    presentation: "presentations/day_3/Tinura-Innovations_pitch.pdf",
    title: "INNOVATOR: Tinura Innovations",
  },
  {
    image: "",
    presentation: "presentations/day_3/Billet-Pitch.pdf",
    title: "INNOVATOR: Billet",
  },
  {
    image: "",
    presentation: "presentations/day_3/African-Nyamazane_pitch.pdf",
    title: "INNOVATOR: African Nyamazane",
  },
  {
    image: "",
    presentation: "presentations/day_3/AMPERRA-CHARGING-COMPANY_PITCH-DECK.pdf",
    title: "INNOVATOR: Amperra Charging Company",
  },
  {
    image: "",
    presentation: "presentations/day_3/HydroWatch_pitch.pdf",
    title: "INNOVATOR: HydroWatch",
  },
  {
    image: "",
    presentation: "presentations/day_3/PITCH-DECK_Thank-you-wallet.pdf",
    title: "INNOVATOR: Thank-you Wallet",
  },
  {
    image: "",
    presentation: "presentations/day_3/DataVue_pitch.pdf",
    title: "INNOVATOR: DataVue",
  },
  {
    image: "",
    presentation: "presentations/day_3/Autono-Me_pitch.pdf",
    title: "INNOVATOR: Autono-Me",
  },
  {
    image: "",
    presentation: "presentations/day_3/Kaskola_pitch.pdf",
    title: "INNOVATOR: Kaskola",
  },
  {
    image: "",
    presentation:
      "presentations/day_3/Hon.-Deputy-Minister-of-ICT_8th-National-ICT-SUMMIT-2024.pdf",
    title:
      "Keynote address by HON. MODEESTUS AMUTSE, DEPUTY MINISTER OF INFORMATION AND COMMUNICATION TECHNOLOGY ",
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
    <section
      id="presentations"
      className="relative flex flex-col items-center justify-center gap-10 overflow-hidden bg-grey-50 py-16 md:py-24"
    >
      <SectionHeading
        align="center"
        overline="Presentations"
        title="2024 presentations"
        description="Download the slides presented across the three days of the 8th National ICT Summit."
        className="z-[12] px-4 sm:px-6"
      />

      <div
        role="tablist"
        aria-label="Presentation day"
        className="z-[12] flex w-full max-w-container flex-row gap-3 px-4 sm:px-6"
      >
        {[1, 2, 3].map((d) => (
          <SummitButton
            key={d}
            role="tab"
            aria-selected={day === d}
            variant={day === d ? "primary" : "secondary"}
            size="lg"
            fullWidth
            about={`Day ${d} Presentations`}
            onClick={() => setDay(d)}
          >
            Day {d}
          </SummitButton>
        ))}
      </div>

      {/* Edge fades so the marquee reads as continuous rather than clipped. */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 z-[11] h-full w-1/4 bg-gradient-to-r from-grey-50 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute right-0 top-0 z-[11] h-full w-1/4 bg-gradient-to-l from-grey-50 to-transparent"
      />
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
      {day === 2 && (
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
          {[...day2Presentations, ...day2Presentations].map(
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
          {[...day3Presentations, ...day3Presentations].map(
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
    </section>
  );
}
