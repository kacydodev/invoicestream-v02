import type { SetURLSearchParams } from 'react-router';
import { TableHeader } from './TableHeader';
import { TableRows } from './TableRow';
import type { InvoiceRowType } from '../../utils/types';
import { TableSearch } from './DashboardHeader';

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
			<TableSearch setParams={setParams} className='flex w-full' />
			<TableHeader headers={headers} />
			<TableRows invoices={invoices} />
		</div>
	);
}
