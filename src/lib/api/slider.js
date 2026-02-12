const API_BASE_URL = "https://dentitydentaladminpanel.vercel.app";
// const API_BASE_URL = "http://localhost:3000";

export async function fetchSliders({
  page = 1,
  limit = 10,
  domain,
}) {
  const params = new URLSearchParams();

  params.append("page", String(page));
  params.append("limit", String(limit));

  if (domain) params.append("domain", domain);

  const res = await fetch(
    `${API_BASE_URL}/api/slider?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch slider");

  return res.json();
}