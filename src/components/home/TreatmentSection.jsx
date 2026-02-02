import React from "react";
import BranchServiceCard from "../global/BranchServiceCard";

const TreatmentSection = () => {
  const Treatments = [
    {
      label: "Dental Implant",
      href: "/treatments/dental-implant",
      icon: "/images/serviceicon.svg",
      imgsrc: "/images/dental-implant.jpg",
      desc: "Particularly aimed at patients requiring a permanent fixed treatment to replace missing teeth when dental prostheses like dentures or fixed dental bridges cannot be employed.",
    },
    {
      label: "Cosmetic Dentistry",
      href: "/treatments/cosmetic-intraoral-surgery",
      icon: "/images/serviceicon.svg",
      imgsrc: "/images/Cosmetic-Dentistry.jpg",
      desc: "Designed for beautifying teeth and also for the health of the oral cavity. They include several aesthetic oral surgery procedures that help offer an attractive smile.",
    },
    {
      label: "Root Canal",
      href: "/treatments/root-canal",
      icon: "/images/serviceicon.svg",
      imgsrc: "/images/root-canal.jpg",
      desc: "Root canal therapy designed to restore decayed or infected teeth, relieve pain, and maintain your natural teeth where possible.",
    },
    {
      label: "Dentures",
      href: "/treatments/removable-denture-cast-partial-denture-and-flexible-partial-denture",
      icon: "/images/serviceicon.svg",
      imgsrc: "/images/Dentures.jpg",
      desc: "Dental prosthetic work involves the development of indeed very life-like artificial teeth while enhancing patient comfort, effectiveness, and aesthetics.",
    },
    {
      label: "Oral Surgery",
      href: "/treatments/oral-and-maxillofacial-surgery",
      icon: "/images/serviceicon.svg",
      imgsrc: "/images/oral-surgery.jpg",
      desc: "Tailored surgery-oriented treatment for various dental issues, dental facial surgery, maxillofacial surgery, and orthognathic surgery are some of the nuanced solutions offered by our staff.",
    },
    {
      label: "Geriatric Dentistry",
      href: "/treatments/geriatric-dentistry",
      icon: "/images/serviceicon.svg",
      imgsrc: "/images/General-Dentistry.jpg",
      desc: "Special care for elderly patients where treatment options are given based on what may affect the teeth of elderly patients.",
    },
  ];
  return (
    <section className="xl:p-16 lg:p-8 p-4 flex flex-col gap-4">
      <section className="flex flex-col gap-1">
        <h1 className="md:text-3xl text-xl font-semibold text-site-main">
          See Our Most Popular Services
        </h1>
        <p className="md:text-lg text-xs text-site-typo">
          EVERY TOOTH IN A PERSON IS MORE VALUABLE THAN A DIAMOND. Smile is the
          first thing people notice when they meet one another. Smile is
          something that can change the world. So in our DENTITY DENTAL Clinics
          we create a confident smile for you.
        </p>
      </section>
      <section className="w-full grid md:grid-cols-3 grid-cols-2 gap-2 lg:gap-4">
        {Treatments.slice(0, 6).map((item, index) => (
          <div key={index} className="">
            <BranchServiceCard content={item} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default TreatmentSection;
