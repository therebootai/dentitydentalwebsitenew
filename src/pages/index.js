import AboutSection from "@/components/home/AboutSection";
import Banner from "@/components/home/Banner";
import CertifiedSlider from "@/components/home/CertifiedSlider";
import HomeBlogList from "@/components/home/HomeBlogList";
import HomeEnquiry from "@/components/home/HomeEnquiry";
import OurBranchesSection from "@/components/home/OurBranchesSection";
import TreatmentSection from "@/components/home/TreatmentSection";
import { fetchBlogs } from "@/lib/api/blogs";
import { fetchSliders } from "@/lib/api/slider";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import Head from "next/head";

export async function getServerSideProps(context) {
  const page = Number(context.query.page) || 1;
  const domain = "dentitydental.in";
  const [blogs, sliders] = await Promise.all([
    fetchBlogs({
      page,
      limit: 10,
      domain,
    }),
    fetchSliders({
      page,
      limit: 10,
      domain,
    }),    
  ]);
  return {
    props: {
      blogs: blogs?.data || [],
      sliders: sliders?.data || [],
      pagination: blogs?.paginations || null,
      currentPage: page,
    },
  };
}

export default function Home({ blogs, sliders, pagination, currentPage }) {
  
  return (
    <WebsiteTemplate
      title="Best Dental Clinic in Kolkata - Dentity Dental"
      description="Discover the best dental clinic in Kolkata at Dentity Dental. We provide advanced oral, dental, and facial treatments with state-of-the-art technology and expert dentists."
    >
      <Head>
        <link rel="canonical" href="https://dentitydental.in/" />

        <meta
          property="og:title"
          content="Best Dental Clinic in Kolkata — Dentity Dental"
        />
        <meta
          property="og:description"
          content="Dentity Dental is the best dental clinic in Kolkata offering implants, root canal, braces, whitening and cosmetic dentistry. Book your appointment at our Gariahat & other Kolkata branches."
        />
        <meta property="og:url" content="https://dentitydental.in/" />
        <meta property="og:site_name" content="Dentity Dental" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Dental Clinic in Kolkata — Dentity Dental"
        />
        <meta
          name="twitter:description"
          content="Dentity Dental is the best dental clinic in Kolkata offering implants, RCT, braces & cosmetic dentistry."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "Dentity Dental",
              url: "https://dentitydental.in/",
              logo: "https://dentitydental.in/images/logo.svg",
              image: [
                "https://dentitydental.in/images/dd-slider.jpg",
                "https://dentitydental.in/images/toi-about.avif",
                "https://dentitydental.in/images/gov-about.avif",
                "https://dentitydental.in/images/gov2-about.avif",
                "https://dentitydental.in/images/dd-toi-article.avif",
                "https://dentitydental.in/images/newspaper-cut-out.avif",
              ],
              description:
                "Dentity Dental is the best dental clinic in Kolkata offering implants, root canal, braces and cosmetic dentistry.",
              telephone: "+919051553253",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Gate No 3, Gariahat Market (Old Block), Stall No G 11 !st Floor at Gariahat Crossing, 212, Rash Behari Ave, opposite Disha Eye Hospital Landmark Diagonally, opposite Traders Assembly",
                addressLocality: "Kolkata",
                addressRegion: "West Bengal",
                postalCode: "700019",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "22.519479162483485",
                longitude: "88.36585779530895",
              },
              openingHours: "Mo-Sa 09:00-21:00",
              sameAs: [
                "https://www.facebook.com/dentitydentalgariahat",
                "https://www.instagram.com/dentitydentalgariahat1",
              ],
            }),
          }}
          suppressHydrationWarning
        />
      </Head>

      {/* Existing homepage sections */}
      <Banner sliders={sliders} />
      <CertifiedSlider />
      <AboutSection />
      <OurBranchesSection />
      <TreatmentSection />
      <HomeEnquiry />
      <HomeBlogList
        blogs={blogs}
        pagination={pagination}
        currentPage={currentPage}
      />
    </WebsiteTemplate>
  );
}
