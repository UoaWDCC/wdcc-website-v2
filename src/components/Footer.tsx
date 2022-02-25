import React from 'react';
import Screen from './Screen';
import styled from 'styled-components';

import discordJoinBtn from '../resources/discord-min.png';

const Container = styled(Screen)`
  min-height: 0;
  text-align: center;
  background-color: rgb(40, 100, 155);
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
    <Container>
      <p>Copyright &copy; {new Date().getFullYear()} Web Development & Consulting Club Incorporated. All rights reserved.</p>

      <div className={'discord-container'}>

        <h4>Join the UoA Tech Clubs community!</h4>
        <a href={'https://discord.gg/p6HkTZ4x'} target={'_blank'}><img src={discordJoinBtn} alt={"Join on discord button"} /></a>
      </div>

      <ul>
        <li><a href={'https://www.linkedin.com/uoa-wdcc'} target={'_blank'} rel="noreferrer"><i className="fab fa-linkedin" /></a></li>
        <li><a href={'https://www.facebook.com/uoa.wdcc'} target={'_blank'} rel="noreferrer"><i className="fab fa-facebook-square" /></a></li>
        <li><a href={'https://www.instagram.com/uoa_wdcc/'} target={'_blank'} rel="noreferrer"><i className="fab fa-instagram-square" /></a></li>
        <li><a href={'mailto:contact@wdcc.co.nz'} target={'_blank'} rel="noreferrer"><i className="fas fa-envelope" /></a></li>
        <li><a href={'https://github.com/UoaWDCC'} target={'_blank'} rel="noreferrer"><i className="fab fa-github-square" /></a></li>
      </ul>
    </Container>
  );
}

export default Footer;