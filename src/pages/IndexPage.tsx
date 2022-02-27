import React from 'react';
import styled from 'styled-components';
import Screen from '../components/Screen';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

// Ignoring this as this package is old and does not have typings
// @ts-ignore
import 'particles.js';

import combinedBanner from '../resources/combined_banner.png';
import initiativesBackground from '../resources/media/HACKATHON-126.jpg';
import OutlinedButton from '../components/OutlinedButton';
import InitiativeCard from '../components/InitiativeCard';

import projectIcon from '../resources/wdcc_icon_project.png';
import eventIcon from '../resources/wdcc_icon_event.png';
import workshopIcon from '../resources/wdcc_icon_workshop.png';

import computerIcon from '../resources/computer_icon.png';

import sponsors from '../resources/wdcc_sponsors.png';


const Splash = styled(Screen)`
  --light-blue: rgb(49, 126, 187);
  --dark-blue: rgb(29, 96, 157);
  color: white;
  background: linear-gradient(180deg, var(--dark-blue), var(--light-blue), var(--dark-blue));

  display: flex;
  align-items: center;
  
  
  min-height: ${window.innerHeight}px;
`;

const SplashContent = styled.div`
  align-content: center;
  align-items: center;
  justify-content: center;
  margin-left: 75px;
  margin-right: 75px;
  
  div {
    position: relative;
    margin-right: 300px;
    z-index: 1;
  }

  h2 {
    margin-bottom: 5px;
    color: #FFD166;
  }

  h1 {
    margin: 0 0 30px 0;
    font-size: 3rem;
  }

  p {
    max-width: 600px;
    line-height: 1.5rem;
  }
  
  img {
    width: 250px;
    position: absolute;
    right: 10%;
    top: 50%;
    transform: translate(0, -50%);
    
    z-index: 4;
    
    transition-duration: 0.2s;
    
    :hover {
      transition-duration: 0.2s;
      transform: translateY(calc(-50% - 20px));
    }
  }
  
  @media (max-width: 1000px) {
    margin-left: 0;
  }
  
  @media (max-width: 800px) {
    margin-left: 20px;

    h1 {
      font-size: 2.2rem;
    }
    
    h2 {
      font-size: 1rem;
    }
    
    div {
      margin-top: 200px;
      margin-right: 0;
    }
    
    img {
      width: 100px;
      top: 35%;
    }
  }

`;

const InitiativeContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

const SponsorGrid = styled.div`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  
  align-items: center;
  
  max-width: 1200px;
  
  img {
    width: 100%;
    position: relative;
    z-index: -1;
  }
  
  @media (max-width: 700px) {
    h1 {
      padding: 0 20px;
      margin: 0;
      font-size: 1.5rem;
    }
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    text-align: center;
  }
`


const SponsorsScreen = styled(Screen)`
  min-height: 0;
  
  color: #183249;
  
  @media (max-width: 700px) {
    padding: 40px 0;
  }
`;

const JoinScreen = styled.div`
  display: grid;
  grid-template-columns: 800px auto;
  background-color: #FFD166;
  min-height: 0;
  
  overflow: hidden;
  
  @media (max-width: 1000px) {
    grid-template-rows: 1fr 250px;
    grid-template-columns: 100vw;
  }
  
  > div {
    padding: 50px 75px;
    
    @media (max-width: 600px) {
      padding: 50px 30px;
    }
  }
  
  justify-content: space-between;
  
  img {
    object-position: left;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const JoinButton = styled(OutlinedButton)`
  margin-top: 20px;

  border: 3px solid #444444;
  color: inherit;
  text-decoration: none;
`;

const InitiativesScreen = styled(Screen)`
  background-color: rgb(49, 126, 187);
  color: white;
  background-image: url(${initiativesBackground});
  background-size: cover;
  background-position: bottom right;
`;

const InitiativesScreenGradient = styled.div`
  background: linear-gradient(135deg, rgb(49, 126, 187), rgb(49, 126, 187, 0.7), rgb(0, 0, 0, 0));
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  min-width: 1000px;
`;

const InitiativesScreenContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 500px;
`;

