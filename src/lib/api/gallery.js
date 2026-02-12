const API_BASE_URL = "https://dentitydentaladminpanel.vercel.app";
// const API_BASE_URL = "http://localhost:3000";
// gallery

export async function fetchGallerys({
  page = 1,
  limit = 10,
  domain,
}) {
  const params = new URLSearchParams();

  params.append("page", String(page));
  params.append("limit", String(limit));

  if (domain) params.append("domain", domain);

  const res = await fetch(
    `${API_BASE_URL}/api/gallery?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch gallery");

  return res.json();
}