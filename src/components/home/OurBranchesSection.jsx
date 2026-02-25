import React from "react";
import BranchServiceCard from "../global/BranchServiceCard";
import { Clinic } from "@/lib/clinicsDataList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const OurBranchesSection = () => {


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
        <h2 className="md:text-3xl text-xl font-semibold text-site-main">
          See Our Branches
        </h2>
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
          autoplay={ { delay: 3000, disableOnInteraction: false } 
          }
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
    0: { slidesPerView: 1 },
    350: { slidesPerView: 1 },
    460: { slidesPerView: 1 },
    860: { slidesPerView: 2 },
    1224: { slidesPerView: 3 },
    1380: { slidesPerView: 3 },
  }}
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
