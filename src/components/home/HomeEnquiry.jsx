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
          src="/images/dd-toi-article.avif"
          alt="times of india article"
          width={636}
          height={540}
          className="w-full h-full object-cover rounded-md blur-[2px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/images/newspaper-cut-out.avif"
            alt="times of india article 2"
            width={540}
            height={540}
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
