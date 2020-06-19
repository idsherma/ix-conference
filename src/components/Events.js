import React from 'react';
import { NavLink, Route, Redirect } from "react-router-dom";
import styled from "styled-components";
import eventsData from "../data/Events.json";

//Nested components
import NodeJS from './NodeJS';
import MongoDB from './MongoDB';
import ReactJS from './ReactJS';
import ExpressJS from './ExpressJS';

const Events = () => {
    return (
       <EventsContainer>
          <div className="container py-5">
            <h2 className="text-center mt-5 pt-3 pb-5 text-uppercase">Events</h2>
            <NavLink to="/events/nodejs" className="badge badge-secondary p-2 m-2">
                Node JS
            </NavLink>

            <NavLink to="/events/mongodb" className="badge badge-secondary p-2 m-2">
               Mongo DB
            </NavLink>

            <NavLink to="/events/reactjs" className="badge badge-secondary p-2 m-2">
               React.js
            </NavLink>

            <NavLink to="/events/expressjs" className="badge badge-secondary p-2 m-2">
                Express.js
            </NavLink>

            {/* ROUTES */}
            <Redirect to="/events/nodejs"/>

            <Route path="/events/nodejs" render={() => <NodeJS data={eventsData} />}></Route>
            <Route path="/events/mongodb" render={() => <MongoDB  data={eventsData}/>}></Route>
            <Route path="/events/reactjs" render={() => <ReactJS data={eventsData} />}></Route>
            <Route path="/events/expressjs" render={() => <ExpressJS data={eventsData} />}></Route>
          </div>
       </EventsContainer>
    )
}

export default Events;

/* ------------------------------ */
/* ------------------------------ */
/*        STYLED COMPONENTS       */
/* ------------------------------ */


const EventsContainer = styled.div`

background: var(--dark-blue);
height: 100%;

.active {
  background: var(--dark-red);
  color: #fff;
  &:focus {
    background: var(--dark-tomato);
    color: var(--off-white);
  }
}

h2 {
  color: var(--dark-red);
}

a {
  &:hover {
    background: var(--tomato);
  }
}

p {
   color: var(--off-white);
}

`;