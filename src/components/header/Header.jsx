import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Header.scss";
import { BiSolidCameraMovie } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";

import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const activeStyle = {
    color: "rgb(184, 2, 2)",
  };

  const handleClick = (e) => {
    e.preventDefault();
    const url = window.location.href;
    const pathIndex = url.lastIndexOf("/");
    const path = url.slice(pathIndex + 1)
    if (
      path === "" ||
      path === "#favorite"
    ) {
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
              to={"/"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Home
            </NavLink>
            <NavLink
              className="links-a"
              to={"anime"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Anime
            </NavLink>
            <NavLink
              className="links-a"
              to={"cartoon"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Cartoon
            </NavLink>
          </div>
        </div>

        <div className="favorite" onClick={handleClick}>
          {/* <span className="icon-heart"> */}
          <CiHeart className="icon-heart" />
          {/* </span> */}
          <span>Favorite</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
