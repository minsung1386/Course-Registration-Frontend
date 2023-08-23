import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TextField, Button } from '@mui/material';
import { clickLogin } from 'actions/login';

const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
	box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const RegisterButton = styled(Button)`
	&& {
		background-color: #007bff;
		color: #fff;
	}
`;

function RegisterContainer() {
	const dispatch = useDispatch();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [name, setName] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (password !== password2) {
			alert('비밀번호가 일치하지 않습니다.');
		} else {
			const userInformation = { username, password, name };

			const response = await axios.post('/api/signup', userInformation);

			if (response.status === 200) {
				alert('회원가입이 성공했습니다!');
			} else {
				alert('회원가입이 실패했습니다.');
			}
		}
	};

	const handleClickLogin = () => {
		dispatch(clickLogin());
	};

	return (
		<LoginForm onSubmit={handleSubmit}>
			<h2>회원 가입</h2>
			<TextField
				sx={{ width: 500 }}
				label="username"
				variant="outlined"
				onChange={(e) => setUsername(e.target.value)}
				required
			/>
			<TextField
				label="password"
				type="password"
				variant="outlined"
				onChange={(e) => setPassword(e.target.value)}
				required
			/>
			<TextField
				label="password2"
				type="password"
				variant="outlined"
				onChange={(e) => setPassword2(e.target.value)}
				required
			/>
			<TextField
				label="name"
				variant="outlined"
				onChange={(e) => setName(e.target.value)}
				required
			/>
			<RegisterButton type="submit" variant="contained">
				회원가입
			</RegisterButton>
			<Button onClick={handleClickLogin}>로그인</Button>
		</LoginForm>
	);
}

export default RegisterContainer;
