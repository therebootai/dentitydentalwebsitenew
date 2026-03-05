import Footer from "@/components/global/Footer";
import NavBar from "@/components/global/Navbar";
import Head from "next/head";
import CallWithUs from "./CallWithUs";
import OnlyMobile from "./OnlyMobile";

export default function WebsiteTemplate({ children, title, description, treatments }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="shortcut icon" href="/images/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <NavBar treatments={treatments} />
      <main className="lg:mt-[6.5rem] md:mt-[4.5rem] mt-[3.5rem]">
        {children}
      </main>
      <CallWithUs />
      <OnlyMobile />
      <Footer treatments={treatments} />
    </>
  );
}