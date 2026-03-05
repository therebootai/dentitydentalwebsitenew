import Image from "next/image";

export default function Banner({ sliders }) {
  const firstSlide = sliders?.find((slide) => slide.status);
  if (!firstSlide) return null;

  const optimizedUrl = firstSlide.slider_image.secure_url.includes("res.cloudinary.com")
    ? firstSlide.slider_image.secure_url.replace(
        "/image/upload/",
        "/image/upload/f_auto,q_auto,w_1440/"
      )
    : firstSlide.slider_image.secure_url;

  return (
    <section aria-label="Hero Banner">
      <div className="w-full h-auto py-4 md:py-0">
        <Image
          src={optimizedUrl}
          alt={firstSlide.slider_name || "Dentity Dental - Best Dental Clinic Kolkata"}
          width={1440}
          height={500}
          priority
          fetchPriority="high"
          loading="eager"
          unoptimized
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1440px"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}