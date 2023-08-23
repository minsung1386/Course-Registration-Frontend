const initialState = {
	// 랜딩 페이지의 로그인/회원가입 토글
	toggleLogin: true,
	// JWT token
	token: '',
	// 학생 정보
	student: {
		name: '',
		major: '',
		idNum: '',
		availableCredit: 0,
	},
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case 'TOGGLE_LOGIN':
			return {
				...state,
				toggleLogin: action.payload,
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.payload,
			};
		case 'SET_STUDENT_INFO':
			return {
				...state,
				student: action.payload,
			};
		default:
			return state;
	}
}

export default userReducer;
