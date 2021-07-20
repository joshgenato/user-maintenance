import { types } from './_types';

export const actions = {
	get_users: (users) => ({
		type: types.GET_USERS,
		value: users,
	}),
	register_user: (user) => ({
		type: types.REGISTER_USER,
		value: user,
	}),
	clear_user: () => ({
		type: types.CLEAR_USER,
		value: null,
	}),
};
