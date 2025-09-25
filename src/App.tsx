import { Routes, Route } from 'react-router';
import HomeLayout from './components/HomeLayout';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import ProfileEditPage from './pages/ProfileEditPage';
import InvoicePage from './pages/InvoicePage';
import InvoiceEditPage from './pages/InvoiceEditPage';
import ErrorPage from './pages/ErrorPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
	return (
		<>
			<Routes>
				<Route element={<HomeLayout />}>
					{/* Displays login/signup */}
					<Route index element={<HomePage />} />
					{/* Displays all invoices (PRIVATE) */}
					<Route path='dashboard' element={<DashboardPage />} />
					{/* Displays user profile (PRIVATE) */}
					<Route path='user'>
						<Route path=':id' element={<ProfilePage />} />
						<Route path='edit'>
							<Route path=':id' element={<ProfileEditPage />} />
						</Route>
					</Route>
					{/* Displays individual invoice (PRIVATE) */}
					<Route path='invoice'>
						<Route path=':id' element={<InvoicePage />} />
						<Route path='edit'>
							<Route path=':id' element={<InvoiceEditPage />} />
						</Route>
					</Route>
					{/* Displays error message */}
					<Route path='error'>
						<Route path=':code' element={<ErrorPage />} />
					</Route>
					{/* Display 'page could not be found' */}
					<Route path='*' element={<NotFoundPage />} />
					{/* <Route path='' element={} /> */}
				</Route>
			</Routes>
		</>
	);
}
