import React from "react";
import { NavLink } from "react-router-dom";

const NavListItem = ({ route, linkText, clickHandler }) => {
  return (
    <li className="HeaderNavItem">
      <NavLink className="NavLink" to={route} onClick={clickHandler}>
        {linkText}
      </NavLink>
    </li>
  );
};

export default NavListItem;
