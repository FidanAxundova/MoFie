import React from "react";
import "./Cartoon.scss";
import cartoonJson from "./json/cartoon.json";
import FilmList from "../../components/filmList/FilmList";
import Card from "../../components/card/Card";
import Banner from "../../components/banner/Banner";
const Cartoon = () => {
  return (
    <>
      <Banner
        id="R13"
        name="Ratatouille "
        desc="    A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant."
        imbd="IMDb 9/10 "
        img="https://s.afisha.ru/mediastorage/30/78/b32bfc65b70a4f11a74ac39d7830.jpg"
      />

      <div className=" main cartoon-container">
        <h1 className="title">Cartoon MoFieS </h1>

        <FilmList products={cartoonJson.cartoon} />
        <div className="coming-soon-container">
          <h1 className="title">Coming soon</h1>
          <FilmList products={cartoonJson["title"]} />
        </div>
      </div>
    </>
  );
};

export default Cartoon;
