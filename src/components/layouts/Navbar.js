import React, { Component } from "react";
import logo from "../../logo.png";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);

    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <NavbarContainer>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img className="logo" src={logo} alt="Logo" />
            </NavbarBrand>

            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link" exact to="/">
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/speakers-list">
                    Speakers
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/events">
                    Events
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </NavbarContainer>
    );
  }
}

export default Header;

/* ------------------------------ */
/* ------------------------------ */
/*        STYLED COMPONENTS       */
/* ------------------------------ */
const NavbarContainer = styled.div`
  nav {
    background: var(--dark-tomato);
  }

  .logo {
    width: 5em;
  }

  .nav-link {
    color: var(--off-white);
    &:hover {
      color: var(--tomato);
    }
  }

  .active {
    color: var(--off-white);
  }
`;
