import React from "react";
import { Link, NavLink } from "react-router-dom";

function SiteHeader(): JSX.Element {
  return (
    <div id="site_header" className="header">
      <Link to="/" className="logo">
        irregular verbs
      </Link>
      <nav>
        <NavLink exact activeClassName="active" to="/">
          main
        </NavLink>
        <NavLink exact activeClassName="active" to="/learning">
          learning
        </NavLink>
        <NavLink exact activeClassName="active" to="/training">
          training
        </NavLink>
      </nav>
    </div>
  );
}

export default SiteHeader;
