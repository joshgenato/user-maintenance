import * as APIRequest from '../../utils/helpers/APIRequest.helpers';

export const UserService = {
	registerUser,
	getUsers,
};

async function registerUser(user) {
	try {
		return APIRequest.POST(`/api/auth/register`, {
			username: user.username,
			firstname: user.firstname,
			middlename: user.middlename,
			lastname: user.lastname,
			email: user.email,
			password: user.password,
		}).then((res) => {
			return res;
		});
	} catch (err) {}
}
async function getUsers() {
	try {
		return APIRequest.GET(`/api/users/`).then((res) => {
			return res;
		});
	} catch (err) {}
}
