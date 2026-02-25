import { fetchTreatments } from "./api/treatments";

export async function getGlobalData() {
  const domain = "dentitydental.in";

  const treatments = await fetchTreatments({ domain });

  return {
    treatments: treatments?.data || [],
  };
}