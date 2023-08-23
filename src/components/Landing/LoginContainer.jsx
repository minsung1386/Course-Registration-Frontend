import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';
import { clickRegister, setJwtToken } from 'actions/login';

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
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		const userInformation = { username, password };
		const response = await axios.post('/api/authenticate', userInformation);

		if (response.status === 200) {
			dispatch(setJwtToken(response.data.token));
			navigate('/main');
		} else {
			alert('wtf error');
		}
	};

	const handleClickRegister = () => {
		dispatch(clickRegister());
	};

	return (
		<LoginForm onSubmit={handleSubmit}>
			<h2>로그인</h2>
			<TextField
				sx={{ width: 250 }}
				label="username"
				variant="outlined"
				onChange={(e) => setUsername(e.target.value)}
				required
			/>
			<TextField
				sx={{ width: 250 }}
				label="password"
				type="password"
				variant="outlined"
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<LoginButton type="submit" variant="contained">
				로그인
			</LoginButton>
			<Button onClick={handleClickRegister}>회원가입</Button>
		</LoginForm>
	);
}

export default LoginContainer;
