import React from 'react';
import NavBar from '../components/NavBar';
import Screen from '../components/Screen';
import Footer from '../components/Footer';
import styled from 'styled-components';
import initiativesBackground from '../resources/about_grad.jpg';
import execList from '../resources/exec.json';

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


  --n-col: 10;

  @media (max-width: 1200px) {
    --n-col: 5;
  }


  @media (max-width: 800px) {
    --n-col: 3;
  }

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(var(--n-col), 1fr);

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;

    height: calc(100vw / var(--n-col));
  }

  .profile-ctn {
    position: relative;
    font-size: 0;

    .desc-ctn {
      text-align: center;
      font-size: 1rem;
      position: absolute;
      inset: 0;
      height: 100%;

      opacity: 0;
      transition-duration: 0.25s;

      :hover {
        background-color: rgba(0, 0, 0, 0.7);
        opacity: 1;
        cursor: default;
        transition-duration: 0.25s;
      }

      display: flex;
      flex-flow: column;
      justify-content: center;

      * {
        padding: 0;
        margin: 0 10px;
        color: white;
      }

      .desc-role {
        font-weight: bold;
        font-size: 0.8rem;
        text-transform: uppercase;
        line-height: 0.9rem;
      }
    }
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
  background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.40), rgb(0, 0, 0, 0));

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  z-index: 1;

  min-width: 1000px;
`;

function AboutPage() {
  return (
    <>
      <NavBar hasBg={true} />

      <TeamScreen>
        <TeamScreenGradient />

        <div>

          <AboutDescription>
            <h1>Who we are</h1>

            Web Development & Consulting Club Incorporated started as student club at the University of Auckland in 2019. 
            Since then, we have expanded to a membership base of 450+ members, serving students across Auckland from both UOA and AUT.
          </AboutDescription>
        </div>
      </TeamScreen>


      <WhereScreen>
        <h1>Your executive team for 2022</h1>

        <ExecList>
          {execList.map((it, key) => (
            <>
            <li key={key}>{it.role}</li>
            <li key={key + 100}>{it.name}</li>
            </>
          ))}
        </ExecList>

        <p>Want to join our team? Get in touch with us at <a
          href={'mailto:secretary@wdcc.co.nz'}>secretary@wdcc.co.nz</a></p>
      </WhereScreen>

      <TeamPhotoScreen>

        <PhotoGrid>
          {execList.map((it, key) => {
            return (
              <div className='profile-ctn'>
                <img key={key} src={`/resources/team_photos/${it.profileUri}`} alt={`${it.name} - ${it.role}`} />
                <div className='desc-ctn'>
                  <p className='desc-role'>{it.role}</p>
                  <p className='desc-name'>{it.name}</p>
                </div>
              </div>
            );
          })}
        </PhotoGrid>
      </TeamPhotoScreen>

      <Footer />
    </>
  );
}

export default AboutPage;