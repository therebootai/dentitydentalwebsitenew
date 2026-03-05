import Image from "next/image";
import { useEffect, useState } from "react";

export default function Banner({ sliders }) {
  const firstSlide = sliders?.find((slide) => slide.status);
  if (!firstSlide) return null;

  const rawUrl = firstSlide.slider_image.secure_url;

  // ✅ Mobile এ w_750, desktop এ w_1440
  const getUrl = (url, width) => {
    if (!url?.includes("res.cloudinary.com")) return url;
    const base = url.includes("/image/upload/")
      ? url.replace("/image/upload/", `/image/upload/f_auto,q_auto,w_${width}/`)
      : url;
    return base;
  };

  return (
    <section aria-label="Hero Banner">
      <div className="w-full h-auto py-4 md:py-0">
        {/* Mobile */}
        <img
          src={getUrl(rawUrl, 750)}
          alt={firstSlide.slider_name || "Dentity Dental - Best Dental Clinic Kolkata"}
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          width={750}
          height={267}
          className="w-full h-auto object-cover md:hidden"
        />
        {/* Desktop */}
        <img
          src={getUrl(rawUrl, 1440)}
          alt={firstSlide.slider_name || "Dentity Dental - Best Dental Clinic Kolkata"}
          fetchPriority="high"
          loading="eager"
          decoding="sync"
          width={1440}
          height={500}
          className="w-full h-auto object-cover hidden md:block"
        />
      </div>
    </section>
  );
}