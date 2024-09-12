import React, { useState } from "react";
import "./Banner.scss";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import FavoriteBtn from "../FavoriteBtn/FavoriteBtn";
const Banner = ({ name, desc, imbd, img, id }) => {
  const [data, setData] = useState({
    productName: name,
    desc,
    imbd,
    productImage: img,
    id,
  });

  // useEffect(() => {

  // }, []);

  return (
    <div>
      <div className="banner" style={{ backgroundImage: `url(${img})` }}>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text"
        >
          <h2> {name}</h2>
          <span> {imbd}</span>
          <p> {desc}</p>
          {/* <FavoriteBtn data={data} /> */}
        </motion.div>

        <div className="banner-overxlay">

        </div>
      </div>
    </div>
  );
};

export default Banner;
