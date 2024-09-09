"use client";

import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";
import { Button } from "./button";
import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";

let delta: number;
export default function Nav() {
  const [isOpenMenu, setOpenMenu] = useState(false);
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
    {
      name: "Previous Summits",
      years: [
        {
          year: "2023",
          href: "/ict-summit-2023",
          sections: [
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
          ],
        },
      ],
    },
    { name: "Sponsors 2024", href: "sponsors2024" },
    { name: "About", href: "about" },
    { name: "Programme", href: "programme" },
    { name: "Registration", href: "registration" },
    { name: "Press Release", href: "press-release" },
    { name: "Photos", href: "photo-gallery" },
    { name: "Videos", href: "video-gallery" },
    { name: "Youth Exhibition", href: "youth-exhibition" },
    { name: "Exhibitors", href: "exhibitors" },
    { name: "Sponsorship Packages", href: "sponsorship-packages" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    let home = document.getElementById("home");
    let sponsors2024 = document.getElementById("sponsors2024");
    let about = document.getElementById("about");
    let programme = document.getElementById("programme");
    let presenters = document.getElementById("presenters");
    let registration = document.getElementById("registration");
    let presentations = document.getElementById("presentations");
    let pressRelease = document.getElementById("press-release");
    let photoGallery = document.getElementById("photo-gallery");
    let videoGallery = document.getElementById("video-gallery");
    let youthExhibition = document.getElementById("youth-exhibition");
    let exhibitors = document.getElementById("exhibitors");
    let packages = document.getElementById("sponsorship-packages");
    let sponsors2023 = document.getElementById("sponsors2023");
    let contact = document.getElementById("contact");

    let sections = [
      home,
      sponsors2024,
      about,
      programme,
      presenters,
      registration,
      presentations,
      pressRelease,
      photoGallery,
      videoGallery,
      youthExhibition,
      exhibitors,
      packages,
      sponsors2023,
      contact,
    ];

    const observerOptions = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0,
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
          if (entry.target.id == "registration") {
            setActiveSection("registration");
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
          if (entry.target.id == "sponsorship-packages") {
            setActiveSection("sponsorship-packages");
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
      className="fixed bg-white/80 max-h-screen overflow-y-scroll lg:overflow-y-visible  backdrop-blur-lg p-4 left-0 top-0 flex flex-col w-full items-start justify-between md:justify-center z-50"
    >
      <div className="w-fit flex flex-row gap-4 self-center">
        <Image
          src="/namibian-coat-of-arms.png"
          alt="Namibian Coat of Arms"
          width={navAtTop ? 80 : 40}
          height={navAtTop ? 80 : 40}
          className="transition-all object-contain"
          priority
        />
        <Image
          src="/press-release/ict-summit-logo.png"
          alt="National ICT Summit Logo"
          width={navAtTop ? 100 : 50}
          height={navAtTop ? 80 : 40}
          className="transition-all shrink-0 object-contain"
          priority
        />
      </div>
      <p className="hidden md:flex text-sm self-center font-bold text-[#455FBA]">
        Ministry of information and Communication Technology
      </p>
      <div className="w-fit md:w-full sm:px-6 mt-2 flex lg:hidden items-center justify-start">
        <Button name="Menu" onClick={() => setOpenMenu((prev) => !prev)}>
          {isOpenMenu ? <X /> : <Menu />}
        </Button>
      </div>
      {isOpenMenu && (
        <motion.div
          animate={isOpenMenu ? "open" : "closed"}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={clsx(
            "w-full max-h-screen h-fit flex lg:hidden flex-col items-start lg:items-center justify-center pt-2"
          )}
        >
          {links.map((link, index) => {
            const isActive = link.href === activeSection;

            return (
              // Mobile Nav
              <Link
                onClick={() => setOpenMenu(false)}
                key={index}
                title={link.name}
                href={`#${link.href}`}
                className={clsx(
                  "w-fit h-full overflow-hidden relative rounded-xl px-6 py-2 flex items-center justify-center hover:bg-slate-200"
                )}
              >
                <p
                  className={clsx(
                    "w-full h-full text-headings transition-all text-sm sm:text-base",
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
      )}
      <motion.div
        className={clsx(
          "w-full max-h-screen h- flex-col hidden lg:flex lg:flex-row lg:flex-wrap items-start lg:items-center justify-center pt-2"
        )}
      >
        {links.map((link, index) => {
          const isActive = link.href === activeSection;

          //add drop down menu to links with year fields
          return link.years ? (
            <div className="hover:bg-headings/10 group/outer rounded-xl px-6 py-1 relative flex justify-center items-center">
              <p className="flex flex-row gap-2 items-center justify-center text-headings text-xs">
                Previous Summits <ChevronDown />
              </p>
              {/* Add hover drop-down */}
              {/* Drop-down container */}
              <div className="items-center justify-center z-10 absolute hidden group-hover/outer:flex top-8 bg-white w-fit py-2 rounded-xl h-20 text-headings">
                {link.years.map((year, index) => (
                  <div className="relative flex items-start justify-center">
                    <Link
                      href={year.href}
                      className="flex flex-row gap-2 peer/inner px-6 w-full"
                      key={index}
                    >
                      {year.year}
                      {/* <ChevronRight /> */}
                    </Link>
                    {/* Nested Drop-down */}
                    {/* CONTINUE LATER */}
                    {/* <div className="absolute left-28 peer-hover/inner:flex peer-hover/inner:flex-col peer-hover/inner:gap-2 hidden bg-white rounded-xl px-6 py-2">
                      {year.sections.map((section, index) => (
                        <Link key={index} href={section.href} className="">
                          {section.name}
                        </Link>
                      ))}
                    </div> */}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <Link
              onClick={() => setOpenMenu((prev) => !prev)}
              key={index}
              href={`/#${link.href}`}
              className={clsx(
                "w-fit h-full overflow-hidden relative rounded-xl px-6 py-2 flex items-center justify-center hover:bg-slate-200"
              )}
            >
              <p
                className={clsx(
                  "w-full h-full text-headings transition-all text-xs",
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
