import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 1024px;
  padding: 2rem 0rem;
  margin: 0 auto;
  margin-bottom: 2em;
  background-color: #fff;
  box-shadow: 0px 2px 10px 1px #7d7d7d33;
  border-radius: 5px;
  gap: 0.5em;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    font-size: 1.5rem;
    padding: 0.6rem 0rem;
  }
`
