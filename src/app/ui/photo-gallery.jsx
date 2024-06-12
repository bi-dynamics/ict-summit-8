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
  { src: "/image-gallery/0Z7A1904.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A1912.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A1913.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A1920.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A1929.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A1943.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A1947.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A1952.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A1960.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A1982.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A1993.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2002.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2006.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2025.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2037.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2055.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2081.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2085.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2098.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2102.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2109.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2112.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2119.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2123.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2137.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2222.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2230.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2306.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2317.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2341.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2342.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2355.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2359.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2367.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2371.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2382.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2388.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2399.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2409.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2415.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2422.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2428.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2434.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2745.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2749.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2752.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2768.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2791.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2794.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2809.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2839.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2842.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2920.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2951.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2957.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2963.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A2987.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A3065.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A3104.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A3111.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A3118.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A3120.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A3125.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/0Z7A3128.jpg", alt: "ICT SUMMIT 2023" },
  { src: "/image-gallery/IMG_9492.jpg", alt: "ICT SUMMIT 2023" },
 
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
        <div className="flex flex-col w-full mx-auto justify-center items-start sm:gap-4">
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
                <Image src={src} alt={alt} fill sizes="(max-width: 768px) 395px, (max-width: 1200px) 960px, 960px" className=" object-contain" />
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
