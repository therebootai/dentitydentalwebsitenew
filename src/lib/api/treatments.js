const API_BASE_URL = "https://dentitydentaladminpanel.vercel.app";

export async function fetchTreatments({
  page = 1,
  limit = 10,
  domain,
}) {
  const params = new URLSearchParams();

  params.append("page", String(page));
  params.append("limit", String(limit));

  if (domain) params.append("domain", domain);

  const res = await fetch(
    `${API_BASE_URL}/api/treatments?${params.toString()}`,
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch treatments");

  return res.json();
}


export async function fetchSingleTreatment(slug) {
  const res = await fetch(`${API_BASE_URL}/api/treatments/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch treatment");

  return res.json();
}