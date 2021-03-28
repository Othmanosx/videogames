import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  return (
    <div className="navbar">
      <ul>
        <li>
          <NavLink activeClassName="active-page" to="/videogames">
            <div onClick={setState}>
              {window.location.pathname === "/videogames" ? (
                <div className="shadow1">VIDEO</div>
              ) : null}
              <div className="link">VIDEO GAMES</div>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active-page" to="/contact">
            <div onClick={setState}>
              {window.location.pathname === "/contact" ? (
                <div className="shadow2">CONTACT</div>
              ) : null}
              <div className="link">CONTACT</div>
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
