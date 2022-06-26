import styled from "styled-components";

const Header = styled.header`
	width: 1024px;
	margin: auto;
	text-align: center;
	font-size: 3rem;
	font-weight: bold;
	padding: 3rem 0 2rem 0;
	color: #3c5582;
	
	@media (max-width: ${({ theme }) => theme.tablet}) {
		font-size: 2rem;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		font-size: 1.5rem;
		padding: 0.6rem 0rem;
		background-color: white;
	}
`

export default Header