const InitiativesButton = styled(OutlinedButton)`
  color: white;
  border: 3px solid white;
  
  margin-top: 20px;
  
  &:hover {
    color: #FFD166;
    border: 3px solid #FFD166;
  }
`

const ParticlesJS = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  
  z-index: 3;
`

export default function IndexPage() {

  // @ts-ignore
  particlesJS.load('particles-js', 'resources/particlesjs-config.json');

  return (
    <>
      <Splash>
        <ParticlesJS id={'particles-js'} />
        <SplashContent>
          <div>
            <h2>University of Auckland</h2>
            <h1>Web Development & Consulting Club</h1>
            <p>We promote the learning and practice of software development through workshops and
              real-world projects, to equip and inspire tomorrow's talent</p>
          </div>


          <img src={computerIcon} alt={'Computer icon (graphic)'} />
        </SplashContent>
      </Splash>
      <NavBar />

      <SponsorsScreen>
        <SponsorGrid>
          <h1>Supported by our 2022 Sponsors</h1>
          <img src={sponsors} alt={'WDCC Sponsors 2022'} />
        </SponsorGrid>

      </SponsorsScreen>

      <JoinScreen>
        <div>
          <h1>Become a member for 2022</h1>
          <div>
            <p>Get up-to-date reminders of WDCC events and workshops, and some exclusive member networking events
              throughout the year.</p>
            <p>You don't need to know web development. <b>Membership is free!</b></p>
          </div>
          <JoinButton href={'https://join.wdcc.co.nz'}>Join WDCC</JoinButton>
        </div>

        <img src={combinedBanner} alt={'Hackathon photos'} />
      </JoinScreen>

      <InitiativesScreen>
        <InitiativesScreenGradient />
        <InitiativesScreenContent>
          <h1>What is WDCC?</h1>

          <p>
            WDCC (Web Development & Consulting Club Incorporated) is a not-for-profit organisation, founded by two
            students at the
            University of Auckland.
          </p>

          <p>
            WDCC aims to bridge the gap between university knowledge and real-world industry practices. We run projects
            with real-world clients that solve real-world problems, generally for NFP organisations or other student
            clubs
            who don't have the funding to fund a solution themselves.
          </p>

          <p>
            Projects could also be to develop own open-source tools to better support the development community.
          </p>
          <p>
            To help our members and the wider student community improve their skills and gain more benefits from the
            projects,
            we also hold workshops that help to upskill.
          </p>

          <InitiativesButton href={'/team'}>The team</InitiativesButton>
        </InitiativesScreenContent>
      </InitiativesScreen>

      <Screen>
        <h1>What do we do?</h1>
        <InitiativeContainer>
          <InitiativeCard
            title={"Hands-On Projects"}
            description={`
            We provide opportunities for students to gain industry experience by establishing pro bono projects on website design and development.
            <br /><br />
            These projects help students to learn more about web development in a collaborative environment whilst also helping NFP / Charitable organisations with a tech solution.
            `}
            photo={projectIcon}
          />
          <InitiativeCard
            title={"Workshops"}
            description={`
            
            Knowledge on web is arguably one of the most valuable skills in the tech industry. We host a range of workshops at different levels to teach members the skills they will need to participate in our projects.
            
            <br /><br />
            Some of our most popular workshops include the beginner's HTML & CSS Workshop, and the introduction to the React/MERN techstack.
            `}
            photo={workshopIcon}
          />
          <InitiativeCard
            title={"Events and Competitions"}
            description={`
            We also hold some social events for our community, bringing our industry sponsors together with students to network.
            <br /><br />
            On occasion, we also host competitions (like Hackathons and Case Competitions) for a place where students could put their skills to the test in a friendly way.
            `}
            photo={eventIcon}
          />
        </InitiativeContainer>
      </Screen>

      <Footer />
    </>
  );
}
