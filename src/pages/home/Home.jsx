import React, { useContext, useEffect } from "react";
import "./Home.scss";
import homeJson from "./json/home.json";
import FilmList from "../../components/filmList/FilmList";
import Banner from "../../components/banner/Banner";
import { FavContext } from "../../App";

const Home = () => {
  const context = useContext(FavContext);
  const url = window.location.href;

  useEffect(() => {
    const pathIndex = url.lastIndexOf("/");
    if (url.slice(pathIndex + 1) === "#favorite") {
      // const a = React.createElement("a", { href: "#favorite" });
      const a = document.createElement("a");
      a.setAttribute("style", "display: none");
      document.body.appendChild(a);
      2;
      a.href = "#favorite";
      a.click();
      document.body.removeChild(a);
      // a.click();
      console.log("a");
    }
    // setPathEnd(url.slice(pathIndex + 1));
    // console.log("pathEnd", url.slice(pathIndex + 1));
  }, [url]);

  return (
    <>
      <Banner
        id="Dead13"
        name="DEADPOOL "
        desc="In the film, Wade Wilson hunts the man responsible for giving him
            mutant abilities and a scarred physical appearance, becoming the
            antihero Deadpool."
        imbd="IMDb 8/10 "
        img="https://wallpapers.com/images/featured/deadpool-tzhfez1w8ud2z8aw.jpg5"
      />

      <div className=" main home-container">
        <h1 className="title">Best Movies </h1>

        <FilmList products={homeJson.home} />

        <div className="coming-soon-container">
          <div>
            <h1 className="title">Coming soon</h1>
            <FilmList products={homeJson["title"]} />
          </div>
        </div>

        <div className="coming-soon-container" id="favorite">
          <div>
            <h1 className="title">My Favorites</h1>
            <FilmList products={context.favData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
