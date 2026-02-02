import { Facilities } from "@/lib/facilitiesDataList";
import { Treatments } from "@/lib/treatmentDataList";
import { Clinic } from "@/lib/clinicsDataList";
import Image from "next/image";
import Link from "next/link";
import { FaRegWindowClose } from "react-icons/fa";
import EnquiryBox from "./EnquiryBox";
import { useState } from "react";

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState(null);

  const openModal = (componentName) => {
    setSelectedComponent(componentName);
    setModalOpen(true);
  };

  const closeModal = () => {
    const modalElement = document.querySelector(".modal-container");
    modalElement.classList.add("zoom-out");
    setTimeout(() => setModalOpen(false), 300);
  };
  function chunkArray(array, chunkSize = 10) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  const treatmentGroups = chunkArray(Treatments);
  const facilitiesGroup = Facilities.slice(0, 10) || [];
  const clinicGroup = Clinic || [];

  return (
    <footer className="bg-[url('/images/footer-bg.avif')] bg-cover bg-center">
      <div className="flex flex-col gap-12 bg-white/70 xl:p-16 lg:p-8 p-4 flex-1">
        <div className="grid gap-4 lg:gap-10 grid-cols-1 lg:grid-cols-4 justify-between">
          <div className="flex flex-col gap-3 lg:gap-2 xlg:gap-3 justify-between">
            <Image
              src="/images/logo.svg"
              alt="logo"
              height={84}
              width={194}
              className="max-w-[13.5vmax] w-full"
            />
            <p className="font-medium text-xs lg:text-sm text-site-typo lg:max-w-[53ch]">
              Dentity Dental is a Multispeciality Clinic Chain in Kolkata &
              Various Parts of West Bengal. Ranked multiple times in Times of
              India Health Survery & awarded by Governor of WB for Dental
              Excellence.
            </p>
            <div className="flex flex-col gap-3 lg:gap-2 xlg:gap-3">
              <button
                onClick={() => openModal("EnquiryBoxComponent")}
                className="rounded-md px-2 md:px-4 lg:px-2 xlg:px-4 h-[2.5rem] bg-site-sub text-white flex justify-center md:gap-2 xlg:gap-4 lg:gap-2 gap-1 items-center buttonshine"
              >
                <div className="relative w-4 h-4 xlg:w-6 xlg:h-6">
                  <div className="relative w-4 h-4">
                    <Image
                      src={"/images/onlineconsultationicon.svg"}
                      alt="online consultation"
                      fill
                      className=""
                    />
                  </div>
                </div>
                <span className="text-xs md:text-base lg:text-[10px] xlg:text-sm xl:text-base">
                  Online Consult
                </span>
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
                        {selectedComponent === "EnquiryBoxComponent" && (
                          <EnquiryBox />
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </button>
              <Link
                href={"#"}
                className="rounded-md px-2 md:px-4 lg:px-2 xlg:px-4 h-[2.5rem] bg-site-main text-white flex justify-center md:gap-2 xlg:gap-4 lg:gap-2 gap-1 items-center buttonshine"
              >
                <div className="relative w-4 h-4 ">
                  <Image
                    src={"/images/payonlineicon.svg"}
                    alt="pay now"
                    fill
                    className=""
                  />
                </div>
                <span className="text-xs md:text-base lg:text-[10px] xlg:text-sm xl:text-base">
                  Pay Online
                </span>
              </Link>
            </div>
            <div className="flex  gap-3 lg:gap-2 xlg:gap-3">
              <Link
                href="https://www.youtube.com/channel/UC-iPLeqAzrCXv3_gowjrqWw"
                target="_blank"
                className="text-[1.5rem] xlg:text-[2.5rem] object-cover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.8886 3.37061C12.1776 1.17298 16.0444 0 20 0C25.3043 0 30.3914 2.10714 34.1421 5.85786C37.8929 9.60859 40 14.6957 40 20C40 23.9556 38.827 27.8224 36.6294 31.1114C34.4318 34.4004 31.3082 36.9638 27.6537 38.4776C23.9991 39.9913 19.9778 40.3874 16.0982 39.6157C12.2186 38.844 8.65492 36.9392 5.85787 34.1421C3.06082 31.3451 1.15601 27.7814 0.384303 23.9018C-0.387401 20.0222 0.00866564 16.0009 1.52242 12.3463C3.03617 8.69181 5.59962 5.56823 8.8886 3.37061ZM30.224 25.064C30.4239 24.5806 30.5267 24.0626 30.5263 23.5395V16.4605C30.5267 15.9374 30.4239 15.4194 30.224 14.936C30.0241 14.4527 29.7308 14.0134 29.3611 13.6434C28.9913 13.2734 28.5523 12.9799 28.069 12.7796C27.5858 12.5794 27.0678 12.4763 26.5447 12.4763H13.4553C12.9322 12.4763 12.4142 12.5794 11.931 12.7796C11.4477 12.9799 11.0087 13.2734 10.6389 13.6434C10.2692 14.0134 9.97595 14.4527 9.77602 14.936C9.57608 15.4194 9.47335 15.9374 9.47369 16.4605V23.5395C9.47335 24.0626 9.57608 24.5806 9.77602 25.064C9.97595 25.5473 10.2692 25.9866 10.6389 26.3566C11.0087 26.7266 11.4477 27.0201 11.931 27.2203C12.4142 27.4206 12.9322 27.5237 13.4553 27.5237H26.5447C27.0678 27.5237 27.5858 27.4206 28.069 27.2203C28.5523 27.0201 28.9913 26.7266 29.3611 26.3566C29.7308 25.9866 30.0241 25.5473 30.224 25.064ZM22.7737 20.0076L17.2263 23.2261V16.7734L22.7737 20.0076Z"
                    fill="#104099"
                  />
                </svg>
              </Link>

              <Link
                href="https://api.whatsapp.com/send?phone=919051553253"
                className="text-[1.5rem] xlg:text-[2.5rem] object-cover"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 40 40"
                  fill="none"
                >
                  <path
                    d="M20.005 0H19.995C8.9675 0 0 8.97 0 20C0 24.375 1.41 28.43 3.8075 31.7225L1.315 39.1525L9.0025 36.695C12.165 38.79 15.9375 40 20.005 40C31.0325 40 40 31.0275 40 20C40 8.9725 31.0325 0 20.005 0ZM31.6425 28.2425C31.16 29.605 29.245 30.735 27.7175 31.065C26.6725 31.2875 25.3075 31.465 20.7125 29.56C14.835 27.125 11.05 21.1525 10.755 20.765C10.4725 20.3775 8.38 17.6025 8.38 14.7325C8.38 11.8625 9.8375 10.465 10.425 9.865C10.9075 9.3725 11.705 9.1475 12.47 9.1475C12.7175 9.1475 12.94 9.16 13.14 9.17C13.7275 9.195 14.0225 9.23 14.41 10.1575C14.8925 11.32 16.0675 14.19 16.2075 14.485C16.35 14.78 16.4925 15.18 16.2925 15.5675C16.105 15.9675 15.94 16.145 15.645 16.485C15.35 16.825 15.07 17.085 14.775 17.45C14.505 17.7675 14.2 18.1075 14.54 18.695C14.88 19.27 16.055 21.1875 17.785 22.7275C20.0175 24.715 21.8275 25.35 22.475 25.62C22.9575 25.82 23.5325 25.7725 23.885 25.3975C24.3325 24.915 24.885 24.115 25.4475 23.3275C25.8475 22.7625 26.3525 22.6925 26.8825 22.8925C27.4225 23.08 30.28 24.4925 30.8675 24.785C31.455 25.08 31.8425 25.22 31.985 25.4675C32.125 25.715 32.125 26.8775 31.6425 28.2425Z"
                    fill="#104099"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 xlg:text-base lg:text-xs text-base xlg:gap-3">
            <h1 className="text-lg xlg:text-2xl font-semibold text-custom-gold truncate text-site-main">
              Quick Link
            </h1>
            <ul className="flex flex-col  text-sm lg:text-xs xlg:text-base  lg:gap-4 gap-6 font-medium text-white">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Treatments", href: "/treatments/smile-design" },
                { label: "Our Facilities", href: "/facilities" },
                {
                  label: "Our Clinics",
                  href: "/clinics/best-dental-clinic-in-gariahat",
                },
                { label: "Media", href: "/gallery" },
                { label: "Awards", href: "/awards" },
                { label: "Contact Us", href: "/contact-us" },
                { label: "Patient Corner", href: "/pdfs/Bengali Version.pdf" },
                { label: "Online Consult", href: "/contact-us" },
                { label: "Pay Online", href: "#" },
              ].map((link, key) => (
                <li key={key}>
                  <Link
                    href={link.href}
                    className="text-site-text hover:text-site-main"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {treatmentGroups.map((group, index) => (
            <FooterList
              key={index}
              Treatments={group}
              title={"Our Treatments"}
            />
          ))}
          <FooterList Treatments={facilitiesGroup} title="Our Facilities" />
          <FooterList
            Treatments={clinicGroup}
            title="Our Clinics"
            textKey="navLabel"
          />
        </div>

        <div className="w-full h-[1px] bg-site-text" />
        <div className="flex flex-col lg:flex-row items-center gap-4 xlg:gap-0 justify-between">
          <h1 className="text-site-text font-medium text-sm lg:text-xl text-left">
            &copy; Copyright{" "}
            <span className="font-semibold">Dentity Dental - 2025</span> All
            Rights Reserved
          </h1>
          <h1 className="text-site-text font-medium text-sm lg:text-xl text-right">
            Design &amp; Developed By:{" "}
            <Link
              href="https://rebootai.in/"
              target="_blank"
              className="inline"
            >
              Reboot AI Pvt. Ltd.
            </Link>
          </h1>
        </div>
      </div>
    </footer>
  );
}

function FooterList({
  Treatments,
  title,
  textKey = "label",
  linkKey = "href",
}) {
  // Ensure Treatments is an array
  const safeTreatments = Array.isArray(Treatments) ? Treatments : [];

  return (
    <div className="flex flex-col gap-3 xlg:text-base lg:text-xs text-base xlg:gap-3">
      <h1 className="text-lg xlg:text-2xl font-semibold text-custom-gold truncate text-site-main">
        {title}
      </h1>
      <ul className="flex flex-col  text-sm lg:text-xs xlg:text-base lg:gap-4 gap-6 font-medium text-white">
        {safeTreatments.map((item, index) => (
          <li key={index}>
            <Link
              href={item[linkKey] || "#"} // Default to "#" if linkKey is missing
              className="text-site-text hover:text-site-main"
            >
              {item[textKey] || "Unnamed"}{" "}
              {/* Default to "Unnamed" if textKey is missing */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
