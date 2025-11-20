import {
	Table,
	TableHeader,
	TableBody,
	Column,
	Row,
	Cell,
} from 'react-aria-components';
import type { invoiceRowType } from '../../utils/types';

export function DashboardTable({ invoices }: { invoices: invoiceRowType[] }) {
	const columnItems = Object.keys(invoices[0]).filter(
		(item) => item !== 'description'
	);
	return (
		<Table aria-label='Invoices Table' className='w-full'>
			<TableHeader className=''>
				{/* <Column>Header 1</Column>
					<Column isRowHeader>Header 2</Column> */}

				{columnItems.map((item, idx) => {
					return (
						<Column key={item} isRowHeader={idx === 0} className=''>
							{item}
						</Column>
					);
				})}
			</TableHeader>
			<TableBody>
				{invoices.map((invoice) => {
					const {
						secondaryId,
						paymentDue,
						status,
						total,
						client: { name },
					} = invoice;
					return (
						<Row key={secondaryId}>
							<Cell>{secondaryId}</Cell>
							<Cell>{paymentDue}</Cell>
							<Cell>{status}</Cell>
							<Cell>{total}</Cell>
							<Cell>{name}</Cell>
						</Row>
					);
				})}
			</TableBody>
		</Table>
	);
}
