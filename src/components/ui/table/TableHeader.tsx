import type React from 'react';

interface TableHeader extends React.HTMLAttributes<HTMLDivElement> {
	headers: string[];
}

export function TableHeader({ headers, ...props }: TableHeader) {
	return (
		// <div className='grid grid-rows-subgrid grid-cols-(--invoice-grid-row)'>
		<div {...props}>
			{headers.map((item, idx) => {
				return <div key={`header-${idx}`}>{item}</div>;
			})}
		</div>
	);
}
