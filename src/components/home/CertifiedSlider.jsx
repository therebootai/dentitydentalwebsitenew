import Image from "next/image";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CertifiedSlider() {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 350) {
        setSlidesToShow(1);
        setAutoplay(true);
      } else if (window.innerWidth <= 460) {
        setSlidesToShow(2);
        setAutoplay(true);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else if (window.innerWidth <= 1224) {
        setSlidesToShow(3);
        setAutoplay(true);
      } else if (window.innerWidth <= 1380) {
        setSlidesToShow(4);
        setAutoplay(true);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(4);
        setAutoplay(true);
      } else {
        setSlidesToShow(4);
        setAutoplay(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const experience = [
    { icon: "/acknowledgement/iso-globe.svg", name: "ISO 9001:2015 Certified" },
    {
      icon: "/acknowledgement/toi.svg",
      name: "Top Dental Clinic in WB by Times of India Health Survey 2023",
    },
    {
      icon: "/acknowledgement/star.svg",
      name: "Top Dental Clinic in West Bengal by Honorable Governor of WB",
    },
    {
      icon: "/acknowledgement/municiplicity.svg",
      name: "Multiplicity Dental Clinic Chain in WB",
    },
    {
      icon: "/acknowledgement/denatal-clinic.svg",
      name: "Most Affordable Dental Clinic Chain in Kolkata & WB",
    },
  ];

  return (
    <div className="w-full xl:p-16 lg:p-8 p-4">
      <Swiper
        spaceBetween={10}
        slidesPerView={slidesToShow}
        autoplay={
          autoplay ? { delay: 3000, disableOnInteraction: false } : false
        }
        loop={true}
        modules={[Autoplay]}
        className="rounded-l-full rounded-r-full overflow-hidden"
      >
        {experience.map((item, index) => (
          <SwiperSlide
            key={index}
            className="w-full !flex justify-center items-center "
          >
            <div className="w-full flex flex-col gap-2  justify-center items-center bg-site-gray h-[6rem] md:h-[8rem] lg:h-40">
              <section className="w-full h-[2rem] md:h-[4rem] relative ">
                <Image
                  src={item.icon}
                  alt=""
                  fill
                  className="w-full object-contain"
                />
              </section>
              <h1 className="xlg:text-lg lg:text-base md:text-sm text-xs font-medium line-clamp-2 text-[#222222] text-center">
                {item.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
