const initialState = {
	toggleLogin: true,
	token: '',
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
		default:
			return state;
	}
}

export default userReducer;
