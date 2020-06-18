import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//import avatars
import avatar1 from "../../avatars/avatar-1.png";
import avatar2 from "../../avatars/avatar-2.png";
import avatar3 from "../../avatars/avatar-3.png";
import avatar4 from "../../avatars/avatar-4.png";

const SpeakersList = () => {
  return (
    <MainContainer>
      <div className="container">
        <div className="row mx-auto justify-content-center">
          {/* speaker 1 */}
          <div className="card col-md-6 p-2">
            <img src={avatar1} alt="" className="card-img-top mx-auto" />
            <div className="card-body">
              <h3 className="card-title text-center pb-2">Name TK</h3>
              <h5>
                Subject: <b>Node JS</b>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/speakers/info/0">
                <button className="btn btn-primary text-uppercase">
                  More info about speaker
                </button>
              </Link>
            </div>
          </div>
          {/* speaker 2 */}
          <div className="card col-md-6 p-2">
            <img src={avatar2} alt="" className="card-img-top mx-auto" />
            <div className="card-body">
              <h3 className="card-title text-center pb-2">Name TK</h3>
              <h5>
                Subject: <b>MONGO DB</b>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/speakers/info/1">
                <button className="btn btn-primary text-uppercase">
                  More info about speaker
                </button>
              </Link>
            </div>
          </div>
          {/* speaker 3 */}
          <div className="card col-md-6 p-2">
            <img src={avatar3} alt="" className="card-img-top mx-auto" />
            <div className="card-body">
              <h3 className="card-title text-center pb-2">Name TK</h3>
              <h5>
                Subject: <b>EXPRESS.JS</b>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/speakers/info/2">
                <button className="btn btn-primary text-uppercase">
                  More info about speaker
                </button>
              </Link>
            </div>
          </div>
          {/* speaker 4 */}
          <div className="card col-md-6 p-2">
            <img src={avatar4} alt="" className="card-img-top mx-auto" />
            <div className="card-body">
              <h3 className="card-title text-center pb-2">Name TK</h3>
              <h5>
                Subject: <b>EXPRESS.JS</b>
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link to="/speakers/info/3">
                <button className="btn btn-primary text-uppercase">
                  More info about speaker
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainContainer>
  );
};

export default SpeakersList;

/* ------------------------------ */
/* ------------------------------ */
/*        STYLED COMPONENTS       */
/* ------------------------------ */

const MainContainer = styled.div`

background: var(--dark-blue);

h3, h5, p {
    color: var(--off-white);
}

.card-img-top {
    width: 10rem;
}

.card {
    margin: 1rem;
    background: transparent;
}

@media (min-width: 768px) {
    .col-md-6 {
        max-width: 40%;
    }
}

button {
    background: transparent;
    border-color: var(--dark-red);
    color: var(--off-white);
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