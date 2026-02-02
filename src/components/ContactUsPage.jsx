import useElementHeight from "@/hooks/useElementHeight";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const ContactUsPage = ({ contact }) => {
  const [contentHeight, rightContentRef] = useElementHeight();

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Check on initial render
    window.addEventListener("resize", handleResize); // Add event listener for resizing

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup listener
    };
  }, []);

  return (
    <div className="xl:p-16 lg:p-8 p-4 flex flex-col gap-8 ">
      {contact.map((item, index) => (
        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 xlg:gap-8"
          key={index}
        >
          <div className="flex flex-col" ref={rightContentRef}>
            <div className="w-full h-[4rem] lg:h-[4.5rem] flex justify-center items-center bg-site-main text-white lg:text-xl text-lg font-semibold text-center">
              {item.label}
            </div>
            <div className="flex flex-col gap-6 p-4 lg:p-6 xlg:p-10 shadow-custom ">
              <div className="flex flex-col gap-1">
                <h1 className="xlg:text-xl lg:text-lg text-base font-semibold text-site-sub">
                  Address:
                </h1>
                <Link
                  href={item.map}
                  referrerPolicy="no-referrer"
                  target="_blank"
                  className="xlg:text-lg lg:text-base text-sm text-site-typo"
                >
                  {item.address}
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="xlg:text-xl lg:text-lg text-base font-semibold text-site-sub">
                  Phone:
                </h1>
                <div className="flex gap-2">
                  {Array.isArray(item.phone) &&
                    item.phone.map((number, index) => (
                      <Link
                        href={`tel:${number}`}
                        key={index}
                        className="xlg:text-lg lg:text-base text-sm text-site-typo inline"
                      >
                        +91 {number}
                      </Link>
                    ))}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="xlg:text-xl lg:text-lg text-base font-semibold text-site-sub">
                  Whatsapp:
                </h1>
                <Link
                  href={`https://web.whatsapp.com/send?phone=${item.whatsapp}`}
                  className="xlg:text-lg lg:text-base text-sm text-site-typo"
                >
                  +91 {item.whatsapp}
                </Link>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="xlg:text-xl lg:text-lg text-base font-semibold text-site-sub">
                  Timing:
                </h1>
                <h1 className="xlg:text-lg lg:text-base text-sm text-site-typo">
                  {item.timing}
                </h1>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col gap-4"
            style={{ height: isSmallScreen ? "auto" : `${contentHeight}px` }}
          >
            <div className="h-[50%]">
              <iframe
                src={item.iframeSrc}
                className="w-full h-full "
                loading="lazy"
              ></iframe>
            </div>
            <div className="w-full h-[50%]">
              <Image
                src={item.cover}
                alt="Conatct"
                width={954}
                height={417}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ContactUsPage;
