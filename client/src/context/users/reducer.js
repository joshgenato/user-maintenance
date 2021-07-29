import { actions } from './_actions';
import { types } from './_types';

export const initialState = {
	users: null,
	user: null,
	error: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case types.GET_USERS:
			return {
				...state,
				users: action.value,
			};
		case types.REGISTER_USER:
			return {
				...state,
				user: action.value,
			};
		case types.CLEAR_USER:
			return {
				...state,
				user: action.value,
			};
		case types.SET_ERROR:
			return {
				...state,
				error: action.value,
			};
		case types.UPDATE_USER:
			return {
				...state,
				user: action.value,
			};
		default:
			return state;
	}
};

export default {
	initialState,
	actions,
	reducer,
};
