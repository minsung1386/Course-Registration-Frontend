import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LoginContainer from './LoginContainer';
import RegisterContainer from './RegisterContainer';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 15vh;
`;

function LoginWrapper() {
	const { toggleLogin } = useSelector((state) => state.user);

	return <Wrapper>{toggleLogin ? <LoginContainer /> : <RegisterContainer />}</Wrapper>;
}

export default LoginWrapper;
