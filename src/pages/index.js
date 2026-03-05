
import Banner from "@/components/home/Banner";
import CertifiedSlider from "@/components/home/CertifiedSlider";
import { fetchBlogs } from "@/lib/api/blogs";
import { fetchSliders } from "@/lib/api/slider";
import { fetchTreatments } from "@/lib/api/treatments";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import dynamic from "next/dynamic";
import Head from "next/head";

const AboutSection = dynamic(
  () => import("@/components/home/AboutSection"),
  {
    ssr: true,
    loading: () => <div className="h-[400px] bg-gray-50 animate-pulse" />
  }
);

const TreatmentSection = dynamic(
  () => import("@/components/home/TreatmentSection"),
  {
    ssr: true,
    loading: () => <div className="h-[300px] bg-gray-50 animate-pulse" />
  }
);


const OurBranchesSection = dynamic(() => import("@/components/home/OurBranchesSection"), { ssr: false });
const HomeBlogList = dynamic(() => import("@/components/home/HomeBlogList"), { ssr: false })
const HomeEnquiry = dynamic(() => import("@/components/home/HomeEnquiry"), { ssr: true });

export async function getStaticProps() {
  const domain = "dentitydental.in";

  const [blogs, sliders, treatments] = await Promise.all([
    fetchBlogs({ page: 1, limit: 10, domain }),
    fetchSliders({ page: 1, limit: 10, domain }),
    fetchTreatments({ domain }),
  ]);

  return {
    props: {
      blogs: blogs?.data || [],
      sliders: sliders?.data || [],
      treatments: treatments?.data || [],
      pagination: blogs?.paginations || null,
      currentPage: 1,
    },
    revalidate: 60, 
  };
}

export default function Home({ blogs, sliders, treatments }) {

    const firstSlider = sliders?.find(s => s.status);
  const sliderImgUrl = firstSlider?.slider_image?.secure_url
    ? firstSlider.slider_image.secure_url.replace(
        "/image/upload/",
        "/image/upload/f_auto,q_auto,w_750/"
      )
    : null;
  
  return (
    <WebsiteTemplate
      title="Best Dental Clinic in Kolkata - Dentity Dental"
      description="Discover the best dental clinic in Kolkata at Dentity Dental. We provide advanced oral, dental, and facial treatments with state-of-the-art technology and expert dentists."
       treatments={treatments}
    >
      <Head>
        <link rel="canonical" href="https://dentitydental.in/" />

           {sliderImgUrl && (
          <link
            rel="preload"
            as="image"
            href={sliderImgUrl}
            fetchPriority="high"
          />
        )}

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

      

      <Banner sliders={sliders} />
      <CertifiedSlider />
      <AboutSection />
      <OurBranchesSection />
      <TreatmentSection treatments={treatments} />
      <HomeEnquiry />
      <HomeBlogList
        blogs={blogs}
      />
    </WebsiteTemplate>
  );
}
