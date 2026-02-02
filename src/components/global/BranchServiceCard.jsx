import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const BranchServiceCard = ({ content }) => {
  const { imgsrc, label, icon, desc, href } = content;
  const router = useRouter();
  return (
    <div
      className="w-full flex flex-col border border-site-gray group hover:shadow-custom transition-shadow duration-200 self-stretch cursor-pointer"
      onClick={() => router.push(href)}
    >
      <div className="relative w-full flex justify-center items-center">
        {/* Image */}
        <Image
          src={imgsrc}
          alt={label}
          width={624}
          height={459}
          className="w-full md:h-[13rem] h-[8rem] sm:h-[10rem] lg:h-[17rem] xlg:h-[19rem]  object-cover"
        />

        {/* Icon */}
        <div className="md:h-[4rem] md:w-[4rem] h-[3rem] w-[3rem] bg-site-main rounded-full flex justify-center items-center absolute -bottom-8 transition-colors duration-300 group-hover:bg-site-sub">
          <div className="relative md:h-[2rem] md:w-[2rem] h-[1.5rem] w-[1.5rem] z-50">
            <Image src={icon} alt="icon" fill className="object-contain" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="xlg:p-6 lg:p-4 p-2 pt-10 md:pt-12 lg:pt-12 xlg:pt-12 lg:pb-6 pb-4 flex flex-col text-center items-center justify-center bg-white-gradient lg:gap-2">
        <h1 className="xlg:text-lg/[24px] text-sm/[17px] md:text-sm/[17px] line-clamp-2  h-[2rem] lg:h-[2.5rem] font-semibold text-site-main transition-colors duration-300 group-hover:text-site-sub text-center">
          {label}
        </h1>

        <p className="xlg:text-base/[24px] lg:text-sm text-xs/[16px] text-center text-site-typo line-clamp-2">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default BranchServiceCard;
