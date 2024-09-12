import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Header.scss";
import { BiSolidCameraMovie } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { createPortal } from "react-dom";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { IoFilmOutline } from "react-icons/io5";
import { GiKatana } from "react-icons/gi";
import { RiBearSmileLine } from "react-icons/ri";
import Overlay from "../overlay/Overlay";

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const navigate = useNavigate();
  const activeStyle = {
    color: "rgb(184, 2, 2)",
  };

  const handleClick = (e) => {
    setShowSideBar(false);
    e.preventDefault();
    const url = window.location.href;
    const pathIndex = url.lastIndexOf("/");
    const path = url.slice(pathIndex + 1);
    if (path === "" || path === "#favorite") {
      const target = document.getElementById("favorite");
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/#favorite");
    }
  };

  return (
    <div className="header-container">
      <div className="top">
        <NavLink to={"/"} className="logo">
          <span className="name">MoFiE</span>
          <span className="icon">
            <BiSolidCameraMovie />
          </span>
        </NavLink>

        <div className="nav-menu">
          <div className="film">
            <ul className="dropdown">
              <NavLink
                className="film-name"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to={"films"}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Films
              </NavLink>
              <li className="it1">
                <NavLink to={"film-horror"}>Horror</NavLink>
              </li>
              <li className="it2">
                <NavLink to={"film-comedy"}>Comedy</NavLink>
              </li>
              <li className="it3">
                <NavLink to={"film-drama"}>Drama</NavLink>
              </li>
              <li className="it4">
                <NavLink to={"film-documentary "}>Documentary </NavLink>
              </li>

              <li className="it5">
                <NavLink to={"film-action "}>Action</NavLink>
              </li>
            </ul>
          </div>
          <div className="links">
            <NavLink
              className="links-a"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to={"/"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              className="links-a"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to={"anime"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Anime
            </NavLink>
            <NavLink
              className="links-a"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              to={"cartoon"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Cartoon
            </NavLink>
          </div>
        </div>

        <div className="favorite" onClick={handleClick}>
          <CiHeart className="icon-heart" />

          <span>Favorite</span>
        </div>

        <button onClick={() => setShowSideBar(true)} className="bars-icon">
          <FaBars />
        </button>
      </div>
      {showSideBar &&
        createPortal(
          <Overlay onClose={() => setShowSideBar(false)} />,
          document.body
        )}
      {showSideBar &&
        createPortal(
          <div className="side-bar">
            <div className="side-menu">
              <div className="links">
                <div className="side-bar-film">
                  <NavLink
                    onClick={() => setShowSideBar(false)}
                    className="links-a"
                    to={"films"}
                    style={({ isActive }) =>
                      isActive ? activeStyle : undefined
                    }
                  >
                    <IoFilmOutline />
                    <span> Films</span>
                  </NavLink>
                  <ul className="side-bar-dropdown">
                    <li className="it1">
                      <NavLink
                        to={"film-horror"}
                        onClick={() => setShowSideBar(false)}
                      >
                        Horror
                      </NavLink>
                    </li>
                    <li className="it2">
                      <NavLink
                        to={"film-comedy"}
                        onClick={() => setShowSideBar(false)}
                      >
                        Comedy
                      </NavLink>
                    </li>
                    <li className="it3">
                      <NavLink
                        to={"film-drama"}
                        onClick={() => setShowSideBar(false)}
                      >
                        Drama
                      </NavLink>
                    </li>
                    <li className="it4">
                      <NavLink
                        to={"film-documentary "}
                        onClick={() => setShowSideBar(false)}
                      >
                        Documentary{" "}
                      </NavLink>
                    </li>

                    <li className="it5">
                      <NavLink
                        to={"film-action "}
                        onClick={() => setShowSideBar(false)}
                      >
                        Action
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <NavLink
                  onClick={() => setShowSideBar(false)}
                  className="links-a"
                  to={"/"}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <FaHome />
                  Home
                </NavLink>
                <NavLink
                  onClick={() => setShowSideBar(false)}
                  className="links-a"
                  to={"anime"}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <GiKatana />
                  Anime
                </NavLink>
                <NavLink
                  onClick={() => setShowSideBar(false)}
                  className="links-a"
                  to={"cartoon"}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <RiBearSmileLine />
                  Cartoon
                </NavLink>
              </div>
            </div>
            <div className="side-favorite" onClick={handleClick}>
              <CiHeart className="icon-heart" />
              <span>Favorite</span>
            </div>

            <button
              onClick={() => setShowSideBar(false)}
              className="close-icon"
            >
              <IoCloseCircleOutline />
            </button>
          </div>,
          document.body
        )}
    </div>
  );
};

export default Header;
