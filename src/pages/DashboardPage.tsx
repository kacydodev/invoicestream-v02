import { useQuery } from '@tanstack/react-query';
import { getInvoices } from '../utils/queries/getInvoices';
import ErrorPage from './ErrorPage';

export default function DashboardPage() {
	const { data, error } = useQuery({
		queryKey: ['invoices'],
		queryFn: getInvoices,
	});

	if (error instanceof Error) return <ErrorPage error={error} />;

	return (
		<>
			<main>
				Dashboard
				<pre>{JSON.stringify(data, null, 2)}</pre>
				{/* <Header count={count || 0} />
				{error ? <Error error={error} /> : <Invoices data={data} />} */}
			</main>
		</>
	);
}
