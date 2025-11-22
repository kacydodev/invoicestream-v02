import ErrorPage from './ErrorPage';
import { useGetInvoices } from '../hooks/useGetInvoices';
import { useSearchParams } from 'react-router';
import { InvoiceTable } from '../components/table/InvoiceTable';

export default function DashboardPage() {
	const [params, setParams] = useSearchParams('');
	const { data, error } = useGetInvoices(params);

	if (error instanceof Error) return <ErrorPage error={error} />;

	return (
		<>
			<main>
				{data && (
					<InvoiceTable
						invoices={data.invoices}
						count={data.length}
						setParams={setParams}
					/>
				)}
				{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
			</main>
		</>
	);
}
