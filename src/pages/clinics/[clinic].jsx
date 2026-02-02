import ClinicDetails from "@/components/clinics/ClinicDetails";
import RelatedClinics from "@/components/clinics/RelatedClinics";
import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import { Clinic as AllClinic } from "@/lib/clinicsDataList";
import { useRouter } from "next/router";

export default function Clinic({
  metatitle,
  metadescription,
  title,
  description,
  cover,
  href,
  address,
  timing,
  map,
  iframe,
  phone,
  fblink,
  instaLink,
}) {
  const router = useRouter();
  return (
    <WebsiteTemplate title={metatitle} description={metadescription}>
      <SubBanner heading="Our Clinics" />
      <ClinicDetails
        title={title}
        description={description}
        cover={cover}
        address={address}
        timing={timing}
        map={map}
        iframe={iframe}
        phone={phone}
        fblink={fblink}
        instaLink={instaLink}
      />
      <RelatedClinics currentQuery={router.query.clinic} />
    </WebsiteTemplate>
  );
}

export const getStaticPaths = async () => {
  // Define 5 static paths for your services
  const paths = AllClinic.map((item) => {
    return {
      params: { clinic: item.href.split("/")[2] },
    };
  });

  return {
    paths,
    fallback: false, // Set to 'blocking' if you want fallback pages
  };
};

export const getStaticProps = async ({ params }) => {
  const clinicData = AllClinic.reduce((acc, item) => {
    const key = item.href.split("/")[2];
    acc[key] = {
      metatitle: item.metatitle,
      metadescription: item.metadescription,
      title: item.label,
      description: item.description,
      cover: item.cover,
      href: item.href,
      address: item.address,
      timing: item.timing,
      map: item.map,
      iframe: item.iframeSrc,
      phone: item.phone,
      fblink: item.fblink,
      instaLink: item.instaLink,
    };
    return acc;
  }, {});

  const { clinic } = params;

  // Fetch data based on the treatment slug
  const data = clinicData[clinic];

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      metatitle: data.metatitle,
      metadescription: data.metadescription,
      title: data.title,
      description: data.description,
      cover: data.cover,
      href: data.href,
      address: data.address,
      timing: data.timing,
      map: data.map,
      iframe: data.iframe,
      phone: data.phone,
      fblink: data.fblink,
      instaLink: data.instaLink,
    },
  };
};
