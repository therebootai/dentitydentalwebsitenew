import EnquiryBox from "../global/EnquiryBox";
import Image from "next/image";
import useElementHeight from "@/hooks/useElementHeight";

export default function HomeEnquiry() {
  const [contentHeight, rightContentRef] = useElementHeight();

  return (
    <section className="flex flex-col relative md:flex-row gap-4 lg:gap-4 p-4 lg:p-8 xl:p-16">
      <div
        className="md:w-[50%] w-full flex items-start relative overflow-hidden"
        style={{ height: `${contentHeight}px` }}
      >
        <Image
          src="https://res.cloudinary.com/dfhfdirbu/image/upload/v1772000510/dd-toi-article_xg23me.avif"
          alt="times of india article"
          width={1320}
          height={2072}
          className="w-full h-full object-cover rounded-md blur-[2px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="https://res.cloudinary.com/dfhfdirbu/image/upload/v1772004148/newspaper-cut-out_ztx5uv.avif"
            alt="times of india article 2"
            width={720}
            height={1130}
            className="object-cover w-full"
          />
        </div>
      </div>
      <div ref={rightContentRef} className="md:w-[50%] w-full">
        <EnquiryBox />
      </div>
    </section>
  );
}
