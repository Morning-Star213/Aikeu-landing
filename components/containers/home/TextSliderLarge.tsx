"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const TextSliderLarge = () => {
  const pathname = usePathname();
  const isHomeSeven = pathname === "/index-seven";

  return (
    <section
      className={`text-slider-large-wrapper ${isHomeSeven ? " section pb-0" : ""
        }`}
    >
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        speed={4000}
        loop={true}
        centeredSlides={false}
        modules={[Autoplay]}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="text-slider-large"
      >
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                <span className="text-stroke" data-text="Generative AI">
                  {" "}
                  Generative AI
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                <span className="text-stroke" data-text="NLP">
                  {" "}
                  NLP
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                <span className="text-stroke" data-text="Chat Gpt">
                  {" "}
                  Chat Gpt
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                <span className="text-stroke" data-text="Data Analytics">
                  {" "}
                  Data Analytics
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-slider__single">
            <h2 className="large-title">
              <Link href="services">
                <span className="text-stroke" data-text="Web Development">
                  {" "}
                  Web Development
                </span>
              </Link>
            </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TextSliderLarge;
