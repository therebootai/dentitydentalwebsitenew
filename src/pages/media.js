import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import { fetchGallerys } from "@/lib/api/gallery";
import { getGlobalData } from "@/lib/staticData";
import Image from "next/image";
import { useRouter } from "next/router";

export async function getServerSideProps(context) {
  const page = Number(context.query.page) || 1;
  const domain = "dentitydental.in";

  const [res, global] = await Promise.all([
    fetchGallerys({
      page,
      limit: 10,
      domain,
    }),
    getGlobalData(),
  ]);

  return {
    props: {
      gallerys: res?.data || [],
      pagination: res?.paginations || null,
      currentPage: page,
      treatments: global.treatments || [],
    },
  };
}

const Media = ({ gallerys, pagination, currentPage, treatments }) => {
  const router = useRouter();
  const totalPages = pagination?.totalPages || 1;

  const goToPage = (page) => {
    router.push(`/media?page=${page}`);
  };

  return (
    <WebsiteTemplate
      title="Dentity Dental Media Coverage | Highlights & Updates"
      description="Stay updated with the latest media coverage of Dentity Dental."
      treatments={treatments}
    >
      <SubBanner heading="Media" />

      <div className="xl:p-16 lg:p-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xlg:gap-8">
          {(gallerys || [])
            .filter((item) => item?.status)
            .map((item) => (
              <div
                key={item.image_id}
                className="w-full h-auto rounded-lg overflow-hidden"
              >
                <Image
                  src={item.image?.secure_url}
                  alt={item.image_name || "Media Image"}
                  width={500}
                  height={300}
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-8">
            <button
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Prev
            </button>

            {Array.from({ length: totalPages }).map((_, index) => {
              const page = index + 1;
              return (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`px-4 py-2 rounded ${
                    currentPage === page
                      ? "bg-site-main text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </WebsiteTemplate>
  );
};

export default Media;