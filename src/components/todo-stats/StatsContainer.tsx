import styled from "styled-components";

export const StatsLegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    gap: 0.5em;
  }
`
