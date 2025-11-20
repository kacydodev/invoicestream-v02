import ErrorPage from './ErrorPage';
import { useGetInvoices } from '../hooks/useGetInvoices';
import { DashboardHeader } from '../components/ui/DashboardHeader';
import { useSearchParams } from 'react-router';
import { DashboardTable } from '../components/ui/DashboardTable';

export default function DashboardPage() {
	const [params, setParams] = useSearchParams('');
	const { data, error } = useGetInvoices(params);

	if (error instanceof Error) return <ErrorPage error={error} />;

	return (
		<>
			<main>
				<DashboardHeader setParams={setParams} />

				{data && <DashboardTable invoices={data.invoices} />}

				{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
			</main>
		</>
	);
}
