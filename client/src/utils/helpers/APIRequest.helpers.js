import axios from 'axios';

export const POST = async (url, data) => {
	return await axios
		.post(url, data)
		.then((res) => {
			return res;
		})
		.catch(function (error) {
			return error.response;
		});
};

function getCookie(cname) {
	var name = cname + '=';
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) === ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return '';
}
