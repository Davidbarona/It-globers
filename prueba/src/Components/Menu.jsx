import React, { useState, useEffect } from "react";
import { data } from "../Data/data";
import { FcFolder, FcMenu } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import "../Styles/Menu.scss";

export const Menu = () => {
  const [menu, setMenu] = useState(false);
  const [screenWidth,setScreenWidth] =useState(window.innerWidth)

  const openMenu = () =>{
    setMenu(!menu)
  }

  useEffect(()=>{
    const changeWidth = () =>{
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize',changeWidth)

    return () =>{
      window.removeEventListener('resize',changeWidth )
    }
  },[])

  return (
    <>
      <nav>
        <NavLink to={`/home`}>
          <div className="logo">
            <h1>
              <FcFolder />
              Aerolineas
            </h1>
          </div>
        </NavLink>
        {(menu || screenWidth >920)  && (
          <ul className="list">
            {data.map((element) => {
              return (
                <li key={element.id} className="items">
                  <NavLink to={`/booking/${element.cliente}`}>
                    {element.cliente}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        )}

        <button onClick={openMenu} className="btn">
         <FcMenu /> 
        </button>
      </nav>
    </>
  );
};
