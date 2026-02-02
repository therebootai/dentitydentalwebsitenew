export default function SubBanner({ heading }) {
  return (
    <section className="bg-[url('/images/dd-subheader.jpg')] bg-cover bg-center">
      <div className="h-40 lg:h-[18rem] flex items-center justify-center">
        <h1 className="text-2xl lg:text-4xl font-medium text-center text-white">
          {heading}
        </h1>
      </div>
    </section>
  );
}
