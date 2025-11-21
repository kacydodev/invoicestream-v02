import type { SetURLSearchParams } from 'react-router';
import type { InvoiceRowType } from '../../../utils/types';
import { TableHeader } from './TableHeader';
import { TableRows } from './TableRow';
import { DashboardHeader } from '../DashboardHeader';

interface InvoiceTable {
	invoices: InvoiceRowType[];
	count: number;
	setParams: SetURLSearchParams;
}

export function InvoiceTable({ invoices, count = 1, setParams }: InvoiceTable) {
	const headers = ['ID', 'Due Date', 'Name', 'Total', 'Status'];
	const rowClass = `grid-rows-${count + 1}`;

	return (
		<div id='invoice-table' className={`grid ${rowClass} gap-4`}>
			<DashboardHeader setParams={setParams} className='flex w-full' />

			<TableHeader
				headers={headers}
				className='grid grid-rows-subgrid grid-cols-(--invoice-grid-row) [&_div]:px-3 [&_div]:py-2'
			/>

			<TableRows
				invoices={invoices}
				className='grid grid-rows-subgrid grid-cols-(--invoice-grid-row) rounded border border-ui-border text-left [&_div]:px-3 [&_div]:py-2'
			/>
		</div>
	);
}
