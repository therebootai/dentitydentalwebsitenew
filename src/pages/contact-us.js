import ContactUsPage from "@/components/ContactUsPage";
import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import React from "react";
import { Clinic } from "@/lib/clinicsDataList";
import { getGlobalData } from "@/lib/staticData";

export async function getStaticProps() {
  const global = await getGlobalData();

  return {
    props: {
      treatments: global.treatments,
    },
    revalidate: 60,
  };
}

const ContactUs = ({treatments}) => {
  return (
    <WebsiteTemplate
      title={"Contact Dentity Dental | Locations & Contact Information"}
      description={
        "Reach out to Dentity Dental. Find our clinic locations, contact numbers, and connect with the best dental experts in Kolkata and West Bengal."
      }
      treatments={treatments}
    >
      <SubBanner heading={"Contact US"} />
      <ContactUsPage contact={Clinic} />
    </WebsiteTemplate>
  );
};

export default ContactUs;
