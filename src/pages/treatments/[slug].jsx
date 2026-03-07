import SubBanner from "@/components/global/SubBanner";
import RelatedTreatment from "@/components/treatments/RelatedTreatment";
import TreatMentAbout from "@/components/treatments/TreatMentAbout";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import { fetchSingleTreatment } from "@/lib/api/treatments";
import { getGlobalData } from "@/lib/staticData";

export default function Treatments({
  treatment,
  relatedTreatments,
  treatments,
}) {
  if (!treatment) return null;

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
  return {
    paths: [],
    fallback: "blocking",
  };
}



export async function getStaticProps({ params }) {
  const { slug } = params;

  try {
    const global = await getGlobalData();
    const res = await fetchSingleTreatment(slug);

    if (!res || !res.success) {
      return { notFound: true };
    }

    const treatment = res?.data?.[0] || null;
    const relatedTreatments = res?.data?.[1] || [];

    if (!treatment) {
      return { notFound: true };
    }

    return {
      props: {
        treatment,
        relatedTreatments,
        treatments: global?.treatments || [],
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}