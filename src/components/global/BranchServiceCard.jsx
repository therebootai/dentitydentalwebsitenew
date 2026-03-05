import Image from "next/image";
import Link from "next/link";
import React from "react";
import DOMPurify from "dompurify";

const BranchServiceCard = ({ content }) => {
  const { imgsrc, label, icon, desc, href } = content;

  return (
    // ✅ Use Link instead of div+onClick — Google can crawl this
    <Link
      href={href}
      className="w-full flex flex-col border border-site-gray group hover:shadow-custom transition-shadow duration-200 self-stretch"
    >
      <div className="relative w-full flex justify-center items-center">
        <Image
          src={imgsrc}
          alt={label}
          width={720}
          height={530}
          loading="lazy"
          className="w-full md:h-[13rem] h-[8rem] sm:h-[10rem] lg:h-[17rem] xlg:h-[19rem] object-cover"
        />

        <div className="md:h-[4rem] md:w-[4rem] h-[3rem] w-[3rem] bg-site-main rounded-full flex justify-center items-center absolute -bottom-8 transition-colors duration-300 group-hover:bg-site-sub">
          <img
            src={icon}
            alt=""
            aria-hidden="true"
            width={32}
            height={32}
            loading="lazy"
            className="md:h-[2rem] md:w-[2rem] h-[1.5rem] w-[1.5rem] object-contain"
          />
        </div>
      </div>

      <div className="xlg:p-6 lg:p-4 p-2 pt-10 md:pt-12 lg:pt-12 xlg:pt-12 lg:pb-6 pb-4 flex flex-col text-center items-center justify-center bg-white-gradient lg:gap-2">
        <div className="xlg:text-lg/[24px] text-sm/[17px] md:text-sm/[17px] line-clamp-2 h-[2rem] lg:h-[2.5rem] font-semibold text-site-main transition-colors duration-300 group-hover:text-site-sub text-center">
          {label}
        </div>

      <div
  className="xlg:text-base/[24px] lg:text-sm text-xs/[16px] text-center text-site-typo bg-transparent line-clamp-2"
  dangerouslySetInnerHTML={{
    __html: typeof window !== "undefined"
      ? DOMPurify.sanitize(desc)
      : desc  
  }}
/>
      </div>
    </Link>
  );
};

export default BranchServiceCard;