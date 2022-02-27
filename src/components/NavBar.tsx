import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../resources/logos/primary_white_512.png';
import { useLocation } from 'react-router-dom';

import NavItem from './NavItem';
import FullScreenMenu from './FullScreenMenu';


const Container = styled.div`
  
  &.dark {
    height: 140px;
    background-color: rgb(29, 96, 157);
  }
  
  #menu {
    position: absolute;
    left: 50px;
    top: 50px;
    color: white;
    font-size: 2rem;
    
    cursor: pointer;
    z-index: 10;

    @media (min-width: 1000px) {
      display: none;
    }
  }

  .hori-nav {
    position: absolute;
    top: 50px;
    right: 250px;

    list-style: none;
    padding: 0;
    margin: 0 0 0 30px;
    text-align: right;
    
    z-index: 10;


    @media (max-width: 1000px) {
      display: none;
    }
    
    li {
      &::before {
        position: absolute;
        bottom: 0;

        content: '';
        background-color: white;
        height: 2px;
        width: 0;
        transition-duration: 0.2s;
      }

      &:hover {
        &::before {
          transition-duration: 0.2s;
          width: 25px;
        }
      }
    }
  }


  li {
    position: relative;
    padding: 10px 0;
    text-align: left;
    display: inline-block;
    width: 150px;
    font-family: Montserrat, sans-serif;

    a {
      color: white;
      text-decoration: none;
      display: block;

      &.active {
        color: #ffd166;
      }

      &.highlight {
        font-weight: bold;
      }
    }
  }
`;

const Logo = styled.img`
  position: absolute;
  top: 40px;

  // TODO: Make this dynamic
  right: 75px;
  
  @media (max-width: 600px) {
    right: 50px;
    width: 100px;
    top: 50px;
  }

  width: 150px;
  height: auto;
  
  z-index: 10;
`;

function NavBar({ hasBg }: { hasBg?: boolean }) {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const listItems: NavItem[] = [
    {
      displayName: 'Home',
      link: '/',
    },
    {
      displayName: 'Team',
      link: '/team',
    },
    {
      displayName: 'FAQ',
      link: '/faq',
    },
    {
      displayName: 'Join for 2022',
      link: 'https://join.wdcc.co.nz',
      highlight: true,
    },
  ].map((listItem) => {
    const isActive =
      listItem.link === '/'
        ? location.pathname.endsWith('/')
        : location.pathname.includes(listItem.link);
    return {
      isActive,
      ...listItem,
    };
  });

  const getListItems = () => {
    return listItems.map((item) => (
      <li>
        <a
          href={item.link}
          className={
            (item.isActive ? 'active' : '') +
            (item.highlight ? ' highlight' : '')
          }
        >
          {item.displayName}
        </a>
      </li>
    ))
  }

  const handleStateChange = () => {
    setMenuOpen(!isMenuOpen);
  }

  return (
    <Container className={hasBg ? 'dark' : ''}>

      <span id='menu' onClick={handleStateChange}>
        <i className="fa-solid fa-bars"></i>
      </span>

      <ul className={'hori-nav'}>
        {getListItems()}
      </ul>

      <a href={'/'}>
        <Logo src={logo} alt={'Logo'} />
      </a>


      <FullScreenMenu isOpen={isMenuOpen} toggle={handleStateChange}>
        {getListItems()}
      </FullScreenMenu>
    </Container>
  );
}

export default NavBar;