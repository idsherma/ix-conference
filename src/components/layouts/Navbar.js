import React from "react";
import logo from "../../8020logo.png";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavBarComponent>
      <nav className="navbar navbar-expand-lg">
        <Link className="navbar-brand" to="/">
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/">
                Home 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/speakers-list">
                Speakers
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/events">
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </NavBarComponent>
  );
};

export default Navbar;

/* ------------------------------ */
/* ------------------------------ */
/*        STYLED COMPONENTS       */
/* ------------------------------ */
const NavBarComponent = styled.div`

nav {
    background: var(--burgundy);
}

.logo {
    width: 2.5rem;
}

.nav-link {
    color: var(--off-white);
    &:hover {
        background: var(--tomato);
    }
}

.active {
    background: var(--orange);
}
`;