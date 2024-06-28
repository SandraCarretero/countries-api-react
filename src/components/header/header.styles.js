import styled from 'styled-components';

const StyledHeader = styled.header`
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-inline: 16px;
	box-shadow: -15px -15px 25px 0px black;
	color: ${({ $theme }) => (!$theme ? 'white' : '#111517')};
	background-color: ${({ $theme }) => (!$theme ? '#2B3844' : 'white')};
`;

const StyledHeaderTitle = styled.h1`
	font-weight: 900;
	font-size: 14px;
	line-height: 20px;
`;

const StyledButtonTheme = styled.button`
	font-family: 'Nunito Sans', sans-serif;
	font-size: 12px;
	font-weight: 700;
	border: none;
	color: ${({ $theme }) => (!$theme ? 'white' : '#111517')};
	background-color: transparent;
	cursor: pointer;
	display: flex;
	gap: 8px;
	padding: 0;
	line-height: 25px;
	vertical-align: baseline;
	user-select: none;

	& img {
		filter: ${({ $theme }) => (!$theme ? 'invert(1)' : 'invert(0)')};
	}
`;

export { StyledHeader, StyledHeaderTitle, StyledButtonTheme };
