import { Button, type ButtonProps } from 'react-aria-components';
import type { InvoiceRowType } from '../../../utils/types';
import { ChevronRight } from 'lucide-react';

interface TableRows extends ButtonProps {
	invoices: InvoiceRowType[];
}

export function TableRows({ invoices }: TableRows) {
	return (
		<>
			{invoices.map((invoice) => {
				const {
					id,
					secondaryId,
					paymentDue,
					status,
					total,
					client: { name },
				} = invoice;
				return (
					<Button
						key={id}
						onClick={() => console.log(id)}
						className='grid grid-rows-subgrid grid-cols-(--invoice-grid-row) rounded border border-ui-border text-left cursor-pointer [&_div]:px-3 [&_div]:py-2'
					>
						<div>{secondaryId}</div>
						<div>{paymentDue}</div>
						<div>{name}</div>
						<div>{total}</div>
						<div>{status}</div>
						<ChevronRight className='mx-auto' />
					</Button>
				);
			})}
		</>
	);
}
