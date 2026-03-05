import Image from "next/image";
import Link from "next/link";
import DOMPurify from "dompurify";
import { MdArrowOutward, MdOutlineRemoveRedEye } from "react-icons/md";


export default function BlogCard({ blog }) {

  return (
    <Link
      href={`/blogs/${blog.slug}`}
      className="bg-white shadow-custom p-4 h-full flex flex-col w-full gap-3 my-4 rounded-md"
    >
      <div>
        <Image
          src={blog.blogImg?.secure_url || ""}
          alt={blog.blogTitle || "blog cover"}
          width={640} 
          height={360}
          loading="lazy"
          fetchPriority="low"
          unoptimized
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover h-[15rem] rounded-md w-full"
        />
      </div>

      <div className="flex justify-between gap-4 h-[2.5rem]">
        <div className="flex items-center gap-1 text-[11px]">
          <span className="relative px-6 py-0.5 bg-site-main text-white xl:text-sm text-xs rounded-full font-medium">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[11px]">
          <span className="p-1 inline-flex items-center justify-center rounded-full bg-site-main text-white">
            <MdOutlineRemoveRedEye />
          </span>
          <span className="text-site-typo font-medium">
            {blog.viewsCount} Views
          </span>
        </div>
      </div>

      <h2 className="text-site-main text-base lg:text-lg font-medium line-clamp-1">
        {blog.blogTitle}
      </h2>

     <div
      className="xlg:text-base/[24px] lg:text-sm text-xs/[16px] text-center text-site-typo bg-transparent line-clamp-2"
      dangerouslySetInnerHTML={{
        __html: typeof window !== "undefined"
          ? DOMPurify.sanitize(blog.writeBlog)
          : blog.writeBlog  
      }}
    />

      <div className="flex justify-between">
        <div className="font-medium text-site-main text-base">Read More</div>
        <div className="text-white bg-site-main rounded-full p-2 text-sm inline-flex items-center gap-1">
          <MdArrowOutward className="text-lg" />
        </div>
      </div>
    </Link>
  );
}