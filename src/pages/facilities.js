import FacilitiesPage from "@/components/FacilitiesPage";
import SubBanner from "@/components/global/SubBanner";
import HomeEnquiry from "@/components/home/HomeEnquiry";
import { getGlobalData } from "@/lib/staticData";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import React from "react";


export async function getStaticProps() {
  const global = await getGlobalData();

  return {
    props: {
      treatments: global.treatments,
    },
    revalidate: 60,
  };
}

const Facilities = ({treatments}) => {
  return (
    <WebsiteTemplate
      title={"Dental Clinic Facilities in Kolkata | Dentity Dental"}
      description={
        "Explore the modern facilities at Dentity Dental. From advanced equipment to expert dental care, we provide top-notch services at our multispecialty dental clinics in Kolkata."
      }
      treatments={treatments}
    >
      <SubBanner heading={"Facilities"} />
      <FacilitiesPage />
      <HomeEnquiry />
    </WebsiteTemplate>
  );
};

export default Facilities;
