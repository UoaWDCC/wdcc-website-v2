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

const WhereScreen = styled(Screen)`
  min-height: auto;
  background-color: #FFD166;
`


const TeamScreen = styled(Screen)`
  background-image: url(${initiativesBackground});
  background-size: cover;
  background-position: bottom right;
  z-index: -2;
  
  h1 {
    z-index: 1;
  }
`;

const ExecList = styled.ul`
  columns: 3;
  list-style: none;
  padding: 0;
  max-width: 1000px;
  
  @media (max-width: 650px) {
    columns: 2
  }
  
  @media (max-width: 400px) {
    columns: 1
  }
  
  li {
    font-weight: bold;
    
    &:nth-child(2n) {
      margin-top: 2px;
      
      font-weight: normal;
      margin-bottom: 20px;
      list-style: none;
      font-size: 1.2rem;
    }
  }
`


const TeamScreenGradient = styled.div`
  background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.59), rgb(0, 0, 0, 0));

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

      <TeamScreen>
        <div>
          <TeamScreenGradient />

          <h1>Who we are</h1>
          <div>
            <AboutDescription>
              Web Development & Consulting Club Incorporated started as student club at the University of Auckland in 2019. Since then, we have expanded to a membership base of 450+ members, serving students across Auckland in AUT as well as even high school students.

              We are also a registered charitable incorporated society and you can view our recent filings here <a href={'https://register.charities.govt.nz/CharitiesRegister/ViewCharity?accountId=71489b06-782a-ec11-8d9e-00155d5731b1&searchId=15e90c8d-4e61-4822-b014-2ef1f816c027'}>on the charities register</a>.
            </AboutDescription>
          </div>
        </div>
      </TeamScreen>


      <WhereScreen>
        <h1>Your team for 2022</h1>

        <ExecList>
          <li>President</li>
          <li>Raymond Feng</li>

          <li>Vice President</li>
          <li>Joel Hutchinson </li>

          <li>Treasurer</li>
          <li>Daniel Torrey</li>

          <li>Secretary</li>
          <li>Brendan Zhou</li>


          <li>Operations Director</li>
          <li>Ellen Zhang</li>

          <li>Marketing Director</li>
          <li>Dhwani Thakar</li>

          <li>Sponsorships & Outreach Director</li>
          <li>Alex Zhuang</li>

          <li>Consulting Director</li>
          <li>Youxiang Lei</li>

          <li>Projects Director</li>
          <li>James You</li>
          <li>Associate Projects Director</li>
          <li>Jason Ko</li>
          <li>Marketing Executive</li>
          <li>Tony Cui</li>
          <li>Marketing Executive</li>
          <li>Lucy Zhu</li>
          <li>General Executive</li>
          <li>Lance Delos Reyes</li>
          <li>General Executive</li>
          <li>Josh Feng</li>
          <li>General Executive</li>
          <li>Eve Zhang</li>
        </ExecList>
      </WhereScreen>

      <Footer />
    </>
  );
}

export default AboutPage;