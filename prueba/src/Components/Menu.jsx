import React from "react";
import { data } from "../Data/data";
import { FcFolder } from "react-icons/fc";
import { NavLink } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <nav className="container_menu">
      <NavLink to={`/home`}>
        <h1>
          <FcFolder />
          Aerolineas
        </h1>
        </NavLink>
        <ul className="container_li">
          {data.map((element) => {
            return (
              <li key={element.id}>
                <NavLink to={`/booking/${element.cliente}`}>
                  {element.cliente}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
