"use client";

import { Globe, Linkedin } from "lucide-react";
import Link from "next/link";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";

const exhibitors = [
  {
    src: "/exhibitors/nust-logo.png",
    alt: "NUST Logo",
    linkedIn: "https://www.linkedin.com/school/nust-namibia/",
    website: "https://www.nust.na/",
  },
  {
    src: "/exhibitors/unam-logo.png",
    alt: "UNAM Logo",
    linkedIn: "https://www.linkedin.com/school/university-of-namibia/",
    website: "https://www.unam.edu.na/",
  },
  {
    src: "/exhibitors/ium-logo.png",
    alt: "IUM Logo",
    linkedIn:
      "https://www.linkedin.com/company/the-international-university-of-management-ium-/",
    website: "https://ium.edu.na/",
  },
];
export default function Exhibitors_2024() {
  return (
    <section
      id="exhibitors"
      className="w-full h-fit flex items-center justify-center px-4 sm:px-8 md:px-[100px] py-16"
    >
      <div className="w-full max-w-[960px] h-full flex flex-col justify-center items-center gap-16">
        <div className="w-full h-fit flex flex-col justify-center items-center gap-4">
          <h2 className="text-headings font-semibold text-center md:text-left w-full text-3xl md:text-4xl">
            Our Exhibitors
          </h2>
          <p className="text-headings/70 text-center md:text-left w-full text-base sm:text-lg">
            A strong line-up of industry leaders and game changers will be
            exhibiting at this years&apos; summit. Visit their stands to learn
            more about their offerings
          </p>
        </div>

        {/* container */}
        <div className="flex flex-col w-full mx-auto justify-center items-start sm:gap-4">
          <Swiper
            spaceBetween={32}
            loop
            centeredSlides={true}
            breakpoints={{
              639: { slidesPerView: 2.4 },
              769: { slidesPerView: 4 },
            }}
            navigation={true}
            autoplay={{ disableOnInteraction: true, pauseOnMouseEnter: true }}
            slidesPerView={1.2}
            modules={[FreeMode, Navigation, Autoplay]}
            className="w-full max-w-[960px] h-fit rounded-t-lg flex items-end justify-center"
          >
            {[...exhibitors, ...exhibitors].map(
              ({ src, alt, linkedIn, website }, index) => (
                <SwiperSlide
                  key={index}
                  className="w-fit h-[400px] relative flex flex-col my-auto items-end justify-end"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={250}
                    height={250}
                    sizes="(max-width: 768px) 395px, (max-width: 1200px) 960px, 960px"
                    className=" object-contain mx-auto"
                  />
                  <div className="w-full h-fit py-4 flex flex-row items-center justify-center gap-4">
                    <Link
                      href={linkedIn}
                      className="text-headings z-[3] hover:text-headings/50"
                      target="_blank"
                      title="LinkedIn Profile"
                    >
                      <Linkedin />
                    </Link>
                    <Link
                      href={website}
                      className="text-headings z-[3] hover:text-headings/50"
                      target="_blank"
                      title="Website"
                    >
                      <Globe />
                    </Link>
                  </div>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>
        {/* container */}
        {/* <div className="flex flex-col md:flex-row md:flex-wrap w-full mx-auto justify-between items-center md:items-start gap-8">
          <div className="relative flex items-center justify-center w-[250px] h-[250px] px-4 bg-white shadow-xl rounded-xl">
            <Image
              src="/exhibitors/nust-logo.png"
              alt="NUST Logo"
              className="z-[2] object-cover"
              width={250}
              height={250}
            />
            <div className="w-full h-fit absolute bottom-4 flex flex-row items-center justify-center gap-4">
              <Link
                href="https://www.linkedin.com/school/nust-namibia/"
                className="text-headings z-[3] hover:text-headings/50"
                target="_blank"
                title="LinkedIn Profile"
              >
                <Linkedin />
              </Link>
              <Link
                href="https://www.nust.na/"
                className="text-headings z-[3] hover:text-headings/50"
                target="_blank"
                title="Website"
              >
                <Globe />
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-[250px] h-[250px] px-4 bg-white shadow-xl rounded-xl">
            <Image
              src="/exhibitors/unam-logo.png"
              alt="UNAM Logo"
              className="z-[2] object-cover"
              width={250}
              height={250}
            />
            <div className="w-full h-fit absolute bottom-4 flex flex-row items-center justify-center gap-4">
              <Link
                href="https://www.linkedin.com/school/university-of-namibia/"
                className="text-headings z-[3] hover:text-headings/50"
                target="_blank"
                title="LinkedIn Profile"
              >
                <Linkedin />
              </Link>
              <Link
                href="https://www.unam.edu.na/"
                className="text-headings z-[3] hover:text-headings/50"
                target="_blank"
                title="Website"
              >
                <Globe />
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-[250px] h-[250px] bg-white shadow-xl rounded-xl">
            <Image
              src="/exhibitors/ium-logo.png"
              alt="IUM Logo"
              className="z-[2] object-cover p-10"
              width={250}
              height={250}
            />
            <div className="w-full h-fit absolute bottom-4 flex flex-row items-center justify-center gap-4">
              <Link
                href="https://www.linkedin.com/company/the-international-university-of-management-ium-/"
                className="text-headings z-[3] hover:text-headings/50"
                target="_blank"
                title="LinkedIn Profile"
              >
                <Linkedin />
              </Link>
              <Link
                href="https://ium.edu.na/"
                className="text-headings z-[3] hover:text-headings/50"
                target="_blank"
                title="Website"
              >
                <Globe />
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
