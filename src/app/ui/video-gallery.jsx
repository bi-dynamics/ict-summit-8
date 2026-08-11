"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { SectionHeading } from "./ds/section-heading";

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
      id="video-gallery-2023"
      className="w-full h-fit flex items-center justify-center px-4 sm:px-6 md:px-8 py-16 md:py-24 bg-grey-50"
    >
      <div className="w-full max-w-container h-fit flex flex-col justify-center items-center gap-10">
        <SectionHeading
          overline="Gallery"
          title="Video gallery"
          description="Watch a few videos from the previous sessions at the summit."
          className="w-full"
        />

        {/* container */}
        <div className="flex flex-col md:flex-row w-full h-fit mx-auto justify-center items-start gap-8">
          <Swiper
            spaceBetween={10}
            loop
            centeredSlides
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="w-full md:w-[60vw] h-[30vh] sm:h-[45vh] max-w-[960px] md:rounded-l-md border border-line-subtle bg-white"
            style={{
              "--swiper-navigation-color": "#1441cc",
            }}
          >
            {videos.map(({ src, alt }, index) => (
              <SwiperSlide
                key={index}
                className="w-full h-full flex bg-transparent items-center  justify-center group"
              >
                <iframe
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="w-full h-full  object-contain bg-transparent"
                  
                  title={alt}
                  alt={alt}
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
            className="h-[10vh] sm:h-[20vh] md:h-[43vh] w-full md:w-[20vw] overflow-y-hidden flex max-w-[960px] md:rounded-r-md"
          >
            {videos.map(({ src, alt }, index) => (
              <SwiperSlide key={index} className="w-full h-full">
                <iframe  className="w-full h-full object-contain overflow-y-hidden" title={alt} alt={alt} src={src} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
