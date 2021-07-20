import * as APIRequest from '../../utils/helpers/APIRequest.helpers';

export const UserService = {
	registerUser,
};

async function registerUser(user) {
	try {
		return APIRequest.POST(`/api/auth/register`, {
			username: user.username,
			email: user.email,
			password: user.password,
		}).then((res) => {
			return res;
		});
	} catch (err) {}
}
