import Image from "next/image";
import React, { useEffect, useState } from "react";
import WhyChooseUsSection from "../global/WhyChooseUsSection";
const AboutPageDesign = () => {

  return (
    <section className="xl:p-16 lg:p-8 p-4 flex flex-col md:flex-row gap-4 xlg:gap-8">
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
                <div className="relative w-full h-full min-h-[300px] max-md:h-[250px]">
                  <Image
                    src="https://res.cloudinary.com/dfhfdirbu/image/upload/f_auto,q_auto,w_600/v1772014005/dentitydentalwebsite/images/eoyvnqbohzo5uvc67p99.jpg"
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
      <section
        className="md:w-[50%] w-full flex flex-col gap-3 lg:gap-5 xlg:gap-8"
      >
        <div className="flex flex-col gap-2 xlg:gap-5">
          <h1 className="text-site-main text-xl lg:text-2xl xlg:text-3xl font-semibold">
            Most Popular Dental Clinic In Kolkata
          </h1>
          <p className="text-site-typo text-xs/[17px] lg:text-sm/[21px] xlg:text-base/[26px]">
            Dentity Dental Is an ISO Certified Brand & Awarded by the Governor
            of West Bengal. Multiple times, this brand has ranked in the number
            1 position according to the Times of India Health Survey. Dentity
            Dental Is the Best & Affordable Multi-speciality Chain Dental
            Clinic, which provides all kinds of Oral, Dental & Facial Treatments
            in a Highly Expertised Way.Every Tooth in a Person Is More Valuable
            Than a Diamond. <br /> Smile is the first thing people notice when
            they meet one another. Smile is something that can change the world.
            So in our Dentity Dental Clinics, we create a confident smile for
            you. We the Dentity Dental - a chain of multispeciality Dental
            Clinics in Kolkata (Tollygunge Netajinagar, Tollyhunge Suryanagar,
            Sonarpur, Dumdum Cantonment, VIP Road Teghoria,
            Rajarhat-Teghoria-Newtown-Chinapark, Gariahat, Beleghata) & various
            places of West Bengal (Dental Mid World, Midnapur) already served an
            uncountable number of happy patients with our ultramodern equipment,
            latest advanced technology, and most importantly, highly skilled
            specialist dentists.
          </p>
          <h1 className="text-site-main text-xl lg:text-2xl xlg:text-3xl font-semibold">
            Why Choose Dentity Dental- The trusted Smile Partners For you in
            Kolkata
          </h1>
          <p className="text-site-typo text-xs/[17px] lg:text-sm/[21px] xlg:text-base/[26px]">
            <strong>Experience and Skill that sets us apart: </strong> We hold
            the expertise to cater to the dentistry needs of your entire family
            due to our wholesome experience in the field. Our skills truly make
            us the people's favorites! <br />{" "}
            <strong>Multispecialty brings more to YOU!:</strong> Our
            multispecialty clinic ensures that we are the one-stop solution for
            everything dental that you might ever need under the sun! <br />{" "}
            <strong>360-degree Dental Solutions:</strong> Our chain of dental
            clinics in Kolkata further ensures that no matter your location, we
            are closer to you than ever before! <br />{" "}
            <strong>Worth Your Trust:</strong> Awarded as a trusted Dental
            clinic by the Governor of the state and the Times of India Health
            survey, we are an ISO-certified brand eligible for all your faith!{" "}
            <br /> <strong> Care and Warmth: </strong> Every staff and expert at
            the clinic is meant to make your journey smoother! We bet you will
            end up making friends by the time you exit the clinic, we are that
            warm !
          </p>
        </div>
        <WhyChooseUsSection />
      </section>
    </section>
  );
};

export default AboutPageDesign;
