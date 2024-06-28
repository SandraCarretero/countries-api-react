import styled from 'styled-components';

const StyledInfoContainer = styled.section`
	display: flex;
	flex-direction: column;
	margin-top: 64px;
	gap: 44px;
`;

const StyledInfoFlag = styled.div`
	max-width: 560px;
	border-radius: 8px;
	overflow: hidden;
`;

const StyledInfoName = styled.h1`
	margin-top: 0;
	font-size: 22px;
	font-weight: 900;
	color: ${({ $theme }) => (!$theme ? '#f2f2f2' : '#111517')};
`;

const StyledInfoFirst = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	color: ${({ $theme }) => (!$theme ? '#f2f2f2' : '#111517')};
`;

const StyledInfoData = styled.p`
	margin: 0;
`;

export {
	StyledInfoContainer,
	StyledInfoFlag,
	StyledInfoName,
	StyledInfoFirst,
	StyledInfoData
};
