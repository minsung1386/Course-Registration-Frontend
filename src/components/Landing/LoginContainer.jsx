import React from 'react';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';

const LoginWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 15vh;
`;

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const LoginButton = styled(Button)`
	&& {
		background-color: #007bff;
		color: #fff;
	}
`;

function LoginContainer() {
	return (
		<LoginWrapper>
			<LoginForm>
				<h2>로그인</h2>
				<TextField label="사용자 이름" variant="outlined" />
				<TextField label="비밀번호" type="password" variant="outlined" />
				<LoginButton variant="contained">로그인</LoginButton>
			</LoginForm>
		</LoginWrapper>
	);
}

export default LoginContainer;
