import styled from 'styled-components'

export const ScrollView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 1024px;
  max-height: 70vh;
  padding: 0.5rem 0rem;
  margin-left: 0.2em;
  margin-right: 0.2em;
  margin: 0 auto;
  margin-bottom: 0.4em;
  background-color: ${({ color }) => color ? `#${color}`: 'none'};
  color: #273049;
  /* gap: 0.5em; */
  overflow: auto;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    font-size: 1.5rem;
    padding: 0.6rem 0rem;
  }
`
