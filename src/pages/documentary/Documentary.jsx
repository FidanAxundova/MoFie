import React, { useEffect, useState } from "react";
import documentaryJson from "./json/documentary.json";
import "./Documentary.scss";
import FilmList from "../../components/filmList/FilmList";
import Banner from "../../components/banner/Banner";
const documentary = () => {
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
        id="A13"
        name="Amy"
        desc="        my Jade Winehouse was born on September 14, 1983 in Enfield, London, England and raised in Southgate, London, England to Janis Holly Collins (née Seaton), a pharmacist & Mitchell Winehouse, a window panel installer and taxi driver."
        imbd="IMDb 7/10 "
        img="https://www.film.ru/sites/default/files/styles/epsa_685x385/public/trailers_frame/amy.jpg"
      />
      {/* <div className="documentary-banner">
        <div className="text">
          <h2> </h2>
          <span> </span>
          <p>
        
          </p>
          <button>Add to Favorite</button>
        </div>

        <div className="documentary-banner-overlay"></div>
      </div>
     */}
      <div className=" main documentary-container">
        <h1 className="title"> Documentary MoFieS </h1>

        {pathEnd === "film-documentary" ? (
          <FilmList products={documentaryJson.filmDocumentary} />
        ) : (
          <FilmList products={documentaryJson.serialDocumentary} />
        )}

        <div className="coming-soon-container">
          <h1 className="title">Coming soon</h1>
          <FilmList products={documentaryJson["title"]} />
        </div>
      </div>
    </>
  );
};

export default documentary;
