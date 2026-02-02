import BlogCard from "@/components/blogs/BlogCard";
import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import { fetchBlogs } from "@/lib/api/blogs";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const page = Number(context.query.page) || 1;
  const domain = "dentitydental.in";

  const res = await fetchBlogs({
    page,
    limit: 12,
    domain,
  });  
  return {
    props: {
      blogs: res?.data || [],
      pagination: res?.paginations || null,
      currentPage: page,
    },
  };
}

export default function Blogs({ blogs, pagination, currentPage }) {
  const router = useRouter();

  const totalPages = pagination?.totalPages || 1;

  const goToPage = (page) => {
    router.push(`/blogs?page=${page}`);
  };

  return (
    <WebsiteTemplate
      title="Dentity Dental Blogs | Dental Care Tips & Updates"
      description="Explore the latest blogs by Dentity Dental."
    >
      <SubBanner heading="Blogs" />

      <main className="xl:p-16 lg:p-8 p-4 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
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
      </main>
    </WebsiteTemplate>
  );
}
