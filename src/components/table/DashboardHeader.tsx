import { Button, Input, SearchField } from 'react-aria-components';
import { Search } from 'lucide-react';
import type { SetURLSearchParams } from 'react-router';
import type { HTMLProps } from 'react';
import { StatusSelect } from './StatusSelect';

interface TableSearch extends HTMLProps<HTMLElement> {
	setParams: SetURLSearchParams;
}

export function TableSearch({ setParams, ...props }: TableSearch) {
	return (
		<header {...props}>
			<SearchField
				aria-label='Search Field'
				className='relative w-fit h-fit bg-ui-background'
			>
				<Input placeholder='Search...' className='h-full px-3 py-1' />
				<Button type='submit' className='absolute right-2 h-full my-auto'>
					<Search />
				</Button>
			</SearchField>
			<StatusSelect setParams={setParams} />
		</header>
	);
}
