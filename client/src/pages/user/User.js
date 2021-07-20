import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CreateUser from './CreateUser';
import useUsers from '../../context/users/useUsers';
import Alert from '@material-ui/lab/Alert';
const User = () => {
	const [openDialog, setOpenDialog] = useState(false);
	const [showAlert, setShowAlert] = useState(false);

	const useContext = useUsers();
	const { registerUser, clearUser, userState } = useContext;

	const handleClickOpen = () => {
		clearUser();
		setOpenDialog(true);
	};

	const ShowAlert = (type, msg) => {
		setShowAlert(true);
		return <Alert severity={type}>{msg}</Alert>;
	};

	useEffect(() => {
		console.log(userState.user);
		if (userState.user) {
			setShowAlert(true);
			setTimeout(() => setShowAlert(false), 5000);
		}
	}, [userState.user]);

	return (
		<>
			<CreateUser
				open={openDialog}
				setOpen={setOpenDialog}
				registerUser={registerUser}
				current={userState.user}
			/>
			<h1>User Page</h1>
			{userState.user &&
				showAlert &&
				(userState.user.status === 200 ? (
					<Alert severity='success'>User was successfully saved</Alert>
				) : (
					<Alert severity='error'>{userState.user.data}</Alert>
				))}
			<Button variant='contained' color='primary' onClick={handleClickOpen}>
				Create User
			</Button>
		</>
	);
};

export default User;
