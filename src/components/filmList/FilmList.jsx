import React, { useEffect, useState } from "react";
import "./FilmList.scss";
import Card from "../card/Card";
import Overlay from "../overlay/Overlay";
import { createPortal } from "react-dom";

const FilmList = ({ products, openModal }) => {
  const [showModal, setShowModal] = useState(false);
  const [cardProduct, setCardProduct] = useState(null);

  function openModal(product) {
    setCardProduct(product);
    showModal ? setShowModal(false) : setShowModal(true);
  }

  return (
    <div className="product-container">
      <div className="products">
        {products?.map((product, id) => (
          <button key={id} onClick={() => openModal(product)}>
            <div
              className="product-box"
              style={{
                backgroundImage: `url(${product.productImage})`,
                backgroundSize: "contain",
              }}
            >
              <div className="product-box-in">
                {/* <div className="top-part">
                <img src={product.productImage} alt="product Image" />
              </div> */}
                <div className="bottom-part">
                  {/* <div className="age"> */}
                  <span className="age">{product.age}</span>
                  <span className="time">{product.time}</span>
                </div>
                {/* <div className="time">
                  
                </div> */}
                {/* </div> */}
              </div>
            </div>
          </button>
        ))}
      </div>
      {showModal && <Card data={cardProduct} />}
      {showModal && createPortal(<Overlay onClose = {()=>setShowModal(false) } />, document.body)}
    </div>
  );
};

export default FilmList;
