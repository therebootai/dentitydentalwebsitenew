import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner({sliders}) { 

  return (
    <section>
          <div className="w-full  h-auto py-4 md:py-0 ">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {sliders
  .filter((slide) => slide.status)
  .map((slide, index) => (
    <SwiperSlide key={index}>
      <Image
        src={slide.slider_image.secure_url}
        alt={slide.slider_name}
        width={1440}
        height={500}
        priority={index === 0}
        fetchPriority={index === 0 ? "high" : "auto"}
        loading={index === 0 ? "eager" : "lazy"}
        sizes="100vw"
        className="w-full h-auto object-cover"
      />
    </SwiperSlide>
))}
            </Swiper>
          </div>          
        </section>

  );
}
