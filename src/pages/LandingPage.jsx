import React from 'react';
import styled from 'styled-components';
// import { useSelector } from 'react-redux';
import LoginContainer from 'components/Landing/LoginContainer';
import { getData } from 'actions/login';

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
	getData();

	// const { data } = useSelector((state) => state.user);

	return (
		<IntroWrapper>
			<Title>{TITLE}</Title>
			{/* <Title>{data}</Title> */}
			<LoginContainer />
		</IntroWrapper>
	);
}

export default LandingPage;
