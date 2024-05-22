import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";
import { useSelector } from "react-redux";
import moment from "moment";
import Divider from "../components/Divider";
import useFetch from "../hooks/useFetch";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import VideoPlay from "../components/VideoPlay";

const DetailsPage = () => {
  const params = useParams();
  const imageURL = useSelector((state) => state.movieoData.imageUrl);
  const { data } = useFetchDetails(`/${params?.explore}/${params?.id}`);
  const { data: castData } = useFetchDetails(
    `/${params?.explore}/${params?.id}/credits`
  );
  const { data: similarData } = useFetch(
    `/${params?.explore}/${params?.id}/similar`
  );
  const { data: recommendationData } = useFetch(
    `/${params?.explore}/${params?.id}/recommendations`
  );

  const [playVideo, setPlayVideo] = useState(false);
  const [playVideoId, setPlayVideoId] = useState("");

  const handlePlayVideo = (data) => {
    setPlayVideoId(data.id);
    setPlayVideo(true);
  };

  // console.log("data", data);
  // console.log("star cast", castData);

  const duration = (data?.runtime / 60)?.toFixed(1)?.split(".");
  const writer = castData?.crew
    ?.filter((el) => el?.job === "Writer" || "")
    ?.map((el) => el?.name)
    ?.join(", ");

  console.log(writer);

  return (
    <div>
      <div className="w-full h-[500px] relative hidden lg:block">
        <div className="w-full h-full">
          <img
            src={imageURL + data?.backdrop_path}
            className="h-full w-full object-cover"
            alt="Backdrop"
          />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-3 py-16 lg:py-0 flex flex-col lg:flex-row gap-5 lg:gap-10">
        <div className="relative mx-auto lg:-mt-28 lg:mx-0 w-fit min-w-60">
          <img
            src={imageURL + data?.poster_path}
            className="h-80 w-60 object-cover rounded"
            alt="Poster"
          />
          <button
            onClick={() => handlePlayVideo(data)}
            className="mt-3 w-full py-2 px-4 text-center bg-white text-black rounded font-bold text-lg hover:bg-gradient-to-l from-red-500 to-orange-500 hover:scale-105 transition-all"
          >
            Fragmanı Oynat
          </button>
        </div>

        <div>
          <h2 className="text-2xl lg:text-4xl font-bold text-white">
            {data?.title || data?.name}
          </h2>
          <p className="text-neutral-400">{data?.tagline}</p>

          <Divider />

          <div className="flex items-center  gap-3">
            <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
            <span>|</span>
            <p>İzlenme : {Number(data?.vote_count)}</p>
            <span>|</span>
            <p>
              Süre : {duration[0]}Saat {duration[1]}Dakika
            </p>
          </div>

          <Divider />

          <div>
            <h3 className="text-xl font-bold text-white mb-1">Genel Bakış</h3>
            <p>{data?.overview}</p>

            <Divider />

            <div className="flex items-cente text-center my-3 gap-4">
              <p>Durum : {data?.status}</p>
              <span>|</span>
              <p>
                Çıkış Tarihi :{" "}
                {moment(data?.release_date).format("MMMM Do YYYY")}
              </p>
              <span>|</span>
              <p>Gelir : {data?.revenue} $</p>
            </div>

            <Divider />

            <div>
              <p>
                <span className="text-white">Yönetmen : </span>
                {castData?.crew[0]?.name}
              </p>

              <Divider />

              <p>
                <span className="text-white">Yazar : </span>
                {writer}
              </p>
            </div>

            <Divider />

            <h2 className="font-bold text-lg">Oyuncular :</h2>
            <div className="grid grid-cols-[repeat(auto-fit,96px)] gap-5">
              {castData?.cast
                ?.filter((el) => el?.profile_path)
                .map((starCast, index) => {
                  return (
                    <div key={starCast.id || index}>
                      <div>
                        <img
                          src={imageURL + starCast?.profile_path}
                          className="w-24 h-24 object-cover rounded-full"
                        />
                        <p className="font-bold text-center text-sm text-neutral-400">
                          {starCast.name}
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <HorizontalScrollCard
          data={similarData}
          heading={"Benzer İçerikler"}
          media_type={params?.explore}
        />
        <HorizontalScrollCard
          data={recommendationData}
          heading={"Tavsiye Edilenler"}
          media_type={params?.explore}
        />
      </div>

      {playVideo && (
        <VideoPlay
          data={playVideoId}
          close={() => setPlayVideo(false)}
          media_type={params.explore}
        />
      )}
    </div>
  );
};

export default DetailsPage;
