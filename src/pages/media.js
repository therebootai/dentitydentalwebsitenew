import SubBanner from "@/components/global/SubBanner";
import WebsiteTemplate from "@/templates/WebsiteTemplate";
import React from "react";

const Media = () => {
  const medias = [
    "ZeF1jL3tADg?si=k-FXrmc0Mz",
    "bzFhgE_1Grg?si=Xk6FDEiCfWX52Ycf",
    "EezkH4zOE_E?si=FeDsJLyMsJyfhcbh",
    "LL-TtcCAXfA?si=0xFhOkVTfYUrLH61",
    "1K1lnRqqfDU?si=cI_Tv0S_OM1CK0G_",
    "FYD0wJFBKNI?si=bInkidfhfOGherPS",
  ];
  return (
    <WebsiteTemplate
      title={"Dentity Dental Media Coverage | Highlights & Updates"}
      description={
        "Stay updated with the latest media coverage of Dentity Dental. See how we’re making headlines with our award-winning dental care and state-of-the-art services."
      }
    >
      <SubBanner heading={"Media"} />
      <div className="xl:p-16 lg:p-8 p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xlg:gap-8">
          {medias.map((item, index) => (
            <div key={index} className="">
              <iframe
                src={`https://www.youtube.com/embed/${item}`}
                title="YouTube video player"
                className="!h-[15rem] w-full shadow-custom rounded-sm"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </WebsiteTemplate>
  );
};

export default Media;
