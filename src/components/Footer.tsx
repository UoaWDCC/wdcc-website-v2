import React from 'react';
import Screen from './Screen';
import styled from 'styled-components';

import discordJoinBtn from '../resources/discord-min.png';

const BannerBottom = styled.div`
  background-color: #183249;

  margin: 0;

  padding: 20px;

  p {
    color: rgba(255, 255, 255, 0.72);
    margin: 0;
    font-size: 0.9rem;
    text-align: center;
  }
`;

const Container = styled(Screen)`
  min-height: 0;
  text-align: center;

  --light-blue: rgb(51, 121, 185);
  --dark-blue: rgb(29, 96, 157);
  background: linear-gradient(180deg, var(--light-blue), var(--dark-blue));

  color: white;

  img {
    width: 200px;
  }

  ul {
    padding: 0;
    list-style: none;

    li {
      display: inline-block;
      font-size: 1.5rem;
      margin: 0 15px;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  .discord-container {

    box-sizing: border-box;
    width: 350px;
    margin: 30px auto;

    h4 {
      margin: 0 0 20px 0;
    }

    img {
      border: 2px solid white;
      border-radius: 20px;
      padding: 15px;

      cursor: pointer;

      transition-duration: 0.3s;

      &:hover {
        transition-duration: 0.3s;
        background-color: rgba(255, 255, 255, 0.05);
      }
    }
  }
`;

function Footer() {
  return (
    <>
      <Container>
        <div className={'discord-container'}>

          <h4>Join the UoA Tech Clubs community!</h4>
          <a href={'https://discord.gg/9AC6xeXXzu'} target={'_blank'} rel='noreferrer'><img src={discordJoinBtn}
                                                                                            alt={'Join on discord button'} /></a>
        </div>

        <ul>
          <li><a href={'https://nz.linkedin.com/company/uoa-wdcc'} target={'_blank'} rel='noreferrer'><i
            className='fab fa-linkedin' /></a></li>
          <li><a href={'https://www.facebook.com/uoa.wdcc'} target={'_blank'} rel='noreferrer'><i
            className='fab fa-facebook-square' /></a></li>
          <li><a href={'https://www.instagram.com/uoa_wdcc/'} target={'_blank'} rel='noreferrer'><i
            className='fab fa-instagram-square' /></a></li>
          <li><a href={'mailto:contact@wdcc.co.nz'} target={'_blank'} rel='noreferrer'><i className='fas fa-envelope' /></a>
          </li>
          <li><a href={'https://github.com/UoaWDCC'} target={'_blank'} rel='noreferrer'><i
            className='fab fa-github-square' /></a></li>
        </ul>

      </Container>

      <BannerBottom className={'banner-bottom'}>
        <p>Powered by WDCC using React + TypeScript</p>
        <p>&copy; {new Date().getFullYear()} Web Development & Consulting Club Incorporated. All rights reserved.</p>
      </BannerBottom>
    </>

  );
}

export default Footer;