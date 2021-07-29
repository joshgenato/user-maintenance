import * as APIRequest from '../../utils/helpers/APIRequest.helpers';

export const UserService = {
	registerUser,
	getUsers,
	updateUser,
	deleteUser,
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

async function updateUser(user) {
	try {
		return APIRequest.PUT(`/api/users/${user._id}`, {
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

async function deleteUser(user) {
	console.log(user);
	try {
		return APIRequest.DELETE(`/api/users/${user._id}`).then((res) => {
			console.log(res);
			return res;
		});
	} catch (err) {}
}
