import FacilitiesPage from "@/components/FacilitiesPage";
import SubBanner from "@/components/global/SubBanner";
import HomeEnquiry from "@/components/home/HomeEnquiry";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import React from "react";

const Facilities = () => {
  return (
    <WebsiteTemplate
      title={"Dental Clinic Facilities in Kolkata | Dentity Dental"}
      description={
        "Explore the modern facilities at Dentity Dental. From advanced equipment to expert dental care, we provide top-notch services at our multispecialty dental clinics in Kolkata."
      }
    >
      <SubBanner heading={"Facilities"} />
      <FacilitiesPage />
      <HomeEnquiry />
    </WebsiteTemplate>
  );
};

export default Facilities;
