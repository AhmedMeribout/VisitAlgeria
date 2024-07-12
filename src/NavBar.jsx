import React from "react";
import "./css.css";


import { Link, useMatch, useResolvedPath } from "react-router-dom";

import logo from './assets/logo.png'; 
import discoverIcon from './assets/discover.png';
import activitiesIcon from './assets/activities.png';
import placesToGoIcon from './assets/places_to_go.png';

function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      <img src={logo} alt="Visite Algeria" className="logo" /></Link>
      <div className="nav-links">
        <ul className="left-links">
          <CustomLink to="/discover" className="roboto-mono">
          <img src={discoverIcon} alt="Discover" className="icon" />
          Discover
          </CustomLink>
          <CustomLink to="/activities" className="roboto-mono">
          <img src={activitiesIcon} alt="Activities" className="icon" />
          Activities
          </CustomLink>
          <CustomLink to="/places-to-go" className="roboto-mono">
          <img src={placesToGoIcon} alt="Places to go" className="icon" />
          Places to go
          </CustomLink>
        </ul>
        <ul className="right-links">
          <CustomLink to="/travel-info" className="roboto-mono">Travel Info</CustomLink>
          <CustomLink to="/blog" className="roboto-mono">Blog</CustomLink>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  );
}
