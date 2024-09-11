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
  { src: "/image-gallery-2024/Day-1-cover.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0031.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0051.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0062.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0099.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0115.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0155.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0167.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0182.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0201.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0211.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0230.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0235.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0244.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0253.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0269.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0273.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0289.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0298.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0301.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0305.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0309.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0325.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0336.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0355.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0358.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0362.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0371.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0389.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0394.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0401.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A0425.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/Day-2-cover.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A9993.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A9987.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A9951.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/Day-3-cover.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A1637.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A1659.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A1669.jpg", alt: "ICT SUMMIT 2024" },
  { src: "/image-gallery-2024/185A1691.jpg", alt: "ICT SUMMIT 2024" },




  
  ];
  
  export default function PhotoGallery() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
   
  return (
    <section
    id="photo-gallery"
      style={{
        backgroundImage:
          "radial-gradient(circle at bottom right, rgba(0, 149, 255, 0.5) , rgba(236, 239, 248, 1) 30%)",
      }}
      className="w-full h-fit flex items-center justify-center px-4 sm:px-[32px] md:px-[100px] py-16 bg-[#ECEFF8]"
    >
      <div className="w-full max-w-[960px] h-full flex flex-col justify-center items-center gap-16">
        <h2 className="text-headings font-semibold text-center md:text-left w-full text-3xl sm:text-4xl">
          Photo Gallery
        </h2>
        {/* container */}
        <div className="flex flex-col w-full mx-auto justify-center items-start sm:gap-4">
          <Swiper
            spaceBetween={10}
            loop
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full max-w-[960px] h-[30vh] sm:h-[60vh] rounded-t-lg"
            style={{
              "--swiper-navigation-color": "#0095FF",
            }}
          >
            {images.map(({ src, alt }, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <Image src={src} alt={alt} fill sizes="(max-width: 768px) 395px, (max-width: 1200px) 960px, 960px" className=" object-contain md:object-cover" />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            breakpoints={{
              769: { spaceBetween: 16}
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
                  sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 25vw"
                  className="object-cover opacity-50 active:opacity-100 hover:opacity-100"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
