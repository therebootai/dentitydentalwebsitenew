import AboutPageDesign from "@/components/aboutus/AboutPageDesign";
import SubBanner from "@/components/global/SubBanner";
import CertifiedSlider from "@/components/home/CertifiedSlider";
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

const About = ({treatments}) => {
  return (
    <WebsiteTemplate
      title={"Dentist in Kolkata | About Dentity Dental"}
      description={
        "Learn more about Dentity Dental, the leading chain of multispecialty dental clinics in Kolkata and West Bengal. Trusted dentists offering top-quality care and innovative treatments."
      }
      treatments={treatments}
    >
      <SubBanner heading="About Us" />
      <AboutPageDesign />
      <CertifiedSlider />
      <HomeEnquiry />
    </WebsiteTemplate>
  );
};

export default About;
