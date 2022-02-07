import React from 'react';
import styled from 'styled-components';

interface InitiativeCardProps {
  photo: any,
  description: string,
  title: string
}

const Container = styled.div`
  
  position: relative;
  margin: 0 20px;
  padding: 30px;
  
  width: 400px;
  max-width: 100%;
  min-width: 300px;
  
  &:nth-child(2n) {
    background-color: #f5f5f5;
  }
  
  div {
    height: 150px;
    width: 200px;
    margin: 0 auto 50px auto;
  }
  
  img {
    max-width: 100%;
    width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  
  h2 {
    text-align: center;
  }
  
  p {
    text-align: left;
    line-height: 2rem;
  }
`

function InitiativeCard({ title, description, photo }: InitiativeCardProps) {
  return (
    <Container>
      <div>
        <img src={photo} alt={title} />
      </div>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </Container>
  );
}

export default InitiativeCard;