import { useContext } from 'react';
import { UserService } from '../../services/users/userService';
import { StoreContext } from '../Store';

const useUsers = () => {
	const { state, actions, dispatch } = useContext(StoreContext);

	const getUsers = () => {
		console.log('getUsers');
		UserService.getUsers().then((res) => {
			dispatch(actions.users.get_users(res));
		});
	};

	const registerUser = (user) => {
		UserService.registerUser(user).then((res) => {
			if (res.status === 200 || res.status === 401) {
				dispatch(actions.users.register_user(res));
			} else {
				dispatch(actions.users.set_error(res));
			}
		});
	};

	const updateUser = (user) => {
		UserService.updateUser(user).then((res) => {
			if (res.status === 200 || res.status === 401) {
				dispatch(actions.users.update_user(res));
			} else {
				dispatch(actions.users.set_error(res));
			}
		});
	};

	const deleteUser = (user) => {
		UserService.deleteUser(user).then((res) => {
			return res;
		});
	};

	const clearUser = () => {
		dispatch(actions.users.clear_user());
	};

	const clearError = () => {
		dispatch(actions.users.set_error(null));
	};

	return {
		userState: state.users,
		getUsers,
		registerUser,
		clearUser,
		clearError,
		updateUser,
		deleteUser,
	};
};

export default useUsers;
