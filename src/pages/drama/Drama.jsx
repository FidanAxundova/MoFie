import React, { useEffect, useState } from "react";
import dramaJson from "./json/drama.json";
import "./Drama.scss";
import FilmList from "../../components/filmList/FilmList";
import Banner from "../../components/banner/Banner";

const Drama = () => {
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
        id="G13"
        name="Green Mile "
        desc="    A tale set on death row, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the lead guard, Paul Edgecombe, recognizes John's gift, he tries to help stave off the condemned man's execution."
        imbd="IMDb 8/10 "
        img="https://blogscdn.thehut.net/app/uploads/sites/39/2019/12/GREEN-1_1575975387.jpg"
      />
      <div className="main drama-container">
        <div className="title">
          <h1>Drama MoFieS </h1>
        </div>
        {pathEnd === "film-drama" ? (
          <FilmList products={dramaJson.filmDrama} />
        ) : (
          <FilmList products={dramaJson.serialDrama} />
        )}
        <div className="coming-soon-container">
          <div className="title">
            <h1>Coming soon</h1>
            <FilmList products={dramaJson["title"]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Drama;
