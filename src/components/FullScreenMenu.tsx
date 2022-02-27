import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface FullScreenMenuProps {
  children: ReactNode;
  isOpen: boolean;
  toggle: Function;
}

const Container = styled.div`

  &.hidden {
    display: none;
  }

  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;

  #cross {
    position: fixed;
    top: 50px;
    left: 50px;
    
    color: white;

    font-size: 2rem;

    cursor: pointer;

    z-index: 10;
  }

  background-color: rgb(29, 96, 157);

  display: grid;
  justify-content: center;
  align-items: center;

  ol {
    padding: 0;
    list-style: none;
    text-align: center;

    color: white;

    li {
      margin: 20px 0;
      display: block;
      text-align: center;

      font-size: 1.5rem;

      width: 200px;
    }

    a {
      text-decoration: none;
    }
  }

`;


function FullScreenMenu({ children, isOpen, toggle }: FullScreenMenuProps) {

  const exitButtonPressed = () => {
    console.log('Pressed');
    toggle();
  };

  return (
    <>
      <Container className={isOpen ? 'visible' : 'hidden'}>

        <span id='cross' onClick={exitButtonPressed}>
          <i  className='fa-solid fa-xmark' />
        </span>

        <div>
          <ol>
            {children}
          </ol>
        </div>


      </Container>
    </>
  );
}

export default FullScreenMenu;