import ContactUsPage from "@/components/ContactUsPage";
import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import React from "react";
import { Clinic } from "@/lib/clinicsDataList";

const ContactUs = () => {
  return (
    <WebsiteTemplate
      title={"Contact Dentity Dental | Locations & Contact Information"}
      description={
        "Reach out to Dentity Dental. Find our clinic locations, contact numbers, and connect with the best dental experts in Kolkata and West Bengal."
      }
    >
      <SubBanner heading={"Contact US"} />
      <ContactUsPage contact={Clinic} />
    </WebsiteTemplate>
  );
};

export default ContactUs;
