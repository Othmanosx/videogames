import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink activeClassName="active" to="/videogames">
            VIDEO GAMES
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
