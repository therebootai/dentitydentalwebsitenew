import { Clinic } from "@/lib/clinicsDataList";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import BranchServiceCard from "../global/BranchServiceCard";

import "swiper/css";

export default function RelatedClinics({ currentQuery }) {
  // ✅ Safe slug
  const safeQuery = currentQuery || "";

  // ✅ Safe filter (no crash during build)
  const relatedClinics = (Clinic || []).filter(
    (clinic) => !clinic?.href?.includes(safeQuery)
  );

  const clinics = relatedClinics.map((item) => ({
    imgsrc: item.cover,
    label: item.label,
    icon: "/images/clinicicon.svg",
    desc: item.address,
    href: item.href,
  }));

  if (clinics.length === 0) return null;

  return (
    <section className="flex flex-col gap-4 lg:gap-9 p-4 lg:p-8 xl:p-16">
      <h2 className="text-lg md:text-3xl font-medium text-site-main">
        See Our Related Branches
      </h2>

      <p className="text-site-typo md:text-lg text-base">
        EVERY TOOTH IN A PERSON IS MORE VALUABLE THAN A DIAMOND.
        Smile is the first thing people notice when they meet one another.
      </p>

      <section className="w-full">
        <Swiper
          spaceBetween={15}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {clinics.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="xl:px-3 px-2">
                <BranchServiceCard content={item} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </section>
  );
}