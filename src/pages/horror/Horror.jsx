import React, { useEffect, useState } from "react";
import "./Horror.scss";
// import taroo from "../../assets/images/taroo.jpeg"
// import underparis from "../../assets/images/underparis.jpeg"\
// import horro from "../../assets/images/horro.jpeg";
import horrorJson from "./json/horror.json";
import FilmList from "../../components/filmList/FilmList";
import Card from "../../components/card/Card";
import Banner from "../../components/banner/Banner";

const Horror = () => {
  const url = window.location.href;
  const [pathEnd, setPathEnd] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const pathIndex = url.lastIndexOf("/");
    setPathEnd(url.slice(pathIndex + 1));
    console.log("pathEnd", pathEnd);
  }, [url]);

  // function openModal() {
  //   showModal ? setShowModal(false) : setShowModal(true);

  //   console.log("show", showModal);
  // }

  return (
    <>
      <Banner
        id="Evi13"
        name="Evil Dead Rise "
        desc="       A twisted tale of two estranged sisters whose reunion is cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable."
        imbd="IMDb 7/10 "
        img="https://media.gq.com/photos/6442f6a61fa990bc7018e06c/master/pass/MCDEVDE_WB004.jpeg"
      />
      <div>
        <div className="horror-container main">
          <h1 className="h-title">
            {" "}
            Horror MoFieS
            <span className="drop"></span>
            <span className="drop"></span>
            <span className="drop"></span>
            <span className="drop"></span>
            <span className="drop"></span>
            <span className="drop"></span>
            <span className="drop"></span>
            <span className="drop"></span>
          </h1>
          {pathEnd === "film-horror" ? (
            <FilmList products={horrorJson.filmHorror} />
          ) : (
            <FilmList products={horrorJson.serialHorror} />
          )}

          <div>
            <h1 className="h-title">Coming soon </h1>
            <FilmList products={horrorJson["title"]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Horror;
