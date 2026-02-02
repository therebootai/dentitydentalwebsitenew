import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoHome } from "react-icons/go";

const Custom404 = () => {
  return (
    <WebsiteTemplate
      title={" Dentity Dental -Best Dental Clinic In Kolkata - Page Not Found"}
      description={""}
    >
      <SubBanner heading={"404 Page Not Found"} />
      <main className="xl:p-16 lg:p-8 p-4 flex justify-center items-center  flex-col lg:gap-6 gap-4 xl:gap-8">
        <div className="">
          <Image
            src="/images/logo.svg"
            alt=""
            height={162}
            width={70}
            className="h-[4rem] w-fit"
          />
        </div>
        <div className="">
          <h1 className=" text-3xl font-semibold text-primary">
            Sorry! I think you broke the path.
          </h1>
          <h3 className="text-xl text-[#bbb]">
            Please enter the topic which you are looking for
          </h3>
        </div>

        <Link
          href="/"
          className="inline-flex py-2 px-4 items-center justify-end self-center bg-site-sub text-base text-center text-white gap-2 rounded"
        >
          <GoHome />
          <span>Go Back to Home Page</span>
        </Link>
      </main>
    </WebsiteTemplate>
  );
};

export default Custom404;
