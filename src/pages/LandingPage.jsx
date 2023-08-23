import React from 'react';
import styled from 'styled-components';
import LoginWrapper from 'components/Landing/LoginWrapper';

const TITLE = 'Sugang System - SW Coach Program';

const IntroWrapper = styled.div`
	justifycontent: center;
	alignitems: center;
`;

const Title = styled.h1`
	text-align: center;
	font-size: 40px;

	width: 60rem;
	margin: 5rem auto 2rem auto;
`;

function LandingPage() {
	return (
		<IntroWrapper>
			<Title>{TITLE}</Title>
			<LoginWrapper />
		</IntroWrapper>
	);
}

export default LandingPage;
