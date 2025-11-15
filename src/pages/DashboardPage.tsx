import ErrorPage from './ErrorPage';
import { useState } from 'react';
import { useGetInvoices } from '../hooks/useGetInvoices';

export default function DashboardPage() {
	const [params, setParams] = useState(new URLSearchParams());
	const { data, error } = useGetInvoices(params);

	if (error instanceof Error) return <ErrorPage error={error} />;

	return (
		<>
			<main>
				Dashboard
				<div className='space-x-8'>
					<button
						className='btn'
						onClick={() =>
							setParams((prev) => {
								prev.set('status', 'pending');
								return prev;
							})
						}
					>
						set pending
					</button>
					<button
						className='btn'
						onClick={() =>
							setParams((prev) => {
								prev.set('status', 'draft');
								return prev;
							})
						}
					>
						set draft
					</button>
					<button
						className='btn'
						onClick={() =>
							setParams((prev) => {
								prev.delete('status');
								return prev;
							})
						}
					>
						remove status filter
					</button>
				</div>
				<pre>{JSON.stringify(data, null, 2)}</pre>
				{/* <Header count={count || 0} />
				{error ? <Error error={error} /> : <Invoices data={data} />} */}
			</main>
		</>
	);
}
