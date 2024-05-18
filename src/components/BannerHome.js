import React from "react";
import { useSelector } from "react-redux";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieoData.bannerData);
  const imageUrl = useSelector((state) => state.movieoData.imageUrl);
  console.log("banner home", bannerData);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh]">
        {bannerData.map((data, index) => {
          return (
            <div
              key={index}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative"
            >
              <div className="w-full h-full">
                <img
                  src={imageUrl + data.backdrop_path}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900 to-transparent"></div>
              <div className="container mx-auto absolute bottom-0 max-w-md">
                <h2 className="font-bold text-3xl">{data.title}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
