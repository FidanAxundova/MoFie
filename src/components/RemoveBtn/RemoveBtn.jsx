import React, { useContext } from "react";
import "./RemoveBtn.scss";
import { FavContext } from "../../App";

const RemoveBtn = ({ data, onChangeStatus }) => {
  const context = useContext(FavContext);

  function handleClick(e) {
    if (context.favData.includes(data)) {
      const newData = context.favData.filter((el) => el.id !== data.id);
      context.favFun(newData);
      onChangeStatus(true);
    }
  }
  return (
    <button onClick={(e) => handleClick(e)} className="remove-btn">
      Remove from Favorite
    </button>
  );
};

export default RemoveBtn;
