import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export function useGetStatuses(): UseQueryResult<string[]> {
	const path = '/api/v03/status';
	const url = new URL(path, import.meta.env.VITE_API_URL);

	return useQuery({
		queryKey: ['status', url],
		queryFn: async () => {
			const response = await fetch(url.href);
			const data = await response.json();
			return data;
		},
	});
}
