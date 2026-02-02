import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import Image from "next/image";
import React from "react";

const Awards = () => {
  const awards = [
    {
      imgsrc: "/images/govornor-awards.jpg",
      name: "Best Dental Clinic Chain in West Bengal 2023 Award by Honorable Governor of West Bengal",
    },
    {
      imgsrc: "/images/govornor-awards2.jpg",
      name: "Best Dental Clinic Chain in West Bengal 2023 Award by Honorable Governor of West Bengal",
    },
    {
      imgsrc: "/images/toi-article.jpg",
      name: "Times Of India Featured Dentity Dental for Excellent Services ",
    },
    {
      imgsrc: "/images/toi-awards.jpg",
      name: "Times of India Health Survery 2023 , Ranking First in Best Dental Clinic in East India",
    },
  ];
  return (
    <WebsiteTemplate
      title={"Awards of Dentity Dental | Recognized Excellence"}
      description={
        "Check out the latest awards and recognitions earned by Dentity Dental. ISO-certified and awarded as the No.1 dental clinic by the Times of India Health Survey."
      }
    >
      <SubBanner heading={"Awards"} />
      <section className="xl:p-16 lg:p-8 p-4">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {awards.map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <Image
                src={item.imgsrc}
                alt="Awards"
                width={1000}
                height={563}
                className="w-full rounded-sm shadow-custom"
              />
              <div className="lg:text-base text-sm text-site-typo">
                {item.name}
              </div>
            </div>
          ))}
        </section>
      </section>
    </WebsiteTemplate>
  );
};

export default Awards;
