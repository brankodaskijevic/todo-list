import styled from "styled-components";

export const Button = styled.button`
	color: #f8f8f8;
	font-weight: bold;
	padding: 0.8em 2.5em;
	margin: 0.4em;
	border-radius: 15px;
	font-size: 0.8em;
	cursor: pointer;
	color: #3c5582;

	&:hover {
		transform: scale(0.98);
		filter: brightness(110%);
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		font-size: 0.5em;
		font-weight: normal;
	}
`
