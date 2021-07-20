import { createTheme, colors } from '@material-ui/core';
import shadows from './shadows';
import typography from './typography';

const theme = createTheme({
	palette: {
		background: {
			default: '#F4F6F8',
			paper: colors.common.white,
		},
		primary: {
			contrastText: '#ffffff',
			main: '#1a2327',
		},
	},
	shadows,
});

export default theme;
