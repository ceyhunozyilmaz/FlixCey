import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const Card = ({ data, trending, index }) => {
  const imageUrl = useSelector((state) => state.movieoData.imageUrl);
  return (
    <div className="w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded relative">
      <img src={imageUrl + data?.poster_path} />

      <div className="absolute top-4">
        {trending && (
          <div className="py-1 px-4 backdrop-blur-3xl rounded-r-full bg-black/60 overflow-hidden">
            #{index} Trend
          </div>
        )}
      </div>
      <div className="absolute bottom-0 h-14 backdrop-blur-3xl w-full bg-black/60 p-2">
        <h2 className="text-ellipsis line-clamp-1 text-lg font-semibold">
          {data?.title || data?.name}
        </h2>
        <div className="text-sm text-neutral-400 flex justify-between items-center">
          <p>{moment(data.release_date).format("MMM Do YYYY")}</p>
          <p className="bg-black px-1 rounded-full text-xs text-white">
            Rating: {Number(data.vote_average).toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
