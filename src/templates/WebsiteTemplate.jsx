import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/Navbar";
import Head from "next/head";
import CallWithUs from "./CallWithUs";
import OnlyMobile from "./OnlyMobile";

export default function WebsiteTemplate({ children, title, description,treatments }) {

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/images/favicon.svg" type="image/svg" />
      </Head>
      <NavBar treatments={treatments}/>
      <div className="lg:mt-[6.5rem] md:mt-[4.5rem] mt-[3.5rem]">
        {children}
      </div>
      <CallWithUs />
      <OnlyMobile />
      <Footer />
    </>
  );
}
