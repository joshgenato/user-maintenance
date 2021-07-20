import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';
import AppBar from './components/AppBar/AppBar';
import User from './pages/user/User';
import { Store } from './context/Store';
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Store>
				<AppBar>
					<User />
				</AppBar>
			</Store>
		</ThemeProvider>
	);
};

export default App;
