import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import MuiTextField from '@material-ui/core/TextField';
import { FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
});

const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant='h6'>{children}</Typography>
			{onClose ? (
				<IconButton
					aria-label='close'
					className={classes.closeButton}
					onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

const TextField = withStyles((theme) => ({
	root: {
		margin: 0,
		paddingBottom: theme.spacing(2),
	},
}))(MuiTextField);

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		flexDirection: 'column',
		margin: 'auto',
		width: 'fit-content',
		justifyContent: 'space-between',
	},
	formControl: {
		marginTop: theme.spacing(2),
		minWidth: 300,
		flexDirection: 'row',
		verticalAlign: 'top',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
	},
}));

const UserForm = (props) => {
	const classes = useStyles();

	const { open, setOpen, registerUser, current, dialogTitle } = props;

	const [user, setUser] = useState({
		username: '',
		firstname: '',
		middlename: '',
		lastname: '',
		email: '',
		password: '',
	});

	const { username, firstname, middlename, lastname, email, password } = user;

	const handleClose = () => {
		setOpen(false);
	};

	const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

	const onSubmit = (e) => {
		e.preventDefault();
		registerUser(user);
		setOpen(false);
	};

	useEffect(() => {
		if (current) {
			console.log(current);
			setUser(current);
		} else {
			setUser({
				username: '',
				firstname: '',
				middlename: '',
				lastname: '',
				email: '',
				password: '',
			});
		}
	}, [current]);

	return (
		<div>
			<Dialog
				onClose={handleClose}
				aria-labelledby='customized-dialog-title'
				open={open}>
				<DialogTitle id='customized-dialog-title' onClose={handleClose}>
					{dialogTitle}
				</DialogTitle>
				<form className={classes.form} noValidate onSubmit={onSubmit}>
					<DialogContent dividers>
						<FormControl className={classes.formControl}>
							<TextField
								name='username'
								variant='outlined'
								label='Username'
								onChange={onChange}
								autoComplete='off'
								value={username}
							/>
							<TextField
								name='firstname'
								variant='outlined'
								label='First Name'
								onChange={onChange}
								autoComplete='off'
								value={firstname}
							/>
							<TextField
								name='middlename'
								variant='outlined'
								label='Middle Name'
								onChange={onChange}
								autoComplete='off'
								value={middlename}
							/>
							<TextField
								name='lastname'
								variant='outlined'
								label='Last Name'
								onChange={onChange}
								autoComplete='off'
								value={lastname}
							/>
							<TextField
								name='email'
								variant='outlined'
								label='Email'
								onChange={onChange}
								autoComplete='off'
								value={email}
							/>
							<TextField
								name='password'
								variant='outlined'
								label='Password'
								onChange={onChange}
								type='password'
								autoComplete='off'
								value={password}
							/>
						</FormControl>
					</DialogContent>
					<DialogActions>
						<Button autoFocus type='submit' color='primary'>
							Save changes
						</Button>
					</DialogActions>
				</form>
			</Dialog>
		</div>
	);
};

export default UserForm;
