import React from "react";
import { useEffect, useState } from "react";
import BranchServiceCard from "../global/BranchServiceCard";
import { Clinic } from "@/lib/clinicsDataList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const OurBranchesSection = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [autoplay, setAutoplayMode] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 260) {
        setSlidesToShow(1);
        setAutoplayMode(true);
      } else if (window.innerWidth <= 600) {
        setSlidesToShow(1);
        setAutoplayMode(true);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(2);
        setAutoplayMode(true);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
        setAutoplayMode(true);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(3);
        setAutoplayMode(true);
      } else {
        setSlidesToShow(3);
        setAutoplayMode(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clinics = Clinic.map((item) => ({
    imgsrc: item.cover,
    label: item.label,
    icon: "/images/clinicicon.svg",
    desc: item.address,
    href: item.href,
  }));
  return (
    <section className="xl:p-16 lg:p-8 p-4 flex flex-col gap-4">
      <section className="flex flex-col gap-1">
        <h1 className="md:text-3xl text-xl font-semibold text-site-main">
          See Our Branches
        </h1>
        <p className="md:text-lg text-xs text-site-typo">
          EVERY TOOTH IN A PERSON IS MORE VALUABLE THAN A DIAMOND. Smile is the
          first thing people notice when they meet one another. Smile is
          something that can change the world. So in our DENTITY DENTAL Clinics
          we create a confident smile for you.
        </p>
      </section>
      <section className="w-full">
        <Swiper
          spaceBetween={10}
          slidesPerView={slidesToShow}
          autoplay={
            autoplay ? { delay: 3000, disableOnInteraction: false } : false
          }
          loop={true}
          modules={[Autoplay]}
        >
          {clinics.map((item, index) => (
            <SwiperSlide key={index} className="xl:px-3 px-2 h-full">
              <BranchServiceCard content={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
};

export default OurBranchesSection;
