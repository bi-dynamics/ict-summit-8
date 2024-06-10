"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const videos = [
  {
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fictsummitnam%2Fvideos%2F514598996002176%2F&show_text=false&width=560&t=0",
    alt: "Day 1 - Oct 7 2019",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fictsummitnam%2Fvideos%2F2198102543815710%2F&show_text=false&width=560&t=0",
    alt: "Day 1 - Oct 7 2019",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fictsummitnam%2Fvideos%2F515036779230098%2F&show_text=false&width=560&t=0",
    alt: "Day 1 - Oct 7 2019",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fictsummitnam%2Fvideos%2F1156173671246081%2F&show_text=false&width=560&t=0",
    alt: "Day 2 - Oct 8 2019",
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fictsummitnam%2Fvideos%2F690355064794259%2F&show_text=false&width=560&t=0",
    alt: "Day 2 - Oct 8 2019"
  }
];

export default function VideoGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <section
    id="video-gallery"
      style={{
        backgroundImage:
          "radial-gradient(circle at top right, rgba(0, 149, 255, 0.5) , rgba(236, 239, 248, 1) 40%)",
      }}
      className="w-full h-fit flex items-center justify-center px-4 sm:px-[32px] md:px-[100px] py-8 bg-[#ECEFF8]"
    >
      <div className="w-full h-full flex flex-col justify-center items-center gap-16">
        <div className="w-full h-fit flex flex-col justify-center items-center gap-4">

        <h2 className="text-headings font-semibold text-left w-full text-2xl sm:text-4xl">
          Video Gallery
        </h2>
        <p className="text-headings/70 font-semibold text-left w-full text-xl md:text-3xl">Watch some videos of the previous sessions at the summit</p>
        </div>

        {/* container */}
        <div className="flex flex-col md:flex-row w-full h-[80vh] xl:h-[75vh] mx-auto justify-center items-start gap-8">
          <Swiper
            spaceBetween={10}
            loop
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full max-w-[960px] h-full md:rounded-l-lg shadow-none bg-transparent"
            style={{
              "--swiper-navigation-color": "#0095FF",
            }}
          >
            {videos.map(({ src, alt }, index) => (
              <SwiperSlide
                key={index}
                className="w-full h-full flex bg-transparent items-center  justify-center group"
              >
                <div className="bg-gradient-to-t from-primary hidden to-transparent absolute w-full h-1/4 bottom-0 md:flex items-center justify-end text-2xl font-bold px-16 text-white group-hover:translate-y-full transition-all">{alt}
                </div>
                <iframe
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="w-full h-full  object-contain bg-transparent"
                  
                  title={alt}
                  src={src}
                  />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView={3}
            freeMode={true}
           direction="horizontal"
            breakpoints ={{
              769: {
                direction: "vertical",

               },
             } }
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="h-full w-full md:w-2/5 flex max-w-[960px] md:rounded-r-lg"
          >
            {videos.map(({ src, alt }, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <iframe preload="auto" className="w-full h-full object-contain" alt={alt} src={src} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
