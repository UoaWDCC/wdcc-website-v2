import styled from 'styled-components';

const Screen = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 50px 75px;
  
  overflow: hidden;
  
  @media (max-width: 700px) {
    padding: 50px 30px;
  }
`;

export default Screen;