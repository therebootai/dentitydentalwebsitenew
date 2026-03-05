import Image from "next/image";

const experience = [
  { icon: "/acknowledgement/iso-globe.svg", name: "ISO 9001:2015 Certified" },
  { icon: "/acknowledgement/toi.svg", name: "Top Dental Clinic in WB by Times of India Health Survey 2023" },
  { icon: "/acknowledgement/star.svg", name: "Top Dental Clinic in West Bengal by Honorable Governor of WB" },
  { icon: "/acknowledgement/municiplicity.svg", name: "Multiplicity Dental Clinic Chain in WB" },
  { icon: "/acknowledgement/denatal-clinic.svg", name: "Most Affordable Dental Clinic Chain in Kolkata & WB" },
];

export default function CertifiedSection() {
  return (
    <section className="xl:px-16 lg:px-8 px-4 py-10 bg-gray-50">
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

        {experience.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="relative w-12 h-12 md:w-16 md:h-16 mb-3">
              <Image
                src={item.icon}
                alt={item.name}
                fill
                loading="lazy"
                className="object-contain"
              />
            </div>

            <p className="text-xs md:text-sm font-medium text-gray-700 leading-snug">
              {item.name}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}