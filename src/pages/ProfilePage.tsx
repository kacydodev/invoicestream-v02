import { useParams } from 'react-router';

export default function ProfilePage() {
	const params = useParams();
	return (
		<main>
			<pre>{JSON.stringify(params, null, 2)}</pre>
		</main>
	);
}
