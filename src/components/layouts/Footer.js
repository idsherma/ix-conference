import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <FooterContainer>
            <div className="container-fluid">
                <div className="row pt-5">
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link>
                                <li to="/">Lorum ipsum</li>
                            </Link>
                            <Link>
                                <li to="/">Lorum ipsum</li>
                            </Link>
                            <Link>
                                <li to="/">Lorum ipsum</li>
                            </Link>
                        </ul>
                    </div>
                    <div className="col-sm-3 col-xs-12 d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                            <Link>
                                <li to="/">Lorum ipsum</li>
                            </Link>
                            <Link>
                                <li to="/">Lorum ipsum</li>
                            </Link>
                            <Link>
                                <li to="/">Lorum ipsum</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
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