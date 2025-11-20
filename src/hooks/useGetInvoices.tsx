import { useQuery, type UseQueryResult } from '@tanstack/react-query';

export function useGetInvoices(params: URLSearchParams): UseQueryResult {
	const path = '/api/v03/invoice';
	const url = new URL(path, import.meta.env.VITE_API_URL);
	url.search = params.toString();

	return useQuery({
		queryKey: ['invoices', url],
		queryFn: async () => {
			const response = await fetch(url.toString());
			const invoices = await response.json();
			return invoices;
		},
	});
}
