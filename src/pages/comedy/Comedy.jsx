import React, { useEffect, useState } from "react";
import comedyJson from "./json/comedy.json";
import Foto from "../../assets/images/heatt1.jpg";
import "./Comedy.scss";
import FilmList from "../../components/filmList/FilmList";
import Banner from "../../components/banner/Banner";
const Comedy = () => {
  const url = window.location.href;
  const [pathEnd, setPathEnd] = useState(null);

  useEffect(() => {
    const pathIndex = url.lastIndexOf("/");
    setPathEnd(url.slice(pathIndex + 1));
    console.log("pathEnd", pathEnd);
  }, [url]);
  return (
    <>
      <Banner
        id="T13"
        name="The Heat "
        desc="       An uptight FBI Special Agent is paired with a foul-mouthed Boston cop to take down a ruthless drug lord"
        imbd="IMDb 7/10"
        img={Foto}
      />

      <div className=" main comedy-container">
        <h1 className="title">Comedy MoFieS </h1>

        {pathEnd === "film-comedy" ? (
          <FilmList products={comedyJson.filmComedy} />
        ) : (
          <FilmList products={comedyJson.serialComedy} />
        )}
        <div className="coming-soon-container">
          <h1 className="title">Coming soon</h1>
          <FilmList products={comedyJson["title"]} />
        </div>
      </div>
    </>
  );
};

export default Comedy;
