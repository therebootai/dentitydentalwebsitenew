"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowDown, IoIosLogOut } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";

export default function AdminHeader() {
  const pathname = usePathname();

  const router = useRouter();

  //   const { user, logout } = useAuth();

 const isActive = (path) => {
  const cleanPath = pathname.split("?")[0];

  if (path === "/reboots") return cleanPath === "/reboots";
  return cleanPath === path || cleanPath.startsWith(path + "/");
};

  const allNavLinks = [
    {
      label: "Dashboard",
      path: "/reboots/dashboard",
    },
    {
      label: "Slider",
      path: "/reboots/slider-management",
    },
    {
      label: "Gallery",
      path: "/reboots/gallery-management",
    },
    {
      label: "Blog Management",
      path: "/reboots/blog-management",
    },
    {
      label: "User Management",
      path: "/reboots/user-management",
    },
  ];

  //   const handleLogout = async () => {
  //     try {
  //       await LOGOUT();
  //       logout();
  //       router.push("/");
  //     } catch (error) {
  //       console.error("Error logging out:", error);
  //       toast.error(error.message || "Unknown error");
  //     }
  //   };

  return (
    <nav className="bg-white border-b border-gray-400 flex flex-row justify-between items-center px-4 xl:px-8 gap-8 py-2 lg:py-4">
      <Link href={"/reboots/dashboard"}>
        <Image
          src="/images/logo.svg"
          alt=""
          height={162}
          width={70}
          className="h-[3rem] w-fit"
        />
      </Link>
      <div className="items-center flex justify-center  px-4 xlg:px-6 xl:px-8 gap-6 flex-wrap xl:flex-nowrap flex-1">
        {allNavLinks.map((link, index) => (
          <div className="group" key={index}>
            {!link.dropdown ? (
              <Link
                href={link.path}
                className={`inline-flex gap-2 items-center group text-site-black font-medium text-xs lg:text-sm xlg:text-sm xl:text-base ${
                  isActive(link.path)
                    ? "bg-gradient-to-r from-site-main to-site-sub text-white px-4 rounded-md h-[2rem]"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ) : (
              <div className="relative" key={index}>
                <h3
                  className={`inline-flex gap-2 items-center hover:text-custom-violet font-medium text-xs lg:text-sm xlg:text-sm xl:text-base ${
                    isActive(link.path)
                      ? "text-site-darkgreen"
                      : "text-site-black"
                  }`}
                >
                  {link.label}
                  <IoIosArrowDown />
                </h3>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[12rem] bg-linear-90 from-site-saffron to-site-skin hidden group-hover:flex p-2 rounded-md flex-col gap-2 z-10 backdrop-blur">
                  {link.dropdown.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path + "?page=1"}
                      className="flex gap-4 items-center font-medium text-sm text-site-black border-b border-transparent hover:border-site-darkgreen"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-5">
        <div className="relative flex items-center group">
          <button type="button" className="text-custom-black text-2xl">
            <PiUserCircleFill />
          </button>
          <div className="absolute top-full right-0 w-[10vmax] bg-site-main text-white hidden group-hover:flex p-2 py-4 rounded-md flex-col gap-2 z-50">
            {/* {user && (
              <div className="flex flex-col gap-2">
                <h1 className="text-site-black text-base font-bold lg:text-xl">
                  {user.name}
                </h1>
              </div>
            )} */}
            <div className="h-[1px] w-full bg-white" />
            <button
              type="button"
              //   onClick={handleLogout}
              className="flex gap-2 items-center font-medium text-sm lg:text-lg text-site-black whitespace-nowrap"
            >
              <IoIosLogOut />
              <span>Log Out</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
