import ErrorPage from './ErrorPage';
import { useState } from 'react';
import { useGetInvoices } from '../hooks/useGetInvoices';
import { DashboardHeader } from '../components/DashboardHeader';

export default function DashboardPage() {
	const [params, setParams] = useState(new URLSearchParams());
	const { data, error } = useGetInvoices(params);

	if (error instanceof Error) return <ErrorPage error={error} />;

	// setParams((prev) => {
	// 	prev.set('status', 'pending');
	// 	return prev;
	// });

	return (
		<>
			<main>
				<DashboardHeader />
				<pre>{JSON.stringify(data, null, 2)}</pre>
			</main>
		</>
	);
}
