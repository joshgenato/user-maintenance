import { useContext } from 'react';
import { UserService } from '../../services/users/userService';
import { StoreContext } from '../Store';

const useUsers = () => {
	const { state, actions, dispatch } = useContext(StoreContext);

	const getUsers = () => {
		dispatch(actions.users.get_users('test'));
	};

	const registerUser = (user) => {
		UserService.registerUser(user).then((res) => {
			dispatch(actions.users.register_user(res));
		});
	};

	const clearUser = () => {
		dispatch(actions.users.clear_user());
	};

	return {
		userState: state.users,
		getUsers,
		registerUser,
		clearUser,
	};
};

export default useUsers;
