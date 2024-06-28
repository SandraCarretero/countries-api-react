import styled from 'styled-components';

const StyledCardContainer = styled.section`
	padding-block: 52px;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
	gap: 40px;
	place-items: center;

	@media (min-width: 1024px) {
	}
`;

const StyledCard = styled.article`
	width: 264px;
	height: 336px;
	border-radius: 8px;
	overflow: hidden;
	box-shadow: 0px 0px 40px ${({ $theme }) => ($theme ? '#f2f2f2' : '#202C36')};
	color: ${({ $theme }) => (!$theme ? '#f2f2f2' : '#111517')};
	background-color: ${({ $theme }) => ($theme ? 'white' : '#2B3844')};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	cursor: pointer;
`;

const StyledFlag = styled.div`
	max-height: 160px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledCardInfo = styled.div`
	padding: 24px;
`;

const StyledCountryName = styled.h2`
	font-size: 18px;
	font-weight: 900;
	margin: 0;
	margin-bottom: 16px;
`;

const StyledCountryInfo = styled.p`
	font-size: 14px;
	margin: 0;
	margin-bottom: 8px;
`;

export {
	StyledCardContainer,
	StyledCard,
	StyledCardInfo,
	StyledCountryName,
	StyledCountryInfo,
	StyledFlag
};
