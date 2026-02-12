import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Banner({sliders}) { 
  const [slidesToShow, setSlidesToShow] = useState(1);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 1280) {
          setSlidesToShow(1);
        }
      };
  
      window.addEventListener("resize", handleResize);
      handleResize();
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

  return (
    <section>
          <div className="w-full  h-auto py-4 md:py-0 ">
            <Swiper
              slidesPerView={slidesToShow}
              spaceBetween={30}
              loop={true}
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            >
              {sliders.filter((slide) => slide.status)?.map((slide, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={slide.slider_image.secure_url}
                    alt={slide.slider_name}
                    width={1440}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>          
        </section>
    // <div className="">
    //   {sliders
    //     .filter((slide) => slide.status)
    //     ?.map((slide, index) => (
    //       <div className="carousel-item relative rounded-lg" key={index}>
    //         <div className="w-full relative ">
    //           <Image
    //             src={slide.slider_image.secure_url}
    //             alt={slide.slider_name}
    //             loading="lazy"
    //             width={4320}
    //             height={1959}
    //             className="w-full resize sm:h-auto md:h-auto "
    //           />
    //         </div>
    //       </div>
    //     ))}
    // </div>
  );
}
