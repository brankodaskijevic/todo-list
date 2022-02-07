import styled from "styled-components";

const StatsContainer = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1024px;
  padding: 1.5rem 0rem;
  background-color: #f8f8f8;
  border-radius: 6px;

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

export default StatsContainer
