"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

const images = [
  { src: "/elton-witbooi.jpeg", alt: "Image" },
  { src: "/nakale.jpeg", alt: "Image" },
  { src: "/panel-discussion.jpeg", alt: "Image" },
  { src: "/elton-witbooi.jpeg", alt: "Image" },
  { src: "/nakale.jpeg", alt: "Image" },
  { src: "/panel-discussion.jpeg", alt: "Image" },
  { src: "/elton-witbooi.jpeg", alt: "Image" },
  { src: "/nakale.jpeg", alt: "Image" },
  { src: "/panel-discussion.jpeg", alt: "Image" },
  { src: "/ict-summit-namibia-crop.jpg", alt: "Image" },
];

export default function PhotoGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section
    id="photo-gallery"
      style={{
        backgroundImage:
          "radial-gradient(circle at bottom right, rgba(0, 149, 255, 0.5) , rgba(236, 239, 248, 1) 40%)",
      }}
      className="w-full h-fit flex items-center justify-center px-4 sm:px-[32px] md:px-[100px] py-16 bg-[#ECEFF8]"
    >
      <div className="w-full max-w-[960px] h-full flex flex-col justify-center items-center gap-16">
        <h2 className="text-headings font-semibold text-center md:text-right w-full text-2xl sm:text-4xl">
          Photo Gallery
        </h2>
        {/* container */}
        <div className="flex flex-col w-full mx-auto justify-center items-start gap-8">
          <Swiper
            spaceBetween={10}
            loop
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full max-w-[960px] h-[60vh] rounded-t-lg"
            style={{
              "--swiper-navigation-color": "#0095FF",
            }}
          >
            {images.map(({ src, alt }, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <Image src={src} alt={alt} fill className=" object-contain" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            breakpoints={{
              769: { spaceBetween: 32}
            }}
            slidesPerView={3}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-[20vh] w-full max-w-[960px] rounded-b-lg"
            
          >
            {images.map(({ src, alt }, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-contain opacity-50 active:opacity-100 hover:opacity-100"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
