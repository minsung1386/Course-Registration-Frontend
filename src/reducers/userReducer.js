const initialState = {
	data: 'none',
};

function userReducer(state = initialState, action) {
	switch (action.type) {
		case 'TEST':
			return {
				...state,
				data: action.payload,
			};
		default:
			return state;
	}
}

export default userReducer;
