import BlogCard from "./BlogCard";

export default function SimilarBlogs({ relatedBlogs }) {

  return (
    <section className="flex flex-col relative gap-3 lg:gap-5 p-4">
      <h1 className="text-lg md:text-3xl font-medium text-site-main text-center">
        Related Blogs
      </h1>
      {relatedBlogs.length > 0 &&
        relatedBlogs.map((blog) => (
          <div className="h-full cursor-pointer" key={blog.blog_id}>
            <BlogCard blog={blog} />
          </div>
        ))}
    </section>
  );
}
