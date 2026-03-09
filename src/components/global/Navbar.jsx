import { Clinic } from "@/lib/clinicsDataList";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RiCloseLine, RiMenuAddLine } from "react-icons/ri";
import { FaRegWindowClose } from "react-icons/fa";
import EnquiryBox from "./EnquiryBox";

export default function NavBar({ treatments }) {
  const [dropdownStates, setDropdownStates] = useState({});
  const [menuopen, setMenuopen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const toggleDropdownpatientcorner = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdownpatientcorner = () => {
    setIsDropdownOpen(false);
  };

  const router = useRouter();

  const isActiveRoute = (href) => {
    return router.asPath === href ? true : false;
  };

  const togglemenuopen = () => {
    setMenuopen(!menuopen);
  };

  const toggleDropdown = (index) => {
    setDropdownStates({
      ...dropdownStates,
      [index]: !dropdownStates[index],
    });
  };

  const NavElement = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },

    {
      name: "Our Treatments",
      dropdownItems: treatments.map((item) => ({
        name: item.treatmentName,
        link: `/treatments/${item.slug}`,
      })),
    },

    { name: "Our Facilities", link: "/facilities" },
    {
      name: "Our Clinics",
      dropdownItems: Clinic.map((item) => ({
        name: item.navLabel,
        link: item.href,
      })),
    },

    { name: "Media", link: "/media" },

    { name: "Awards", link: "/awards" },

    { name: "Blogs", link: "/blogs" },

    { name: "Contact Us", link: "/contact-us" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getGridColumnsClass = (items) => {
    return items.length >= 30 ? "grid-cols-5 w-full" : "grid-cols-1 w-fit";
  };

  return (
    <>
      <div className="fixed top-0 bg-white z-[60] w-full ">
        <div className="hidden lg:flex justify-between  items-center sm:gap-2 z-[50] lg:gap-0 flex-row p-3 lg:px-8">
          <Link href={"/"} aria-label="Home" className="">
            <Image
              src="/images/logo.svg"
              alt=""
              height={162}
              width={70}
              className="h-[3rem] w-fit"
            />
          </Link>
          <div className="flex gap-4  font-medium sm:text-sm  lg:text-base">
            <button
              onClick={toggleDropdownpatientcorner}
              className="rounded-md px-2 lg:px-4 relative h-[2rem] lg:h-[2.5rem] bg-site-main buttonshinehover text-white  flex justify-center gap-2 lg:gap-3 items-center"
            >
              <div className="relative w-4 h-4">
                <img
                  src="/images/patientcornericon.svg"
                  alt="patientcornericon"
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
              </div>
              <span>Patient Corner</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute top-[3.5rem] w-[10rem]  bg-white shadow-md rounded-md z-10 px-2 lg:px-4">
                <ul className="flex flex-col gap-2 py-4">
                  <li>
                    <Link
                      href="/pdfs/English Version.pdf"
                      target="_blank"
                      onClick={closeDropdownpatientcorner}
                      className="block text-site-main hover:text-site-sub "
                    >
                      English Version
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pdfs/Bengali Version.pdf"
                      target="_blank"
                      onClick={closeDropdownpatientcorner}
                      className="block text-site-main hover:text-site-sub "
                    >
                      Bengali Version
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pdfs/Hindi Version.pdf"
                      target="_blank"
                      onClick={closeDropdownpatientcorner}
                      className="block text-site-main hover:text-site-sub "
                    >
                      Hindi Version
                    </Link>
                  </li>
                </ul>
              </div>
            )}
            <Link
              href="#"
              className="rounded-md  px-2 lg:px-4 h-[2rem] lg:h-[2.5rem] bg-site-main text-white  flex justify-center gap-2 lg:gap-4 buttonshinehover items-center"
            >
              <div className="relative lg:w-4 lg:h-4 h-4 w-4">
                <img
                  src="/images/payonlineicon.svg"
                  alt="payonlineicon"
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
              </div>

              <span>Pay Now</span>
            </Link>
            <button
              onClick={() => openModal("EnquiryBoxComponent")}
              className="rounded-md px-2 lg:px-4 h-[2rem] lg:h-[2.5rem] bg-site-main text-white  flex justify-center buttonshinehover gap-2 lg:gap-4 items-center"
            >
              <div className="relative w-4 h-4">
                <img
                  src="/images/onlineconsultationicon.svg"
                  alt="onlineconsultationicon"
                  aria-hidden="true"
                  width={16}
                  height={16}
                />
              </div>
              <span>Online Consult</span>
            </button>
          </div>
        </div>
      </div>
      <header
        className={`bg-white fixed top-0 lg:top-[4rem] z-50 w-full ${
          scrolled ? " " : ""
        }`}
      >
        <div
          className="lg:flex hidden shadow-custom z-[100] justify-center lg:gap-6 gap-5 xlg:gap-10 relative"
          onMouseLeave={() => {
            setDropdownStates(false);
          }}
        >
          {NavElement.map((navbar, index) => (
            <div
              key={index}
              className={`font-semibold text-site-main hover:bg-site-sub hover:text-white p-2 ${
                isActiveRoute(navbar.link) && "bg-site-sub text-white"
              }`}
            >
              {navbar.dropdownItems ? (
                <div className="">
                  <button
                    onClick={() => toggleDropdown(index)}
                    onMouseEnter={() => {
                      setDropdownStates((prev) => ({ ...prev, [index]: true }));
                    }}
                    aria-expanded={!!dropdownStates[index]}
                    aria-haspopup="true"
                    className="flex flex-row gap-2 items-center"
                  >
                    <div>{navbar.name} </div>
                  </button>
                  {dropdownStates[index] && (
                    <div className="absolute top-10 w-full left-0   px-4 z-50  flex justify-center items-center  ">
                      <div
                        className={`grid bg-white/90 border-2 gap-2 ${getGridColumnsClass(
                          navbar.dropdownItems,
                        )}`}
                      >
                        {navbar.dropdownItems.map((item, i) => (
                          <Link
                            key={i}
                            href={item.link}
                            className={`flex p-1 xlg:p-2 px-4 xlg:px-6 text-xs xlg:text-sm hover:text-site-main hover:bg-gray-200 basis-1/12 ${
                              isActiveRoute(item.link)
                                ? "bg-gray-200 text-site-main"
                                : "text-site-typo"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link href={navbar.link}>{navbar.name}</Link>
              )}
            </div>
          ))}
        </div>
        <div>
          <div className="flex justify-between items-center w-full md:p-3 p-2 px-9 lg:hidden">
            <Link href={"/"} className="lg:hidden" aria-label="Home">
              <Image
                src="/images/logo.svg"
                alt=""
                height={120}
                width={806}
                className="h-[2.5rem] md:h-[3rem] w-fit"
              />
            </Link>
            <button onClick={togglemenuopen} aria-label="Menu btn" className="">
              {menuopen ? (
                <RiCloseLine className="sm:text-[2rem] md:text-3xl text-site-main font-semibold" />
              ) : (
                <RiMenuAddLine className="sm:text-[2rem] md:text-3xl text-site-main font-semibold" />
              )}
            </button>
          </div>
          {menuopen && (
            <div className="flex bg-site-main flex-col h-[50vh] md:h-[40vh] lg:text-3xl text-xl overflow-scroll lg:hidden px-9 relative">
              {NavElement.map((navbar, index) => (
                <div
                  key={index}
                  className="font-semibold text-white p-4 md:py-10 border-b-2 border-gray-200"
                >
                  {navbar.dropdownItems ? (
                    <div className="relative ">
                      <button
                        onClick={() => toggleDropdown(index)}
                        onMouseEnter={() => toggleDropdown(index)}
                        className="flex flex-row gap-2 items-center "
                      >
                        <div>{navbar.name} </div>
                        <span className=" text-lg">
                          {dropdownStates[index] ? "▲" : "▼"}
                        </span>
                      </button>
                      <div className="w-full flex items-center justify-center z-50 relative top-0 ">
                        {dropdownStates[index] && (
                          <div className="relative bg-transparent rounded-lg mt-1 p-2 w-full transition-opacity border-gray-200 text-white opacity-100">
                            {navbar.dropdownItems.map((item, i) => (
                              <Link
                                key={i}
                                href={item.link}
                                onClick={() => setMenuopen(false)}
                                className="block py-4 px-4 border-b-[0.5px] border-gray-200 text-white "
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Link href={navbar.link} onClick={() => setMenuopen(false)}>
                      {navbar.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="flex gap-4 flex-col mt-4 mb-2  font-medium sm:text-sm  lg:text-base">
                <div className="relative w-full">
                  <button
                    onClick={toggleDropdownpatientcorner}
                    className="rounded-md px-2 lg:px-4 w-full relative h-[2rem] border border-site-gray lg:h-[2.5rem] bg-site-main buttonshinehover text-white  flex justify-center gap-2 lg:gap-3 items-center"
                  >
                    <div className="relative w-4 h-4">
                      <Image
                        src={"/images/patientcornericon.svg"}
                        alt="patient corner"
                        fill
                        className=""
                      />
                    </div>
                    <span>Patient Corner</span>
                  </button>
                  {isDropdownOpen && (
                    <div className="absolute top-[2rem] w-full  bg-white shadow-md rounded-md z-10 px-2 lg:px-4">
                      <ul className="flex flex-col gap-2 py-4">
                        <li>
                          <Link
                            href="/pdfs/English Version.pdf"
                            target="_blank"
                            onClick={closeDropdownpatientcorner}
                            className="block text-site-main hover:text-site-sub "
                          >
                            English Version
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pdfs/Bengali Version.pdf"
                            target="_blank"
                            onClick={closeDropdownpatientcorner}
                            className="block text-site-main hover:text-site-sub "
                          >
                            Bengali Version
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/pdfs/Hindi Version.pdf"
                            target="_blank"
                            onClick={closeDropdownpatientcorner}
                            className="block text-site-main hover:text-site-sub "
                          >
                            Hindi Version
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
                <Link
                  href="#"
                  className="rounded-md  px-2 lg:px-4 h-[2rem] lg:h-[2.5rem] border border-site-gray bg-site-main text-white  flex justify-center gap-2 lg:gap-4 buttonshinehover items-center"
                >
                  <div className="relative lg:w-4 lg:h-4 h-4 w-4">
                    <Image
                      src={"/images/payonlineicon.svg"}
                      alt="pay now"
                      fill
                      className=""
                    />
                  </div>

                  <span>Pay Now</span>
                </Link>
                <button
                  onClick={() => openModal("EnquiryBoxComponent")}
                  className="rounded-md px-2 lg:px-4 h-[2rem] lg:h-[2.5rem] border border-site-gray bg-site-main text-white  flex justify-center buttonshinehover gap-2 lg:gap-4 items-center"
                >
                  <div className="relative w-4 h-4">
                    <Image
                      src={"/images/onlineconsultationicon.svg"}
                      alt="online consultation"
                      fill
                      className=""
                    />
                  </div>
                  <span>Online Consult</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
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
              {selectedComponent === "EnquiryBoxComponent" && <EnquiryBox />}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
