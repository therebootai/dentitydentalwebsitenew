import Image from "next/image";
import React from "react";
import WhyChooseUsSection from "../global/WhyChooseUsSection";

const AboutSection = () => {


  const aboutcontent = [
    {
      heading: "Best Dental  Clinic In Kolkata - Dentity Dental",
      text: "Dentity Dental Is an ISO Certified Brand & Awarded by the Governor of West Bengal. Multiple times, this brand has ranked in the number 1 position according to the Times of India Health Survey. Dentity Dental Is the Best & Affordable Multi-speciality Chain Dental Clinic, which provides all kinds of Oral, Dental & Facial Treatments in a Highly Expertised Way.Every Tooth in a Person Is More Valuable Than a Diamond. <br/> <br/> Smile is the first thing people notice when they meet one another. Smile is something that can change the world. So in our Dentity Dental Clinics, we create a confident smile for you. We the Dentity Dental – a chain of multispeciality Dental Clinics in Kolkata (Tollygunge Netajinagar, Tollyhunge Suryanagar, Sonarpur, Dumdum Cantonment, VIP Road Teghoria, Rajarhat-Teghoria-Newtown-Chinapark, Gariahat, Beleghata) & various places of West Bengal (Dental Mid World, Midnapur) already served an uncountable number of happy patients with our ultramodern equipment, latest advanced technology, and most importantly, highly skilled specialist dentists.",
    },
    {
      heading:
        "Why Choose Dentity Dental- The trusted Smile Partners For you in Kolkata ",
      text: "We, at Dentity Dental, are committed to bringing back smiles to all those who have been covering it due to their dental woes. Our range of comprehensive services and experts ensure that everything dental is under one roof here at Dentity Dentals.  <br/> <br/>  <strong>Experience and Skill that sets us apart: </strong> We hold the expertise to cater to the dentistry needs of your entire family due to our wholesome experience in the field. Our skills truly make us the people's favorites!  <br/> <strong>Multispecialty brings more to YOU!:</strong> Our multispecialty clinic ensures that we are the one-stop solution for everything dental that you might ever need under the sun!  <br/> <strong>360-degree Dental Solutions:</strong> Our chain of dental clinics in Kolkata further ensures that no matter your location, we are closer to you than ever before!  <br/> <strong>Worth Your Trust:</strong> Awarded as a trusted Dental clinic by the Governor of the state and the Times of India Health survey, we are an ISO-certified brand eligible for all your faith! <br/> <strong> Care and Warmth: </strong> Every staff and expert at the clinic is meant to make your journey smoother! We bet you will end up making friends by the time you exit the clinic, we are that warm ! <br/> <strong> Multiple Locations: </strong> Your dental woes should not travel a distance! This is why we have multiple branches in locations such as Tollygunge, Netajinagar, Suryanagar, Teghoria, Beleghata and more. Making it convenient for you to easily connect and visit. <br/> <strong> Happy Patients, Real Smiles: </strong> We are proud to have real patient testimonials that showcase our quality of service. Happy patients bring us more recommendations and this is how we are now the best dental clinic in Kolkata!",
    },
  ];
  return (
    <div className="flex flex-col gap-4 md:gap-8 xlg:gap-16 xl:p-16 lg:p-8 p-4">
      <section className="flex flex-col md:flex-row items-stretch gap-4 xlg:gap-8">
      <section className="flex flex-col gap-6 w-full md:w-[50%]">
          {/* Top Image Container */}
          <div className="flex flex-col gap-3 flex-1">
            <div className="relative w-full aspect-[720/582] xxl:aspect-[500/400] md:h-full overflow-hidden">
              <Image
                src="https://res.cloudinary.com/dfhfdirbu/image/upload/v1772004148/toi-about_uit1xx.avif"
                alt="Times of India Health Survey Ranking"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw" 
                className="rounded-sm object-cover"
              />
            </div>
            <h2 className="lg:text-xl text-base font-semibold text-site-text">
              Times of India Health Survey Ranking 2023
            </h2>
          </div>

         
          <div className="flex flex-col gap-2 flex-1">
             <div className="relative aspect-square lg:aspect-auto w-full h-full ">
                <Image
                  src="https://res.cloudinary.com/dfhfdirbu/image/upload/v1772693201/image_1_xsgdhe.avif"
                  alt="Award image 1"
                  fill
                  loading="lazy"
                  className="rounded-sm  object-cover w-full"
                />
             </div>
          </div>
        </section>
        <section
          className="md:w-[50%] w-full flex flex-col gap-3 lg:gap-5 xlg:gap-8"
        >
          {aboutcontent.map((item, index) => (
            <div className="flex flex-col gap-2 xlg:gap-5" key={index}>
              <h1 className="text-site-main text-xl lg:text-2xl xlg:text-3xl xxl:text-4xl font-semibold">
                {item.heading}
              </h1>
              <section
                className="text-site-typo text-sm lg:text-sm/[21px] xlg:text-base/[26px] xxl:text-xl/[28px]"
                dangerouslySetInnerHTML={{ __html: item.text }}
                suppressHydrationWarning
              ></section>
            </div>
          ))}
             <section className="flex flex-col gap-4 xlg:gap-8">
        <section className=" w-full">
          <p className="lg:text-base xlg:text-[17px]/[25px] md:text-sm xxl:text-2xl/[30px] text-site-typo text-xs/[17px]">
            Dr. Saikat Paul &#40;Consultant Oral, Dental Surgeon & Maxillofacial
            Prosthodontist Founder cum Owner of Dentity Dental &#40;ISO
            certified, Best multispeciality dental chain clinic in Kolkata &
            West Bengal as per Times Of India Health Survey&#41; Receiving Award
            from honourable governor &#40;Shri C.V. Ananda Bose&#41; of West
            Bengal for professional and academic excellance in Health Care
            Sector.
          </p>
        </section>
        <section className=" w-full">
          <WhyChooseUsSection />
        </section>
      </section>
        </section>
      </section>
   
    </div>
  );
};

export default AboutSection;
