import Link from "next/link";
import React, { useState, useEffect } from "react";
import { FaPhoneVolume } from "react-icons/fa6";

const CallWithUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
      setIsAnimated(true);
    } else {
      setIsVisible(false);
      setIsAnimated(false);
    }
  };

  useEffect(() => {
    if (isVisible) {
      setIsAnimated(true);
    }
  }, [isVisible]);

  return (
    <div
      className={`fixed bottom-3 p-2 hidden md:flex z-[100] right-0 justify-between w-fit items-end transition-opacity  ${
        isVisible ? "opacity-100" : "opacity-0 slidefromright"
      }`}
    >
      <div className={` flex flex-col gap-4  ${isAnimated ? "animate" : ""}`}>
        <Link
          href="tel:919051553253"
          target="_blank"
          rel="noopener"
          className="bg-site-sub text-2xl lg:text-2xl  border border-white gap-2  text-white rounded-full justify-center items-center flex px-4 md:px-5 lg:px-6 h-[2.5rem] md:h-[3rem] lg:h-[3rem] cursor-pointer"
        >
          <span className="font-medium">
            <div>
              <FaPhoneVolume className="text-lg" />
            </div>
          </span>
          <h1 className="md:text-lg  text-base font-medium text-white">
            Call Us
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default CallWithUs;
