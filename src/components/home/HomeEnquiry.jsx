import dynamic from "next/dynamic";
import Image from "next/image";
const EnquiryBox = dynamic(() => import("../global/EnquiryBox"), { ssr: false });


export default function HomeEnquiry() {
  return (
    <section className="flex flex-col relative md:flex-row gap-4 items-stretch lg:gap-4 p-4 lg:p-8 xl:p-16">

      <div className="flex-1 w-full relative min-h-[400px]">
        <Image
          src="https://res.cloudinary.com/dfhfdirbu/image/upload/v1772004148/newspaper-cut-out_ztx5uv.avif"
          alt="Dentity Dental Times of India Newspaper Coverage"
          fill
          loading="lazy"
          fetchPriority="low"
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex-1 w-full">
        <EnquiryBox />
      </div>

    </section>
  );
}