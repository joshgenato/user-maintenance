import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import UserForm from './UserForm';

const StyledTableCell = withStyles((theme) => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

function createData(username, firstname, middlename, lastname, email) {
	return { username, firstname, middlename, lastname, email };
}

const useStyles = makeStyles((theme) => ({
	table: {
		minWidth: 700,
	},
	root: {
		marginTop: theme.spacing(1),
	},
}));

export default function UserTable(props) {
	const classes = useStyles();
	const { data, updateUser, deleteUser, reloadTable } = props;
	const [selectedUser, setSelectedUser] = useState();
	const [openDialog, setOpenDialog] = useState(false);

	const handleEdit = (selectedUser) => {
		setSelectedUser(selectedUser);
		setOpenDialog(true);
	};

	const handleDelete = (selectedUser) => {
		console.log(selectedUser);
		//setSelectedUser(selectedUser);
		deleteUser(selectedUser);
		reloadTable();
	};

	return (
		<>
			<UserForm
				dialogTitle='Edit User'
				open={openDialog}
				setOpen={setOpenDialog}
				registerUser={updateUser}
				current={selectedUser}
			/>

			<TableContainer className={classes.root} component={Paper}>
				<Table className={classes.table} aria-label='customized table'>
					<TableHead>
						<TableRow>
							<StyledTableCell>Username</StyledTableCell>
							<StyledTableCell align='right'>First Name</StyledTableCell>
							<StyledTableCell align='right'>Middle Name</StyledTableCell>
							<StyledTableCell align='right'>Last Name</StyledTableCell>
							<StyledTableCell align='right'>Email</StyledTableCell>
							<StyledTableCell align='right'>Action</StyledTableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row) => (
							<StyledTableRow key={row.username}>
								<StyledTableCell component='th' scope='row'>
									{row.username}
								</StyledTableCell>
								<StyledTableCell align='right'>{row.firstname}</StyledTableCell>
								<StyledTableCell align='right'>
									{row.middlename}
								</StyledTableCell>
								<StyledTableCell align='right'>{row.lastname}</StyledTableCell>
								<StyledTableCell align='right'>{row.email}</StyledTableCell>
								<StyledTableCell align='right'>
									<Button
										variant='contained'
										color='primary'
										onClick={() => handleEdit(row)}>
										Edit
									</Button>
									<Button
										variant='contained'
										color='secondary'
										onClick={() => handleDelete(row)}>
										Delete
									</Button>
								</StyledTableCell>
							</StyledTableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
}
