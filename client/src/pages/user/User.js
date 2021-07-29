import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import useUsers from '../../context/users/useUsers';
import Alert from '@material-ui/lab/Alert';
import UserTable from './UserTable';
import { Container } from '@material-ui/core';
import UserForm from './UserForm';
const User = () => {
	const [openDialog, setOpenDialog] = useState(false);
	const [alert, setAlert] = useState({
		type: '',
		msg: '',
	});
	const useContext = useUsers();
	const {
		registerUser,
		clearUser,
		clearError,
		getUsers,
		updateUser,
		deleteUser,
		userState,
	} = useContext;

	const handleClickOpen = () => {
		clearUser();
		setOpenDialog(true);
	};

	const ShowAlert = (type, msg) => {
		setTimeout(() => {
			setAlert({ type: '', msg: '' });
			clearError();
		}, 5000);
		return <Alert severity={type}>{msg}</Alert>;
	};

	useEffect(() => {
		if (userState.user) {
			if (userState.user.status === 200) {
				setAlert({ type: 'success', msg: 'User was successfully saved' });
				getUsers();
			} else if (userState.user.status === 401) {
				setAlert({ type: 'error', msg: userState.user.data });
			} else {
				setAlert({ type: 'error', msg: 'System Error, Please try again.' });
			}
		}
	}, [userState.user]);

	useEffect(() => {
		if (userState.error) {
			setAlert({ type: 'error', msg: userState.error.statusText });
		}
	}, [userState.error]);

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<>
			<UserForm
				dialogTitle='Create User'
				open={openDialog}
				setOpen={setOpenDialog}
				registerUser={registerUser}
				current={userState.user}
			/>
			<h1>User Page</h1>

			{alert.type != '' && ShowAlert(alert.type, alert.msg)}

			<Button variant='contained' color='primary' onClick={handleClickOpen}>
				Create User
			</Button>
			{userState?.users && (
				<UserTable
					data={userState.users.data}
					updateUser={updateUser}
					deleteUser={deleteUser}
					reloadTable={getUsers}
				/>
			)}
		</>
	);
};

export default User;
