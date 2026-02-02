"use client";
import { useState } from "react";

import Image from "next/image";

export default function TreatMentAbout({
  title,
  description,
  cover,
  galleryImgs,
  faqs,
}) {
  const [activeIndex, setActiveIndex] = useState(0);


  return (
    <section className="flex flex-col relative gap-4 lg:gap-9 p-4 lg:p-8 xl:p-16">
      <section className="flex flex-col lg:flex-row gap-2 lg:gap-7 w-full justify-between">
        <div className="flex flex-col gap-2 w-full lg:w-[70%]">
          <h1 className="text-lg md:text-3xl font-medium text-site-main">
            {title} Treatment In Kolkata
          </h1>
          <h3
            className="text-site-typo md:text-lg text-base text-justify"
            dangerouslySetInnerHTML={{ __html: description }}
          ></h3>
        </div>
        <div className="w-full lg:w-[30%] self-start">
          <Image
            src={cover}
            alt={title}
            width={624}
            height={459}
            className="size-full object-contain rounded-lg"
          />
        </div>
      </section>

      {/* FULL-WIDTH GALLERY */}
      <div className="relative -mx-4 lg:-mx-8 xl:-mx-16">
        <div className="px-4 lg:px-8 xl:px-16">
          <h2 className="text-lg md:text-2xl font-medium text-site-main mb-3">
            Gallery
          </h2>
        </div>

        <div className="flex items-center overflow-x-auto pb-2 scrollbar-hide w-full px-4 lg:px-8 xl:px-16">
          {galleryImgs.map((img, idx) => (
            <div
              key={idx}
              className={`
          relative
          min-w-[110px] md:min-w-[130px]
          h-[110px] md:h-[130px]
          ${idx !== 0 ? "-ml-6 md:-ml-8" : ""}
        `}
              style={{ zIndex: galleryImgs.length - idx }}
            >
              <Image
                src={img.secure_url}
                alt={img.public_id}
                width={200}
                height={200}
                className={`
            w-full h-full object-cover
            rounded-tl-[50px] rounded-br-[50px]
            ${idx !== 0 ? "fade-left" : ""}
          `}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        {faqs.length > 0 && (
          <section className="flex flex-col gap-4 items-center">
            <h2 className="text-lg md:text-2xl font-medium text-site-main text-center">
              Frequently Asked Questions (FAQ)
            </h2>

            <div className="w-full max-w-4xl flex flex-col gap-3">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`rounded-md overflow-hidden transition-all duration-300 
        }
      `}
                  >
                    <button
                      onClick={() => setActiveIndex(isOpen ? null : index)}
                      className={`w-full flex justify-between items-center px-4 py-3 text-left font-medium
          ${isOpen ? "bg-site-main text-white" : "bg-site-main text-white"}
        `}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: faq.question }}
                      />
                      <span
                        className={`transition-transform text-2xl duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    <div
                      className={`transition-all duration-300 ease-in-out
    ${isOpen ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"}
    overflow-hidden
  `}
                    >
                      {isOpen && (
                        <div
                          className="
        bg-[#f5f5f5] px-4 py-3 text-site-typo text-sm md:text-base
        border-t border-blue-500
        max-h-[60vh] overflow-y-auto
        md:max-h-none md:overflow-visible
      "
                        >
                          <div
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </section>
  );
}
