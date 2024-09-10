import React from "react";
import "./Anime.scss";
import animeJson from "./json/anime.json";
import FilmList from "../../components/filmList/FilmList";
import Banner from "../../components/banner/Banner";

const Anime = () => {
  return (
    <>
      <Banner
        id="N13"
        name="Death Note "
        desc="      An intelligent high school student goes on a secret crusade to
            eliminate criminals from the world after discovering a notebook
            capable of killing anyone whose name is written into it."
        imbd="IMDb 9/10 "
        img="https://occ-0-8407-448.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABboqDwV98d-QpA6biauPIcgNeH_c439AXzsln9B1k2Ol9F36YokyOE42ORtSKEx-CiqNsiC-6Dhm4-mFCK1q9OZRJFa9rG_CUvHe.jpg?r=685"
      />

      <div className=" main anime-container">
        <div className="title">
          <h1>Anime MoFieS </h1>
        </div>

        <FilmList products={animeJson.anime} />
        <div className="coming-soon-container">
          <div className="title">
            <h1>Coming soon</h1>
            <FilmList products={animeJson["title"]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Anime;
