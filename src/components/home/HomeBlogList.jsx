import BlogCard from "../blogs/BlogCard";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useRouter } from "next/router";

export default function HomeBlogList({blogs, pagination, currentPage}) {
    const router = useRouter();
  
    const totalPages = pagination?.totalPages || 1;
  
    const goToPage = (page) => {
      router.push(`/?page=${page}`);
    };

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [autoslide, setAutoslide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 340) {
        setSlidesToShow(1);
        setAutoslide(true);
      } else if (window.innerWidth <= 560) {
        setSlidesToShow(1);
        setAutoslide(true);
      } else if (window.innerWidth <= 860) {
        setSlidesToShow(2);
        setAutoslide(true);
      } else if (window.innerWidth <= 1024) {
        setSlidesToShow(3);
        setAutoslide(true);
      } else if (window.innerWidth <= 1780) {
        setSlidesToShow(4);
        setAutoslide(true);
      } else {
        setSlidesToShow(4);
        setAutoslide(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col gap-8 xl:p-16 lg:p-8 p-4 ">
      <section className="flex flex-col gap-1 lg:gap-2">
        <h3 className="text-lg md:text-3xl font-medium text-site-main">
          See Our Latest Helpful Blogs
        </h3>
        <h1 className="text-site-typo md:text-lg text-base font-semibold">
          EVERY TOOTH IN A PERSON IS MORE VALUABLE THAN A DIAMOND. Smile is the
          first thing people notice when they meet one another. Smile is
          something that can change the world. So in our DENTITY DENTAL Clinics
          we create a confident smile for you.
        </h1>
      </section>

      <div className="w-full">
        <Swiper
          spaceBetween={5}
          slidesPerView={slidesToShow}
          autoplay={
            autoslide ? { delay: 3000, disableOnInteraction: false } : false
          }
          loop={true}
          modules={[Autoplay]}
        >
          {blogs?.map((blog) => (
            <SwiperSlide key={blog.blog_id} className="p-2">
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            disabled={currentPage === 1}
            onClick={() => goToPage(currentPage - 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`px-4 py-2 rounded ${
                  currentPage === page
                    ? "bg-site-main text-white"
                    : "bg-gray-200"
                }`}
              >
                {page}
              </button>
            );
          })}

          <button
            disabled={currentPage === totalPages}
            onClick={() => goToPage(currentPage + 1)}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
