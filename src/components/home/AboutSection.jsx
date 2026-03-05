import Image from "next/image";
import React, { Suspense, lazy } from "react";

// Lazy load non-critical below-fold component
const WhyChooseUsSection = lazy(() => import("../global/WhyChooseUsSection"));

const aboutcontent = [
  {
    heading: "Best Dental Clinic In Kolkata - Dentity Dental",
    paragraphs: [
      "Dentity Dental Is an ISO Certified Brand & Awarded by the Governor of West Bengal. Multiple times, this brand has ranked in the number 1 position according to the Times of India Health Survey. Dentity Dental Is the Best & Affordable Multi-speciality Chain Dental Clinic, which provides all kinds of Oral, Dental & Facial Treatments in a Highly Expertised Way. Every Tooth in a Person Is More Valuable Than a Diamond.",
      "Smile is the first thing people notice when they meet one another. Smile is something that can change the world. So in our Dentity Dental Clinics, we create a confident smile for you. We the Dentity Dental – a chain of multispeciality Dental Clinics in Kolkata (Tollygunge Netajinagar, Tollyhunge Suryanagar, Sonarpur, Dumdum Cantonment, VIP Road Teghoria, Rajarhat-Teghoria-Newtown-Chinapark, Gariahat, Beleghata) & various places of West Bengal already served an uncountable number of happy patients.",
    ],
  },
  {
    heading: "Why Choose Dentity Dental - The Trusted Smile Partners In Kolkata",
    features: [
      { label: "Experience and Skill that sets us apart", text: "We hold the expertise to cater to the dentistry needs of your entire family due to our wholesome experience in the field." },
      { label: "Multispecialty brings more to YOU!", text: "Our multispecialty clinic ensures that we are the one-stop solution for everything dental." },
      { label: "360-degree Dental Solutions", text: "Our chain of dental clinics in Kolkata ensures that no matter your location, we are closer to you than ever before." },
      { label: "Worth Your Trust", text: "Awarded as a trusted Dental clinic by the Governor and the Times of India Health Survey — ISO certified." },
      { label: "Care and Warmth", text: "Every staff and expert at the clinic is meant to make your journey smoother and more comfortable." },
      { label: "Multiple Locations", text: "Branches in Tollygunge, Netajinagar, Suryanagar, Teghoria, Beleghata and more for your convenience." },
      { label: "Happy Patients, Real Smiles", text: "Real patient testimonials showcase our quality of service and why we are Kolkata's best dental clinic." },
    ],
  },
];

const AboutSection = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 xlg:gap-16 xl:p-16 lg:p-8 p-4">
      <section className="flex flex-col md:flex-row items-stretch gap-4 xlg:gap-8">

        <section className="flex flex-col gap-6 w-full md:w-[50%]">

          <div className="flex flex-col gap-3 flex-1">
            <div className="relative w-full" style={{ aspectRatio: "720/582" }}>
              <Image
                src="https://res.cloudinary.com/dfhfdirbu/image/upload/f_auto,q_auto,w_800/v1772004148/toi-about_uit1xx.avif"
                alt="Times of India Health Survey Ranking - Dentity Dental Best Clinic Kolkata"
                fill
                priority
                fetchPriority="high"
                decoding="sync"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="rounded-sm object-cover"
              />
            </div>
            <h2 className="lg:text-xl text-base font-semibold text-site-text">
              Times of India Health Survey Ranking 2023
            </h2>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <div className="relative w-full" style={{ aspectRatio: "1/1" }}>
              <Image
                src="https://res.cloudinary.com/dfhfdirbu/image/upload/f_auto,q_auto,w_600/v1772693201/image_1_xsgdhe.avif"
                alt="Dentity Dental Award - Governor of West Bengal"
                fill
                loading="eager"
                fetchPriority="low"
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                className="rounded-sm object-cover"
              />
            </div>
          </div>
        </section>

        <section className="md:w-[50%] w-full flex flex-col gap-3 lg:gap-5 xlg:gap-8">

          <div className="flex flex-col gap-2 xlg:gap-5">
            <h1 className="text-site-main text-xl lg:text-2xl xlg:text-3xl xxl:text-4xl font-semibold">
              {aboutcontent[0].heading}
            </h1>
            {aboutcontent[0].paragraphs.map((para, i) => (
              <p
                key={i}
                className="text-site-typo text-sm lg:text-sm/[21px] xlg:text-base/[26px] xxl:text-xl/[28px]"
              >
                {para}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-2 xlg:gap-5">
            <h2 className="text-site-main text-xl lg:text-2xl xlg:text-3xl xxl:text-4xl font-semibold">
              {aboutcontent[1].heading}
            </h2>
            <ul className="flex flex-col gap-2 text-site-typo text-sm lg:text-sm/[21px] xlg:text-base/[26px] xxl:text-xl/[28px]">
              {aboutcontent[1].features.map((feature, i) => (
                <li key={i}>
                  <strong>{feature.label}: </strong>
                  {feature.text}
                </li>
              ))}
            </ul>
          </div>

          <section className="flex flex-col gap-4 xlg:gap-8">
            <p className="lg:text-base xlg:text-[17px]/[25px] md:text-sm xxl:text-2xl/[30px] text-site-typo text-xs/[17px]">
              Dr. Saikat Paul (Consultant Oral, Dental Surgeon & Maxillofacial Prosthodontist,
              Founder cum Owner of Dentity Dental — ISO certified, Best multispeciality dental
              chain clinic in Kolkata & West Bengal as per Times Of India Health Survey) receiving
              award from honourable Governor (Shri C.V. Ananda Bose) of West Bengal for
              professional and academic excellence in Health Care Sector.
            </p>

            <Suspense fallback={<div className="h-32 animate-pulse bg-gray-100 rounded" />}>
              <WhyChooseUsSection />
            </Suspense>
          </section>
        </section>

      </section>
    </div>
  );
};

export default AboutSection;
