import React, { Component } from 'react';
import logo from "../../8020logo.png";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';

// const Navbar = () => {
//   return (
//     <NavbarContainer>
//       <nav className="navbar navbar-expand-lg navbar-light px-5">
//         <Link className="navbar-brand" to="/">
//           <img className="logo" src={logo} alt="logo" />
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ml-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link" exact to="/">
//                 Home <span className="sr-only">(current)</span>
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/speakers-list">
//                 Speakers
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/events">
//                 Events
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/about">
//                 About
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//   </NavbarContainer>
//   );
// };

// export default Navbar;

class Header extends Component {

  constructor(props) {
      super(props);

      this.toggleNav = this.toggleNav.bind(this);
      
      this.state = {
        isNavOpen: false, 
        isModalOpen: false
      };

      this.toggleNav = this.toggleNav.bind(this);
      this.toggleModal = this.toggleModal.bind(this);
  } 

  toggleNav() {
      this.setState({
          isNavOpen: !this.state.isNavOpen
      });
  }

  toggleModal() {
      this.setState({
          isModalOpen: !this.state.isModalOpen
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
                          <Nav navbar>
                              <NavItem>
                                  <NavLink className="nav-link" to="/home">
                                      Home
                                  </NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to="/directory">
                                      Directory
                                  </NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to="/aboutus">
                                     About
                                  </NavLink>
                              </NavItem>
                              <NavItem>
                                  <NavLink className="nav-link" to="/contactus">
                                    Contact Us
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