import BlogCard from "../blogs/BlogCard";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function HomeBlogList({ blogs }) {
  return (
    <div className="flex flex-col gap-8 xl:p-16 lg:p-8 p-4">
      <section className="flex flex-col gap-1 lg:gap-2">
        <h2 className="text-lg md:text-3xl font-medium text-site-main">
          See Our Latest Helpful Blogs
        </h2>
        <p className="text-site-typo md:text-lg text-base font-semibold">
          Every tooth in a person is more valuable than a diamond. Smile is the
          first thing people notice when they meet one another. So in our
          Dentity Dental Clinics we create a confident smile for you.
        </p>
      </section>

      <div className="w-full">
        <Swiper
          spaceBetween={5}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1224: { slidesPerView: 4 },
          }}
        >
          {blogs?.map((blog) => (
            <SwiperSlide key={blog.blog_id} className="p-2">
              <BlogCard blog={blog} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="sr-only" aria-hidden="true">
        {blogs?.map((blog) => (
          <Link key={blog.blog_id} href={`/blogs/${blog.slug}`}>
            {blog.blogTitle}
          </Link>
        ))}
      </div>
    </div>
  );
}