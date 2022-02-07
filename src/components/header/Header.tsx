// const Header = () => {

import styled from "styled-components";

//   return (
//     <header>
//       <h1>Todo List</h1>
//     </header>
//   )
// }

const Header = styled.header`
  width: 1024px;
  margin: auto;
  border-bottom: 2px solid rgb(25, 113, 194);
  font-size: 3rem;
  font-weight: bold;
  padding: 1rem 0rem;
  color: rgb(25, 113, 194);

  @media (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    font-size: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    font-size: 1.5rem;
    padding: 0.6rem 0rem;
  }
`

export default Header
