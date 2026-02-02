import Image from "next/image";

export default function Banner() {
  const slides = [
    {
      imageSrc: "/images/dd-slider.avif",
    },
  ];
  return (
    <div className="">
      {slides.map((slide, index) => (
        <div className="carousel-item relative rounded-lg" key={index}>
          <div className="w-full relative ">
            <Image
              src={slide.imageSrc}
              loading="lazy"
              alt="banner"
              width={4320}
              height={1959}
              className="w-full resize sm:h-auto md:h-auto "
            />
          </div>
        </div>
      ))}
    </div>
  );
}
