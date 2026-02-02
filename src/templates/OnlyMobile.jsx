import Link from "next/link";
import React, { useEffect, useState } from "react";

import { TbBrandWhatsappFilled } from "react-icons/tb";

import { FaPhone } from "react-icons/fa6";
import { GiArchiveRegister } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";
import EnquiryBox from "@/components/global/EnquiryBox";

const OnlyMobile = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    const modalElement = document.querySelector(".modal-container");
    modalElement.classList.add("zoom-out");
    setTimeout(() => setModalOpen(false), 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollThreshold = window.innerWidth <= 768 ? 100 : 300;
    if (window.scrollY > scrollThreshold) {
      setIsVisible(true);
      setIsAnimated(true);
    } else {
      setIsVisible(false);
      setIsAnimated(false);
    }
  };

  return (
    <div
      className={`fixed w-full p-2 z-[80] bottom-0 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`flex md:hidden justify-between bg-white items-center p-4 h-[4rem] rounded-lg border-site-main border-2 ${
          isAnimated ? "bottomToTop" : ""
        }`}
      >
        <Link
          target="_Blank"
          href="https://api.whatsapp.com/send?phone=919051553253"
          className="flex flex-col items-center gap-2 text-sm text-site-main font-semibold"
        >
          <span className="text-xl">
            <TbBrandWhatsappFilled className="text-site-main" />
          </span>
          <span>Whats App</span>
        </Link>
        <button
          onClick={openModal}
          className="flex flex-col gap-2 items-center h-[4rem] text-sm font-semibold"
        >
          <span className="absolute -top-4 w-[4rem] h-[4rem] border-t-[2px] border-site-main rounded-full justify-center items-center flex bg-white">
            <span className="flex w-[3rem] h-[3rem] text-xl bg-white rounded-full justify-center items-center relative">
              <GiArchiveRegister className="text-site-main size-8" />
            </span>
          </span>
          <span className="relative top-8 text-site-main">
            Book Appointment
          </span>
        </button>
        <Link
          href="tel:919051553253"
          target="_Blank"
          className="flex flex-col gap-2 items-center text-sm text-site-main font-semibold"
        >
          <span className="text-xl">
            <FaPhone className="text-site-main" />
          </span>
          <span>Call Now</span>
        </Link>
      </div>
      {modalOpen && (
        <div className="fixed top-0 z-[1300] left-0 w-full h-full flex items-center justify-center overflow-y-scroll bg-black bg-opacity-50">
          <div className=" w-full sm:h-[50vh] lg:h-[100vh] justify-center items-center flex flex-col modal-container  rounded-lg">
            <div className="w-full flex p-4 justify-end items-center"></div>
            <div className=" w-[95%] md:w-[60%] lg:w-[45%] xl:w-[40%] xxl:w-[30%] z-[1300] relative">
              <button
                className="bg-primary text-site-main lg:w-16 right-2  absolute z-[1400] top-2 lg:h-10 sm:w-12 sm:h-8 flex items-center justify-center rounded-lg hover:bg-white hover:text-primary border-2 border-site-main transition-colors duration-300"
                onClick={closeModal}
              >
                <FaRegWindowClose className="lg:text-2xl sm:text-xl" />
              </button>
              <EnquiryBox />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OnlyMobile;
