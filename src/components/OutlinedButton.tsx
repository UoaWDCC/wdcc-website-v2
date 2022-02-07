import styled from 'styled-components';

const OutlinedButton = styled.a`
  padding: 10px 20px;
  display: inline-block;

  border-radius: 5px;
  border: 3px solid inherit;
  font-weight: bold;
  text-decoration: none;

  transition-duration: 0.2s;

  &:hover {
    color: rgb(29, 96, 157);
    border-color: rgb(29, 96, 157);
    transition-duration: 0.2s;
  }
`;

export default OutlinedButton;