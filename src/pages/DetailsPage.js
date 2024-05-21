import React from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";

const DetailsPage = () => {
  const params = useParams();
  const imageUrl = useSelector((state) => state.movieoData.imageUrl);
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );

  // console.log(data);

  return (
    <div>
      <div className="w-full h-[280px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={imageUrl + data?.backdrop_path}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-3">
        <div className="-mt-28 relative">
          <img
            src={imageUrl + data?.poster_path}
            className="h-80 w-60 object-cover rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
