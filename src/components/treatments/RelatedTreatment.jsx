import Link from "next/link";
import Image from "next/image";

export default function RelatedTreatment({ relatedTreatments }) {
  return (
    <section className="flex flex-col relative gap-4 lg:gap-9 p-4 lg:p-8 xl:p-16">
      <h2 className="text-lg md:text-3xl font-medium text-site-main">
        Related Treatments
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedTreatments.length > 0 &&
          relatedTreatments.map((treatment) => (
            <Link
              key={treatment.treatment_id}
              href={`/treatments/${treatment.slug}`}
              className="h-full cursor-pointer group"
            >
              <div className="h-full border rounded-lg overflow-hidden hover:shadow-lg transition">
                <Image
                  src={treatment.treatmentImg?.secure_url}
                  alt={treatment.treatmentName}
                  width={400}
                  height={250}
                  className="w-full h-[180px] object-cover"
                />

                <div className="p-4 flex flex-col justify-center items-center gap-4">
                  <h3 className="text-lg font-medium text-site-main group-hover:text-blue-600 transition">
                    {treatment.treatmentName}
                  </h3>
                  <p className="text-center" dangerouslySetInnerHTML={{__html: treatment.description.slice(0, 400)}} suppressHydrationWarning></p>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
}
