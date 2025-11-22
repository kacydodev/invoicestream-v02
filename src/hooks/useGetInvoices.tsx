import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import type { InvoiceRowType } from '../utils/types';

interface QueryResult {
	invoices: InvoiceRowType[];
	length: number;
}

export function useGetInvoices(
	params: URLSearchParams
): UseQueryResult<QueryResult> {
	const path = '/api/v03/invoice';
	const url = new URL(path, import.meta.env.VITE_API_URL);
	url.search = params.toString();

	return useQuery({
		queryKey: ['invoices', url],
		queryFn: async () => {
			const response = await fetch(url.toString());
			const data = await response.json();
			return data;
		},
	});
}
