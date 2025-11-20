import ErrorPage from './ErrorPage';
import { useGetInvoices } from '../hooks/useGetInvoices';
import { DashboardHeader } from '../components/ui/DashboardHeader';
import { useSearchParams } from 'react-router';

export default function DashboardPage() {
	const [params, setParams] = useSearchParams('');
	const { data, error } = useGetInvoices(params);

	if (error instanceof Error) return <ErrorPage error={error} />;

	return (
		<>
			<main>
				<DashboardHeader setParams={setParams} />

				<pre>{JSON.stringify(data, null, 2)}</pre>
			</main>
		</>
	);
}
