import { Button, type ButtonProps } from 'react-aria-components';
import type { InvoiceRowType } from '../../../utils/types';
import { ChevronRight } from 'lucide-react';

interface TableRows extends ButtonProps {
	invoices: InvoiceRowType[];
}

export function TableRows({ invoices, ...props }: TableRows) {
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
					<Button key={id} onClick={() => console.log(id)} {...props}>
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
