"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  useCycle,
} from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Button } from "./button";
import { Menu, X } from "lucide-react";

// interface Section {
//   id: string;
//   ref: React.RefObject<HTMLElement> | ((instance: HTMLElement) => void); // Can be a ref or a callback function
// }

let delta: number;
export default function Nav() {
  const [isOpenMenu, setOpenMenu] = useState(true);
  const { scrollY } = useScroll();
  const [showNav, setShowNav] = useState(true);
  const [navAtTop, setNavAtTop] = useState(true);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    //user is scrolling down
    //threshold of 150px at the top of the screen
    delta = latest - Number(previous);
    latest < 150 ? setNavAtTop(true) : setNavAtTop(false);

    if (latest > Number(previous) && latest > 150) {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  });

  const [activeSection, setActiveSection] = useState<string>("home");
  let links = [
    { name: "Home", href: "home" },
    { name: "Sponsors 2024", href: "sponsors2024" },
    { name: "About", href: "about" },
    { name: "Programme", href: "programme" },
    { name: "Presenters", href: "presenters" },
    { name: "Presentations", href: "presentations" },
    { name: "Press Release", href: "press-release" },
    { name: "Photos", href: "photo-gallery" },
    { name: "Videos", href: "video-gallery" },
    { name: "Youth Exhibition", href: "youth-exhibition" },
    { name: "Exhibitors", href: "exhibitors" },
    { name: "Sponsors 2023", href: "sponsors2023" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    let home = document.getElementById("home");
    let sponsors2024 = document.getElementById("sponsors2024");
    let about = document.getElementById("about");
    let programme = document.getElementById("programme");
    let presenters = document.getElementById("presenters");
    let presentations = document.getElementById("presentations");
    let pressRelease = document.getElementById("press-release");
    let photoGallery = document.getElementById("photo-gallery");
    let videoGallery = document.getElementById("video-gallery");
    let youthExhibition = document.getElementById("youth-exhibition");
    let exhibitors = document.getElementById("exhibitors");
    let sponsors2023 = document.getElementById("sponsors2023");
    let contact = document.getElementById("contact");

    let sections = [
      home,
      sponsors2024,
      about,
      programme,
      presenters,
      presentations,
      pressRelease,
      photoGallery,
      videoGallery,
      youthExhibition,
      exhibitors,
      sponsors2023,
      contact,
    ];

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // setActiveSection(entry.target.id);
          if (entry.target.id == "home") {
            setActiveSection("home");
          }
          if (entry.target.id == "sponsors2024") {
            setActiveSection("sponsors2024");
          }
          if (entry.target.id == "about") {
            setActiveSection("about");
          }
          if (entry.target.id == "programme") {
            setActiveSection("programme");
          }
          if (entry.target.id == "presenters") {
            setActiveSection("presenters");
          }
          if (entry.target.id == "presentations") {
            setActiveSection("presentations");
          }
          if (entry.target.id == "press-release") {
            setActiveSection("press-release");
          }
          if (entry.target.id == "photo-gallery") {
            setActiveSection("photo-gallery");
          }
          if (entry.target.id == "video-gallery") {
            setActiveSection("video-gallery");
          }
          if (entry.target.id == "youth-exhibition") {
            setActiveSection("youth-exhibition");
          }
          if (entry.target.id == "exhibitors") {
            setActiveSection("exhibitors");
          }
          if (entry.target.id == "sponsors2023") {
            setActiveSection("sponsors2023");
          }
          if (entry.target.id == "contact") {
            setActiveSection("contact");
          }
        }
      });
    }, observerOptions);

    sections?.forEach((section) => {
      section && observer.observe(section);
    });

    // Cleanup function to disconnect observer on component unmount
    return () => observer.disconnect();
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={showNav ? "visible" : "hidden"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed bg-white/80 backdrop-blur-lg p-4 left-0 top-0 flex flex-col w-full items-center justify-center z-50"
    >
      <div className="w-fit flex flex-row gap-4">
        <Image
          src="/Coat_of_arms_of_Namibia.svg"
          alt="Namibian Coat of Arms"
          width={navAtTop ? 80 : 40}
          height={navAtTop ? 80 : 40}
          className="transition-all"
          priority
        />
        <Image
          src="/press-release/ict-summit-logo.png"
          alt="National ICT Summit Logo"
          width={navAtTop ? 100 : 50}
          height={navAtTop ? 80 : 40}
          className="transition-all"
          priority
        />
      </div>
      <p className="text-xs md:text-lg font-bold text-[#455FBA]">
        Ministry of information and Communication Technology
      </p>
      <div className="w-full px-6 mt-2 flex lg:hidden items-center justify-start">
        <Button onClick={() => setOpenMenu((prev) => !prev)}>
          {isOpenMenu ? <X /> : <Menu />}
        </Button>
      </div>
      <motion.div
        animate={isOpenMenu ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={clsx(
          "w-full max-h-screen h-fit flex flex-col lg:flex-row lg:flex-wrap items-start lg:items-center justify-center pt-2",
          isOpenMenu ? "visible" : "hidden lg:flex"
        )}
      >
        {links.map((link, index) => {
          const isActive = link.href === activeSection;

          return (
            <Link
              onClick={() => setOpenMenu((prev) => !prev)}
              key={index}
              href={`#${link.href}`}
              className={clsx(
                "w-fit h-full overflow-hidden relative rounded-xl px-6 py-2 flex items-center justify-center hover:bg-slate-200"
              )}
            >
              <p
                className={clsx(
                  "w-full h-full text-headings transition-all text-base",
                  isActive ? "font-bold" : "font-medium"
                )}
              >
                {link.name}
              </p>
              <motion.div
                className=" z-[-1] absolute rounded-full  w-full h-full "
                variants={{
                  active: {
                    x: "0",
                    opacity: "100%",
                    backgroundColor: "rgb(226,232,240)",
                    borderRadius: "0px",
                  },
                  inactive: {
                    x: delta < 0 ? "-100%" : "100%",
                    backgroundColor: "rgb(241,245,249)",
                  },
                }}
                animate={isActive ? "active" : "inactive"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </Link>
          );
        })}
      </motion.div>
    </motion.nav>
  );
}
