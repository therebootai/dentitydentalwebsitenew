const API_BASE_URL = "https://dentitydentaladminpanel.vercel.app";

export async function fetchBlogs({
  page = 1,
  limit = 10,
  domain,
}) {
  const params = new URLSearchParams();

  params.append("page", String(page));
  params.append("limit", String(limit));

  if (domain) params.append("domain", domain);

  const res = await fetch(
    `${API_BASE_URL}/api/blogs?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch blogs");

  return res.json();
}


export async function fetchSingleBlog(slug) {
  const res = await fetch(`${API_BASE_URL}/api/blogs/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch blog");

  return res.json();
}