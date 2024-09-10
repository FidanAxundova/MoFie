import React, { useContext, useEffect } from "react";
import "./FavoriteBtn.scss";
import homeJson from "../../pages/home/json/home.json";
import { FavContext } from "../../App";

const FavoriteBtn = ({ data, onChangeStatus }) => {
  const context = useContext(FavContext);

  function handleClick(e) {
    if (!context.favData?.includes(data)) {
      context.favFun([...context.favData, data]);
      onChangeStatus(false);
    }
  }

  return (
    <button onClick={(e) => handleClick(e)} className="favorite-btn">
      Add to Favorite
    </button>
  );
};

export default FavoriteBtn;
