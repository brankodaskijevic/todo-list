import styled from "styled-components";

export const ButtonBlock = styled.button`
  background-color: ${({ color }) => color ? 'rgb(224, 49, 49)' : 'rgb(25, 113, 194)'};
  color: white;
  font-weight: bold;
  padding: 0.6em 1.2em;
  border: none;
  border-radius: 6px;
  font-size: 1em;
  cursor: pointer;

  &:hover {
    transform: scale(0.98);
    filter: brightness(110%);
  }
`
