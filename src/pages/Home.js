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
      <HorizontalScrollCard
        data={popularSeries}
        heading={"Popüler Diziler"}
        media_type={"tv"}
      />
      <HorizontalScrollCard
        data={upcomingData}
        heading={"Yakında Eklenecek"}
        media_type={"tv" && "movie"}
      />
      <HorizontalScrollCard
        data={topRatedSeries}
        heading={"En Beğenilen Diziler"}
        media_type={"tv"}
      />
      <HorizontalScrollCard
        data={nowPlayingData}
        heading={"Şu Anda İzlenen"}
        media_type={"movie"}
      />
    </div>
  );
};

export default Home;
