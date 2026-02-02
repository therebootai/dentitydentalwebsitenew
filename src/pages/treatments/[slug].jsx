import SubBanner from "@/components/global/SubBanner";
import RelatedTreatment from "@/components/treatments/RelatedTreatment";
import TreatMentAbout from "@/components/treatments/TreatMentAbout";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import { fetchSingleTreatment } from "@/lib/api/treatments";

export default function Treatments({ treatment, relatedTreatments }) {
  return (
    <WebsiteTemplate
      title={treatment.metaTitle || treatment.treatmentName}
      description={treatment.metadescription}
    >
      <SubBanner heading={treatment.treatmentName} />

      <TreatMentAbout
        title={treatment.treatmentName}
        description={treatment.description}
        cover={treatment.treatmentImg?.secure_url}
        galleryImgs={treatment.galleryImgs}
        faqs={treatment.faqs}
      />

      <RelatedTreatment relatedTreatments={relatedTreatments}/>
    </WebsiteTemplate>
  );
}

export async function getServerSideProps(context) {
  const { slug } = context.params;

  try {
    const res = await fetchSingleTreatment(slug);
    const [treatment, relatedTreatments] = res?.data;

    if (!treatment) {
      return { notFound: true };
    }
    // console.log(treatment);

    return {
      props: {
        treatment,
        relatedTreatments,
      },
    };
  } catch (error) {
    return { notFound: true };
  }
}
