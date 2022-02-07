import React from 'react';
import NavBar from '../components/NavBar';
import Screen from '../components/Screen';
import Footer from '../components/Footer';
import styled from 'styled-components';
import initiativesBackground from '../resources/about_grad.png';

const AboutDescription = styled.p`
  max-width: 100%;
  width: 550px;
  
  line-height: 2rem;
  z-index: 1;
  position: relative;
`


const AboutScreen = styled(Screen)`
  margin-top: 20px;
  color: black;
  background-image: url(${initiativesBackground});
  background-size: cover;
  background-position: bottom right;
  z-index: -2;
  
  h1 {
    z-index: 1;
  }
`;


const AboutScreenGradient = styled.div`
  background: linear-gradient(135deg, rgb(255, 255, 255), rgba(255, 255, 255, 0.8), rgb(0, 0, 0, 0));
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: -1;

  min-width: 1000px;
`;

function AboutPage() {
  return (
    <>
      <NavBar hasBg={true} />

      <AboutScreen>
        <h1>Where we're at</h1>
        <div>
          <AboutScreenGradient />
          <AboutDescription>
            Web Development & Consulting Club Incorporated started as student club at the University of Auckland in 2019. Since then, we have expanded to a membership base of 450+ members, serving students across Auckland in AUT as well as even high school students.

            We are also a registered charitable incorporated society and you can view our recent filings here <a href={'https://register.charities.govt.nz/CharitiesRegister/ViewCharity?accountId=71489b06-782a-ec11-8d9e-00155d5731b1&searchId=15e90c8d-4e61-4822-b014-2ef1f816c027'}>on the charities register</a>.
          </AboutDescription>
        </div>
      </AboutScreen>
      <Screen>
        <h1>The Team</h1>
      </Screen>
      <Footer />
    </>
  );
}

export default AboutPage;