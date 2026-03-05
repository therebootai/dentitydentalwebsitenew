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
          Every tooth in a person is more valuable than a diamond. Smile is the
          first thing people notice when they meet one another. So in our
          Dentity Dental Clinics we create a confident smile for you.
        </p>
      </section>

      <section className="w-full">
        <Swiper
          spaceBetween={10}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            860: { slidesPerView: 2 },
            1224: { slidesPerView: 3 },
          }}
        >
          {clinics.map((item, index) => (
            <SwiperSlide key={index} className="xl:px-3 px-2 h-full">
              <BranchServiceCard content={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <div className="sr-only" aria-hidden="true">
        {clinics.map((item, index) => (
          <a key={index} href={item.href}>{item.label}</a>
        ))}
      </div>
    </section>
  );
};

export default OurBranchesSection;