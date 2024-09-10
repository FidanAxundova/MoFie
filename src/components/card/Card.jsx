import React, { useContext, useEffect, useState } from "react";
import "./Card.scss";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
import RemoveBtn from "../RemoveBtn/RemoveBtn";
import { FavContext } from "../../App";

const Card = ({ data }) => {
  const context = useContext(FavContext);
  const [showFavBtn, setShowFavBtn] = useState(true);
  useEffect(() => {
    if (context.favData.includes(data)) {
      setShowFavBtn(false);
    }
  }, []);

  return (
    <div className="movie-container">
      <div className="movie">
        <div className="movie__hero">
          <img src={data.productImage} alt="Smile" className="movie__img" />
        </div>
        <div className="movie__content">
          <div className="movie__title">
            <h1 className="heading__primary">{data.productName}</h1>
            <div className="tag_container">
              {data?.tags?.map((tag, i) => {
                return (
                  <div className="movie__tag movie__tag--1" key={i}>
                    {tag}{" "}
                  </div>
                );
              })}
            </div>
          </div>
          <p className="movie__description">{data.desc}</p>
          <div className="actors">
            <h1 className="heading__primary">Actors</h1>
            <div className="actors-list">
              {data?.actors?.map((actor, i) => {
                return <p key={i}>{actor}</p>;
              })}
            </div>
          </div>
          <div className="movie__details">
            <p className="movie__detail">
              <span className="icons icons-grey">
                <i className="fas fa-clock"></i>{" "}
              </span>
              {data.time}
            </p>
            {showFavBtn ? (
              <FavoriteBtn
                data={data}
                onChangeStatus={(status) => setShowFavBtn(status)}
              />
            ) : (
              <RemoveBtn
                data={data}
                onChangeStatus={(status) => setShowFavBtn(status)}
              />
            )}
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Card;
