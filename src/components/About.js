import React from 'react';
import styled from "styled-components";

const About = () => {
    return (
       <AboutContainer>
           <div className="py-5">
               <h3 className="display-3 text-center">About</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut. Gravida rutrum quisque non tellus orci ac auctor. Integer enim neque volutpat ac tincidunt. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Aliquet nec ullamcorper sit amet risus nullam eget felis. Lobortis feugiat vivamus at augue eget arcu dictum varius. Quam nulla porttitor massa id. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Amet consectetur adipiscing elit duis. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut. Gravida rutrum quisque non tellus orci ac auctor. Integer enim neque volutpat ac tincidunt. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Aliquet nec ullamcorper sit amet risus nullam eget felis. Lobortis feugiat vivamus at augue eget arcu dictum varius. Quam nulla porttitor massa id. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Amet consectetur adipiscing elit duis. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.</p>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui vivamus arcu felis bibendum ut. Gravida rutrum quisque non tellus orci ac auctor. Integer enim neque volutpat ac tincidunt. Magna fermentum iaculis eu non diam phasellus vestibulum lorem. Aliquet nec ullamcorper sit amet risus nullam eget felis. Lobortis feugiat vivamus at augue eget arcu dictum varius. Quam nulla porttitor massa id. Sed blandit libero volutpat sed cras ornare arcu dui vivamus. Amet consectetur adipiscing elit duis. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat.</p>
           </div>
       </AboutContainer>
    )
}

export default About;

/* ------------------------------ */
/* ------------------------------ */
/*        STYLED COMPONENTS       */
/* ------------------------------ */


const AboutContainer = styled.div`
  background: var(--dark-blue);

  h3 {
    color: var(--dark-red);
  }

  p {
    color: var(--off-white);
    width: 90%;
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0 auto;
  }
`;