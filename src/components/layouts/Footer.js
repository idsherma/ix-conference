import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <FooterContainer>
            <footer className="bg-dark px-5">
                <div className="container-fluid">
                    <div className="row text-light py-4">
                        <div className="col-lg-4 col-sm-6">
                            <h5 className="pb-3">About Us</h5>
                            <p className="small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam nobis dicta molestiae id laboriosam natus repudiandae, ducimus illum veritatis perspiciatis possimus, at facere debitis accusantium?</p>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <h5 className="pb-3">Visit Us</h5>
                            <ul className="list-unstyled">
                                <Link to="/">
                                    <li className="footer-link">Lorum ipsum</li>
                                </Link>
                                <Link to="/">
                                    <li className="footer-link">Lorum ipsum</li>
                                </Link>
                                <Link to="/">
                                    <li className="footer-link">Lorum ipsum</li>
                                </Link>
                                <Link to="/">
                                    <li className="footer-link">Lorum ipsum</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-sm-6">
                            <h5 className="pb-3">Need Help?</h5>
                            <ul className="list-unstyled">
                                <Link to="/">
                                    <li className="footer-link text-uppercase">Customer Service</li>
                                </Link>
                                <Link to="/">
                                    <li className="footer-link text-uppercase">Online Chat</li>
                                </Link>
                                <Link to="/">
                                    <li className="footer-link text-uppercase">Support</li>
                                </Link>
                                <Link to="/">
                                    <li className="footer-link text-uppercase">jsconf_2020@email.com</li>
                                </Link>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            
                        <h5 className="pb-3">Stay Connected</h5>
                        <p className="small">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusamus dolores iste praesentium assumenda est quia accusantium corrupti ipsam inventore.</p>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col text-center text-light border-top pt-3">
                            <p>&copy; 2020 Copyright, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </FooterContainer>
    )
}

export default Footer;

/* ------------------------------ */
/* ------------------------------ */
/*        STYLED COMPONENTS       */
/* ------------------------------ */
const FooterContainer = styled.footer`

background: var(--dark-red);

ul li {
    list-style: none;
}

a {
    color: var(--off-white);
    text-decoration: none;
    &:hover {
        color: var(--tomato);
    }
}

`;