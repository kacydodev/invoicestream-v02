import { useLocation } from 'react-router';

export default function DashboardPage() {
	const params = useLocation();
	return (
		<main>
			<pre>{JSON.stringify(params, null, 2)}</pre>
		</main>
	);
	return (
		<>
			<main>
				Dashboard
				{/* <Header count={count || 0} />
				{error ? <Error error={error} /> : <Invoices data={data} />} */}
			</main>
		</>
	);
}
