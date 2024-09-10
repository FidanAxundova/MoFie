import React, { useEffect, useState } from "react";
import actionJson from "./json/action.json";
import "./Action.scss";
import FilmList from "../../components/filmList/FilmList";
import Banner from "../../components/banner/Banner";
const Action = () => {
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
        id="E13"
        name="Extraction"
        desc="        After barely surviving his grievous wounds from his mission in Dhaka, Bangladesh, Tyler Rake is back, and his team is ready to take on their next mission."
        imbd="IMDb 7/10 "
        img="https://images.ctfassets.net/f4exvld7r7c2/2GoyXh8TbvL7J2cG2swJlN/a02b0f99e4370090a8e49fc630e27ac9/extraction_2__3_.jpg"
      />

      {/* <div className="banner">
        <div className="text">
          <h2> </h2>
          <span>IMDb 7/10 </span>
          <p>
       
          </p>
          <button>Add to Favorite</button>
        </div>

        <div className="banner-overlay"></div>
      </div> */}

      <div className="main">
        <h1 className=" title">Action MoFieS </h1>

        {pathEnd === "film-action" ? (
          <FilmList products={actionJson.filmAction} />
        ) : (
          <FilmList products={actionJson.serialAction} />
        )}
        <div className="coming-soon-container">
          <h1 className="title">Coming soon</h1>
          <FilmList products={actionJson["title"]} />
        </div>
      </div>
    </>
  );
};

export default Action;
