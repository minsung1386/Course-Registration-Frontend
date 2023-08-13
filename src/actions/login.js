import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// 로그인 버튼 클릭
export function login(userInformation) {
	axios
		.post('api/login', userInformation)
		.then((response) => {
			alert(response);
		})
		.catch((error) => {
			alert(error.message);
		});
}

// 로그아웃 버튼 클릭
export function logout() {}

export function getData() {
	const dispatch = useDispatch();
	axios.defaults.baseURL = 'http://localhost:8080';

	useEffect(() => {
		axios
			.get('/api/test')
			.then((response) => dispatch(saveData(response.data)))
			.catch((error) => console.log(error));
	}, []);
}

export function saveData(data) {
	return {
		type: 'TEST',
		payload: data,
	};
}
