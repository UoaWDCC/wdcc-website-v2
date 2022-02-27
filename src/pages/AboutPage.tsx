import React from 'react';
import NavBar from '../components/NavBar';
import Screen from '../components/Screen';
import Footer from '../components/Footer';
import styled from 'styled-components';
import initiativesBackground from '../resources/about_grad.png';

const AboutDescription = styled.div`
  max-width: 100%;
  width: 550px;

  line-height: 2rem;
  z-index: 2;

  position: relative;
`;

const WhereScreen = styled(Screen)`
  min-height: auto;
  background-color: #FFD166;
`;

const PhotoGrid = styled.div`

  height: 100%;
  max-width: 100vw;
  background-color: #FFD166;

  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: repeat(8, auto);

  @media (max-width: 1200px) {
    grid-template-rows: repeat(3, auto);
    grid-template-columns: repeat(5, auto);
  }


  @media (max-width: 800px) {
    grid-template-rows: repeat(5, auto);
    grid-template-columns: repeat(3, auto);
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

`;

const TeamScreen = styled(Screen)`
  background-image: url(${initiativesBackground});
  background-size: cover;
  background-position: bottom right;

  h1 {
    z-index: 1;
  }
`;

const TeamPhotoScreen = styled.div`
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
    font-size: 0.9rem;
    font-weight: bold;

    &:nth-child(2n) {
      margin-top: 2px;

      font-weight: normal;
      margin-bottom: 20px;
      list-style: none;
      font-size: 1.2rem;
    }
  }
`;


const TeamScreenGradient = styled.div`
  background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.59), rgb(0, 0, 0, 0));

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1;

  min-width: 1000px;
`;


const execNames = [
  'joel_hutchinson.jpg',
  'daniel_torrey.jpg',
  'raymond_feng.jpg',
  'dhwani_thakar.jpg',
  'ellen_zhang.jpg',
  'eve_zhang.jpg',
  'james_you.jpg',
  'alex_zhuang.jpg',
  'jason_ko.jpg',
  'lance_delos_reyes.png',
  'lucy_zhu.jpg',
  'brendan_zhou.jpg',

  'tony_cui.png',
  'youxiang_lei.jpg',
  'josh_feng.jpg',
];

function AboutPage() {
  return (
    <>
      <NavBar hasBg={true} />

      <TeamScreen>
        <TeamScreenGradient />

        <div>

          <AboutDescription>
            <h1>Who we are</h1>

            Web Development & Consulting Club Incorporated started as student club at the University of Auckland in 2019. Since then, we have expanded to a membership base of 450+ members, serving students across Auckland from both UoA and AUT.

              We are also an incorporated society with charities status, and you can view our recent annual filings here <a
              href='https://register.charities.govt.nz/CharitiesRegister/ViewCharity?accountId=71489b06-782a-ec11-8d9e-00155d5731b1&searchId=b52c8156-ff6d-47db-9579-fa2522f83201'>on the charities register</a>.
          </AboutDescription>
        </div>
      </TeamScreen>


      <WhereScreen>
        <h1>Your team for 2022</h1>

        <ExecList>
          <li>President</li>
          <li>Raymond Feng</li>

          <li>Vice President</li>
          <li>Joel Hutchinson</li>

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

        <p>Wanting to join our team? Get in touch with us at <a
          href={'mailto:secretary@wdcc.co.nz'}>secretary@wdcc.co.nz</a></p>
      </WhereScreen>

      <TeamPhotoScreen>

        <PhotoGrid>
          {execNames.map((it) => {
            return (
              <img src={`/resources/wdcc_photos/${it}`} alt={it} />
            );
          })}
        </PhotoGrid>
      </TeamPhotoScreen>

      <Footer />
    </>
  );
}

export default AboutPage;