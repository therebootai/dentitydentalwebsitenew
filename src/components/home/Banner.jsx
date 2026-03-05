import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner({ sliders }) {
  const activeSliders = sliders.filter((slide) => slide.status);

  return (
    <section aria-label="Hero Banner">
      <div className="w-full h-auto py-4 md:py-0">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={activeSliders.length > 1}
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          watchSlidesProgress={true}
          preloadImages={false}
          lazy={{ loadPrevNext: false }}
        >
          {activeSliders.map((slide, index) => (
            <SwiperSlide key={slide._id || index}>
              <Image
                src={slide.slider_image.secure_url}
                alt={slide.slider_name || "Dentity Dental - Best Dental Clinic Kolkata"}
                width={1440}
                height={500}
                priority={index === 0}
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
                decoding={index === 0 ? "sync" : "async"}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1440px"
                className="w-full h-auto object-cover"
                quality={index === 0 ? 85 : 75}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}