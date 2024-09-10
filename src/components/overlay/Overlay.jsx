import React from "react";
import "./Overlay.scss";

const Overlay = ({onClose}) => {
  return <div onClick={onClose} className="overlay"></div>;
};

export default Overlay;
