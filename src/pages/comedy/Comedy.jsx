import React, { useEffect, useState } from "react";
import comedyJson from "./json/comedy.json";
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
        img="https://m.media-amazon.com/images/S/pv-target-images/949e17bbc287c65b1442a4963dae172b5b152d904a01fc2aaae6ba74c46029c7.jpg"
      />

      <div className=" main comedy-container">
        <div className="title">
          <h1>Comedy MoFieS </h1>
        </div>

        {pathEnd === "film-comedy" ? (
          <FilmList products={comedyJson.filmComedy} />
        ) : (
          <FilmList products={comedyJson.serialComedy} />
        )}
        <div className="coming-soon-container">
          <div className="title">
            <h1>Coming soon</h1>
            <FilmList products={comedyJson["title"]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Comedy;
