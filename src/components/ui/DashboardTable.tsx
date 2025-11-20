import {
	Table,
	TableHeader,
	TableBody,
	Column,
	Row,
	Cell,
	Button,
} from 'react-aria-components';
import type { invoiceRowType } from '../../utils/types';
import classNames from 'classnames';
import { ChevronRight } from 'lucide-react';

export function DashboardTable({ invoices }: { invoices: invoiceRowType[] }) {
	const columnItems = Object.keys(invoices[0]).filter(
		(item) => item !== 'description'
	);

	const tableClassName = classNames({
		'w-full': false,
		'border-separate border-spacing-y-3': true,
		'[&_td,_&_th]:px-4 [&_td,_&_th]:py-3': true,
	});

	return (
		<Table
			aria-label='Invoices Table'
			selectionMode='multiple'
			className={tableClassName}
		>
			<TableHeader className='text-left'>
				{columnItems.map((item, idx) => {
					return (
						<Column key={item} isRowHeader={idx === 0} className=''>
							{item}
						</Column>
					);
				})}
				<Column />
			</TableHeader>
			<TableBody className='bg-primary-darker text-left'>
				{invoices.map((invoice) => {
					const {
						secondaryId,
						paymentDue,
						status,
						total,
						client: { name },
					} = invoice;
					return (
						<Row key={secondaryId} className=''>
							<Cell>{secondaryId}</Cell>
							<Cell>{paymentDue}</Cell>
							<Cell>{status}</Cell>
							<Cell>{total}</Cell>
							<Cell>{name}</Cell>
							<Cell>
								<Button>
									<ChevronRight />
								</Button>
							</Cell>
						</Row>
					);
				})}
			</TableBody>
		</Table>
	);
}
