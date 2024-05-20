import React, { useEffect, useState } from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const trendingData = useSelector((state) => state.movieoData.bannerData);
  const { data: nowPlayingData } = useFetch("/movie/now_playing");
  const { data: popularSeries } = useFetch("/tv/popular");
  const { data: upcomingData } = useFetch("/movie/upcoming");
  const { data: topRatedSeries } = useFetch("/tv/top_rated");

  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard
        data={trendingData}
        heading={"Trend"}
        trending={true}
      />
      <HorizontalScrollCard data={popularSeries} heading={"Popüler Diziler"} />
      <HorizontalScrollCard data={upcomingData} heading={"Yakında Eklenecek"} />
      <HorizontalScrollCard
        data={topRatedSeries}
        heading={"En Beğenilen Diziler"}
      />
      <HorizontalScrollCard data={nowPlayingData} heading={"Şu Anda İzlenen"} />
    </div>
  );
};

export default Home;
