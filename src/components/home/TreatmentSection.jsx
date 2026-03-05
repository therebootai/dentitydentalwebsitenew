import React from "react";
import BranchServiceCard from "../global/BranchServiceCard";


function getOptimizedUrl(url) {
  if (!url) return url;
  if (url.includes("res.cloudinary.com") && url.includes("/image/upload/")) {
    if (url.includes("f_auto") || url.includes("q_auto")) return url;
    return url.replace("/image/upload/", "/image/upload/f_auto,q_auto,w_400/");
  }
  return url;
}

const TreatmentSection = ({ treatments }) => {
  return (
    <section className="xl:p-16 lg:p-8 p-4 flex flex-col gap-4">
      <section className="flex flex-col gap-1">
        <h2 className="md:text-3xl text-xl font-semibold text-site-main">
          See Our Most Popular Services
        </h2>

        <p className="md:text-lg text-xs text-site-typo">
          EVERY TOOTH IN A PERSON IS MORE VALUABLE THAN A DIAMOND.
        </p>
      </section>

      <section className="w-full grid md:grid-cols-3 grid-cols-2 gap-2 lg:gap-4">
        {treatments?.slice(0, 6).map((item, index) => (
         
            <BranchServiceCard
            key={item._id || index}
              content={{
                label: item.treatmentName,
                href: `/treatments/${item.slug}`,
                icon: "/images/serviceicon.svg",
                imgsrc: getOptimizedUrl(item.treatmentImg?.secure_url),
                desc: item.description,
              }}
            />
        ))}
      </section>
    </section>
  );
};

export default TreatmentSection;