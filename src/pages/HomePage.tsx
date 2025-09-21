import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router';

export default function HomePage() {
	const params = useLocation();
	return (
		<main>
			<pre>{JSON.stringify(params, null, 2)}</pre>
		</main>
	);

	return (
		<>
			<main>
				<section>
					<Link to='/dashboard'>
						Dashboard
						<ArrowRight />
					</Link>
				</section>
			</main>
		</>
	);
}
