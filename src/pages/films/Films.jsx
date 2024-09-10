import React, { useEffect, useState } from "react";
import "./Films.scss";
import filmsJson from "./json/films.json";
import FilmList from "../../components/filmList/FilmList";
import Card from "../../components/card/Card";
import Banner from "../../components/banner/Banner";

const Films = () => {
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
        id="V13"
        name="Venom "
        desc="       A tale set on death row, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the lead guard, Paul Edgecombe, recognizes John's gift, he tries to help stave off the condemned man's execution."
        imbd="IMDb 9/10 "
        img="https://www.afisha.uz/uploads/media/2023/06/059c28fc53c60d307dcad29f7c13095b.jpg"
      />
      {/* <div className="films-banner">
        <div className="text">
          <h2>Venom </h2>
          <span>IMDb 9/10 </span>
          <p>
        
          </p>
          <button>Add to Favorite</button>
        </div>

        <div className="films-banner-overlay"></div>
      </div> */}
      <div>
        <div className=" main films-container">
          {/* <div className="title"> */}
          <h1 className="title">Best Films </h1>
          {/* </div> */}
          <FilmList products={filmsJson.films} />

          <div className="coming-soon-container">
            <h1 className="title">Coming soon</h1>
            <FilmList products={filmsJson["title"]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Films;
