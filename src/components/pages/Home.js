import React from 'react';
import styled from "styled-components";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

function Home() {
    return (
    <React.Fragment>
        <HomeContainer className="home__hero">
            <Navbar/>
            <div className="container">
            <h1 className="display-5 text-uppercase py-5 text-center">
                Welcome to JS 2020 Conference!
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <div className="form-box">
                    <h3 className="display-6 text-uppercase text-center py-3">Register and reserve your seat</h3>
                    <form>
                        <div className="form-row mr-auto">
                            <div className="col-md-6 mb-4">
                                <input type="text" className="form-control" placeholder="First name">
                                </input>
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" className="form-control" placeholder="Last name">
                                </input>
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" className="form-control" placeholder="Phone Number">
                                </input>
                            </div>
                            <div className="col-md-6 mb-4">
                                <input type="text" className="form-control" placeholder="Email">
                                </input>
                            </div>
                            <button className="btn btn-primary text-uppercase">Reserve</button>
                        </div>
                    </form>
            </div>
            </div>
        </HomeContainer>
        <Footer/>
    </React.Fragment>
    )
}

export default Home;

/* ------------------------------ */
/* ------------------------------ */
/*        STYLED COMPONENTS       */
/* ------------------------------ */
const HomeContainer = styled.div`


h1, h3 {
    color: var(--dark-tomato);
}

p {
    color: var(--off-white);
}

.form-box {
    padding: 6rem 0;
}

form {
    width: 50rem;
    margin: 0 auto;
}

button {
    width: 100%;
    background: transparent;
    border-color: var(--dark-red);
    &:hover {
        background: var(--dark-tomato);
        border-color: var(--dark-red);
    }
    &:focus {
        background: var(--tomato);
        border-color: var(--tomato);
    }
}

`;