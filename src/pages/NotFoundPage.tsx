import { useLocation, useParams } from 'react-router';

export default function NotFoundPage() {
	const location = useLocation();
	const params = useParams();

	return (
		<main>
			<pre>{JSON.stringify(location, null, 2)}</pre>
			<pre>{JSON.stringify(params, null, 2)}</pre>
		</main>
	);
}
