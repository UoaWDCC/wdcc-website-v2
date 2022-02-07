import React from 'react';
import Screen from './Screen';
import styled from 'styled-components';

import discordJoinBtn from '../resources/discord-min.png';

const Container = styled(Screen)`
  min-height: 0;
  text-align: center;
  background-color: rgb(29, 96, 157);
  color: white;
  
  img {
    width: 200px;
  }
  
  ul {
    padding: 0;
    list-style: none;
    
    li {
      display: inline-block;
      font-size: 2rem;
      margin: 0 30px;
    }
  }
`;

function Footer() {
  return (
    <Container>
      <p>Copyright &copy; {new Date().getFullYear()} Web Development & Consulting Club Incorporated. All rights reserved.</p>

      <h4>Join our community</h4>
      <a href={'https://discord.gg/aCQGaCZ'}><img src={discordJoinBtn} alt={"Join on discord button"} /></a>

      <ul>
        <li><i className="fab fa-linkedin" /></li>
        <li><i className="fab fa-facebook-square" /></li>
        <li><i className="fab fa-instagram-square" /></li>
        <li><i className="fas fa-envelope" /></li>
      </ul>
    </Container>
  );
}

export default Footer;