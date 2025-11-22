import type React from 'react';

interface TableHeader extends React.HTMLAttributes<HTMLDivElement> {
	headers: string[];
}

export function TableHeader({ headers }: TableHeader) {
	return (
		<div className='grid grid-rows-subgrid grid-cols-(--invoice-grid-row) [&_div]:px-3 [&_div]:py-2'>
			{headers.map((item, idx) => {
				return <div key={`header-${idx}`}>{item}</div>;
			})}
		</div>
	);
}
