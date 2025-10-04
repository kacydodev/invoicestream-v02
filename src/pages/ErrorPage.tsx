import type { ErrorResponse } from 'react-router';

interface ErrorPage {
	error?: ErrorResponse | object | null;
	code?: string;
}

export default function ErrorPage({ error }: ErrorPage) {
	// const params = useParams();
	return (
		<main>
			error
			<pre>{JSON.stringify(error, null, 2)}</pre>
		</main>
	);
}
