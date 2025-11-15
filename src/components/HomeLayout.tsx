import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import Footer from './Footer';
import ThemeProvider from '../context/ThemeProvider';

export default function HomeLayout() {
	return (
		<ThemeProvider>
			<Sidebar />
			<Outlet />
			<Footer />
		</ThemeProvider>
	);
}
