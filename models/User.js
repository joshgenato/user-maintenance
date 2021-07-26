const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		firstname: {
			type: String,
			required: true,
			unique: false,
		},
		middlename: {
			type: String,
			required: false,
			unique: false,
		},
		lastname: {
			type: String,
			required: true,
			unique: false,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		profilePic: {
			type: String,
			default: '',
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
