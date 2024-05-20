import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieoData.bannerData);
  const imageUrl = useSelector((state) => state.movieoData.imageUrl);
  const [curretImage, setCurrentImage] = useState(0);
  // console.log("banner home", bannerData);

  // BUTTON FUNCTION
  const handlePrevious = () => {
    if (curretImage > 1) {
      setCurrentImage((preve) => preve - 1);
    }
  };
  const handleNext = () => {
    if (curretImage < bannerData.length - 1) {
      setCurrentImage((preve) => preve + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (curretImage < bannerData.length - 1) {
        handleNext();
      } else {
        setCurrentImage(0);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [bannerData, imageUrl]);

  return (
    <section className="w-full h-full">
      <div className="flex min-h-full max-h-[95vh] overflow-hidden">
        {bannerData.map((data, index) => {
          return (
            <div
              key={data.id + "bannerHome" + index}
              className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative transition-all group"
              style={{ transform: `translateX(-${curretImage * 100}%)` }}
            >
              <div className="w-full h-full">
                <img
                  src={imageUrl + data.backdrop_path}
                  className="h-full w-full object-cover"
                />
              </div>
              {/* BUTTON NEXT AND PREVIOUS IMAGE */}
              <div className="absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex">
                <button
                  onClick={handlePrevious}
                  className="bg-white p-1 rounded-full text-xl z-10 text-black"
                >
                  <FaAngleLeft />
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white p-1 rounded-full text-xl z-10 text-black"
                >
                  <FaAngleRight />
                </button>
              </div>
              {/* BG-GRADINT IMAGE */}
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900"></div>
              {/* DATA DETAİLS */}
              <div className="container mx-auto">
                <div className="w-full absolute bottom-0 max-w-md px-3">
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">
                    {data?.title || data?.name}
                  </h2>
                  <p className="text-ellipsis line-clamp-3 my-2">
                    {data.overview}
                  </p>
                  <div className="flex items-center gap-4">
                    <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>
                    <span>|</span>
                    <p>İzlenme Sayısı: {Number(data.popularity).toFixed(0)}</p>
                  </div>
                  <button className="bg-white text-black font-bold px-4 py-2 rounded mt-4  hover:bg-gradient-to-l from-red-600 to-orange-500 shadow-md transition-all hover:scale-105">
                    Fragmanı İzle
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BannerHome;
