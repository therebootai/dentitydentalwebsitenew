import SimilarBlogs from "@/components/blogs/SimilarBlogs";
import EnquiryBox from "@/components/global/EnquiryBox";
import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import Image from "next/image";
import { fetchSingleBlog } from "@/lib/api/blogs";

export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    const res = await fetchSingleBlog(slug);
    const [blog, relatedBlogs] = res?.data;

    if (!blog) {
      return { notFound: true };
    }

    return {
      props: {
        blog,
        relatedBlogs,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}

export default function BlogDetails({
 blog, relatedBlogs
}) {
  return (
    <WebsiteTemplate title={blog.metaTitle} description={blog.metadescription}>
      <SubBanner heading={`Dentity Dental Blogs | ${blog.blogTitle}`} />
      <main className="xl:p-16 lg:p-8 p-4 flex flex-col gap-8">
        <div className="flex gap-6">
          <div className="flex flex-col gap-4 w-full md:w-[60%] lg:w-[75%]">
            <h1 className="text-3xl font-medium text-site-main">
              {blog.blogTitle}
            </h1>
            <Image
              src={blog.blogImg?.secure_url}
              alt={blog.blogTitle}
              width={2400}
              height={1600}
              className="w-full md:h-[25rem] object-contain rounded-lg"
            />
            <div className="flex flex-col gap-4">
              <p
                className="text-site-typo text-lg text-justify"
                dangerouslySetInnerHTML={{ __html: blog.writeBlog }}
              />
            </div>
          </div>
          <div className="hidden md:flex flex-col gap-6 md:w-[40%] lg:w-[30%]">
            <div className="">
              <SimilarBlogs relatedBlogs={relatedBlogs}/>
            </div>
            <div>
              <EnquiryBox />
            </div>
          </div>
        </div>
      </main>
    </WebsiteTemplate>
  );
}
