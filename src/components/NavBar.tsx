import React from 'react';
import styled from 'styled-components';
import logo from '../resources/logos/primary_white_512.png';
import { useLocation } from 'react-router-dom';

interface NavItem {
  displayName: string,
  link: string,
  isActive?: boolean,
  highlight?: boolean
}

const Container = styled.div`
  &.dark {
    height: 160px;
    background-color: rgb(29, 96, 157);
  }
  
  ul {
    position: absolute;
    top: 65px;
    right: 250px;

    list-style: none;
    padding: 0;
    margin: 0 0 0 30px;
    text-align: right;

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
          color: #FFD166;
        }

        &.highlight {
          font-weight: bold;
        }
      }

      &::before {
        position: absolute;
        bottom: 0;

        content: "";
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
`;

const Logo = styled.img`
  position: absolute;
  top: 50px;

  // TODO: Make this dynamic
  right: 75px;

  width: 150px;
  height: auto;
`;


function NavBar({ hasBg }: { hasBg?: boolean }) {

  const location = useLocation();

  const listItems: NavItem[] = [
    {
      displayName: 'Home',
      link: '/',
    },
    // {
    //   displayName: 'Projects',
    //   link: '/projects',
    // },
    {
      displayName: 'About Us',
      link: '/about',
    },
    {
      displayName: "Join for 2022",
      link: "https://join.wdcc.co.nz",
      highlight: true,
    }
  ].map((listItem) => {

    const isActive = listItem.link === '/' ? location.pathname.endsWith('/') : location.pathname.includes(listItem.link);
    return {
      isActive,
      ...listItem
    }
  });

  return (
    <Container className={hasBg ? 'dark' : ''}>
      <ul>
        {listItems.map((item) => (
          <li>
            <a href={item.link} className={(item.isActive ? 'active' : '') + (item.highlight ? ' highlight' : '')}>
              {item.displayName}
            </a>
          </li>
        ))}
      </ul>

      <a href={'/'}><Logo src={logo} alt={'Logo'} /></a>
    </Container>
  );
}

export default NavBar;