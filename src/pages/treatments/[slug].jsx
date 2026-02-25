import SubBanner from "@/components/global/SubBanner";
import RelatedTreatment from "@/components/treatments/RelatedTreatment";
import TreatMentAbout from "@/components/treatments/TreatMentAbout";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import { fetchSingleTreatment, fetchTreatments } from "@/lib/api/treatments";
import { getGlobalData } from "@/lib/staticData";

export default function Treatments({
  treatment,
  relatedTreatments,
  treatments,
}) {
  return (
    <WebsiteTemplate
      title={treatment.metaTitle || treatment.treatmentName}
      description={treatment.metadescription}
      treatments={treatments}
    >
      <SubBanner heading={treatment.treatmentName} />

      <TreatMentAbout
        title={treatment.treatmentName}
        description={treatment.description}
        cover={treatment.treatmentImg?.secure_url}
        galleryImgs={treatment.galleryImgs}
        faqs={treatment.faqs}
      />

      <RelatedTreatment relatedTreatments={relatedTreatments} />
    </WebsiteTemplate>
  );
}

export async function getStaticPaths() {
  const domain = "dentitydental.in";
  const res = await fetchTreatments({ domain });

  const treatments = res?.data || [];

  const paths = treatments.map((item) => ({
    params: { slug: item.slug },
  }));

  return {
    paths,
    fallback: "blocking", // better for dynamic CMS data
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const global = await getGlobalData();

  try {
    const res = await fetchSingleTreatment(slug);
    const [treatment, relatedTreatments] = res?.data || [];

    if (!treatment) {
      return { notFound: true };
    }

    return {
      props: {
        treatment,
        relatedTreatments: relatedTreatments || [],
        treatments: global.treatments || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    return { notFound: true };
  }
}