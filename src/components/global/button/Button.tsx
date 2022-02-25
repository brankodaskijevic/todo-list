import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ color }) => color ? color : '#273049'};
  color: #E3E9F0;
  font-weight: bold;
  padding: 0.8em 2.5em;
  /* max-height: 36px; */
  margin: 0.4em;
  border: none;
  border-radius: 4px;
  font-size: 0.8em;
  cursor: pointer;

  &:hover {
    transform: scale(0.98);
    filter: brightness(110%);
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    font-size: 0.5em;
    font-weight: normal;
  }
`
