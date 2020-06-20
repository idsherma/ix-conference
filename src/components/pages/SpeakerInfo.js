import React from 'react';
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import Avatar from "../Avatar";


//import avatars
import avatar1 from "../../avatars/avatar-1.png";
import avatar2 from "../../avatars/avatar-2.png";
import avatar3 from "../../avatars/avatar-3.png";
import avatar4 from "../../avatars/avatar-4.png";

const SPEAKERS = [
    {
      id: 0,
      spkImg: avatar1,
      name: "Kaeti King",
      occupation: "TEAM LEAD in the best company of the world",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, blandit et efficitur id, iaculis eget tortor. Donec a nisi blandit, egestas leo nec, aliquet tellus. Nulla bibendum nunc lacus, a condimentum magna lacinia ac. Vivamus lacus ligula, pulvinar eget mi at, accumsan tincidunt ligula. ",
    },
    {
      id: 1,
      spkImg: avatar2,
      name: "Marc Oliver",
      occupation: "SENIOR DEVELOPER in Abra Codabra company",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, blandit et efficitur id, iaculis eget tortor. Donec a nisi blandit, egestas leo nec, aliquet tellus. Nulla bibendum nunc lacus, a condimentum magna lacinia ac. Vivamus lacus ligula, pulvinar eget mi at, accumsan tincidunt ligula. In eleifend pulvinar sapien in molestie. Nullam euismod scelerisque nisl, et facilisis lorem interdum porta. ",
    },
    {
      id: 2,
      name: "Jamila Stevens",
      spkImg: avatar3,
      occupation: "FREELANCER AND JS CONF SPEAKER",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, blandit et efficitur id, iaculis eget tortor. Donec a nisi blandit, egestas leo nec, aliquet tellus. Nulla bibendum nunc lacus, a condimentum magna lacinia ac. Vivamus lacus ligula, pulvinar eget mi at, accumsan tincidunt ligula. In eleifend pulvinar sapien in molestie. Nullam euismod scelerisque nisl, et facilisis lorem interdum porta. ",
    },
    {
      id: 3,
      spkImg: avatar4,
      name: "Lars Grovensky",
      occupation: "FREELANCER MERN FULL STACK DEVELOPER",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque velit, blandit et efficitur id, iaculis eget tortor. Donec a nisi blandit, egestas leo nec, aliquet tellus. Nulla bibendum nunc lacus, a condimentum magna lacinia ac.",
    },
];



const SpeakerInfo = () => {
    let { id } = useParams();
    let speaker = SPEAKERS[parseInt(id, 4)];
   
    return (
        <InfoContainer>
            <div className="container p-5">
                <div className="card">
                    <Avatar speakerImage={speaker.spkImg}/> 
                    <h3>{speaker.name}</h3>
                    <div className="card-body px-0">
                        <h5 className="card-title">{speaker.occupation}</h5>
                        <p className="card-text">
                            {speaker.description}
                        </p>
                        <Link to="/speakers-list">
                            <button className="btn btn-primary text-uppercase">
                                Back 
                            </button>
                        </Link>
                    </div> 
                </div>
            </div>
        </InfoContainer>
    )
}

export default SpeakerInfo;

/* ------------------------------ */
/* ------------------------------ */
/*        STYLED COMPONENTS       */
/* ------------------------------ */

const InfoContainer = styled.div`
  background: var(--dark-blue);
  padding: 5rem 0 0;

  .card {
    background: transparent;
    border: none;
  }

  h3 {
    color: var(--dark-red);
    padding-top: 1rem;
  }

  h5 {
    color: var(--tomato);
  }

  p {
    color: var(--off-white);
  }

  .btn {
    background-color: transparent;
    background-repeat: no-repeat;
    border-color: var(--dark-red);
    &:hover {
      background-color: #c34;
      border-color: var(--dark-red);
    }
    &:focus {
      background: var(--tomato) !important;
      border-color: var(--tomato) !important;
    }
  }
`;

