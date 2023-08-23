import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

// Toggle button
export function clickLogin() {
	return {
		type: 'TOGGLE_LOGIN',
		payload: true,
	};
}

// Toggle button
export function clickRegister() {
	return {
		type: 'TOGGLE_LOGIN',
		payload: false,
	};
}

// 로그인 성공시 JWT 저장
export function setJwtToken(token) {
	return {
		type: 'SET_TOKEN',
		payload: token,
	};
}

// 로그아웃 버튼 클릭
export function logout() {}
