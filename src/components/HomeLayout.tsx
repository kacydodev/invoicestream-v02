import { Outlet } from 'react-router';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function HomeLayout() {
	return (
		<>
			<Sidebar />
			<Outlet />
			<Footer />
		</>
	);
}
