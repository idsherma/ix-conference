import React from "react";
import styled from "styled-components";
import falseRouteImage from '../notfoundpage.png'


const NotFoundPage = () => {
  return (
    <NotFoundContainer>
        <div className="container text-center py-5 my-5">
        <img className="error-image" src={falseRouteImage} alt="false-route"/>
        <br />
        <h3> Sorry, your search is Not Found Error: 404.</h3>
        </div>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

/* ------------------------------ */
/* ------------------------------ */
/*        STYLED COMPONENTS       */
/* ------------------------------ */

const NotFoundContainer = styled.div`
    height: 100vh;

    .error-image {
        max-width: 300px;
        margin: 0 auto;
    }
`;