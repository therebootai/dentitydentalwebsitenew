import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/Navbar";
import Head from "next/head";
import CallWithUs from "./CallWithUs";
import OnlyMobile from "./OnlyMobile";

export default function WebsiteTemplate({ children, title, description }) {
  // const DENTITY_DENTAL_LD_JSON = {
  //   "@context": "https://schema.org",
  //   "@type": "DiagnosticLab",
  //   name: "Dentity Dental",
  //   url: "https://dentitydental.in/",
  //   logo: "https://dentitydental.in/images/logo.svg",
  //   sameAs: [
  //     "https://www.facebook.com/share/1BY3y4a7uN/",
  //     "https://www.instagram.com/dentitydentalgariahat1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  //     "https://www.youtube.com/channel/UC-iPLeqAzrCXv3_gowjrqWw",
  //     "https://dentitydental.in/",
  //   ],
  // };
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/images/favicon.svg" type="image/svg" />
        {/* <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(DENTITY_DENTAL_LD_JSON),
          }}
        /> */}
      </Head>
      <NavBar />
      <div className="lg:mt-[6.5rem] md:mt-[4.5rem] mt-[3.5rem]">
        {children}
      </div>
      <CallWithUs />
      <OnlyMobile />
      <Footer />
    </>
  );
}
