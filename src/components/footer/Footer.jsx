import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTelegram } from "react-icons/fa";
import { BiSolidCameraMovie } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Footer = () => {
  return (
    <footer>
      <div className="footer-in">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="logo-footer-cont"
        >
          <Link to={"/"} className="logo">
            <span className="name">MoFiE</span>
            <span className="icon">
              <BiSolidCameraMovie />
            </span>
          </Link>

          <p>
            Welcome to MoFie – go to spot for discovering and enjoying a diverse
            range of movies. From detailed reviews to the latest trailers, we
            help you find your next favorite film.
          </p>
        </motion.div>
        <div className="footer-links">
          <div className="follow">
            <div className="icons">
              <FaInstagram />
              <FaFacebook />
              <FaTelegram />
            </div>
          </div>
        </div>
      </div>

      <div className="line"></div>
      <div className="copy-right">
        <div className="link">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"films"}>Films</Link>
            </li>
            <li>
              <Link to={"anime"}>Anime</Link>
            </li>
            <li>
              <Link to={"cartoon"}>Cartoon</Link>
            </li>
          </ul>
        </div>
        © 2024 Fidan Meftakhetdinova , All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
