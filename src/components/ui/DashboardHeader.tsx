import { Button, Input, SearchField } from 'react-aria-components';
import type { DashboardPropsInterface } from '../../utils/types';
import { StatusSelect } from './StatusSelect';
import { Search } from 'lucide-react';

export function DashboardHeader({ setParams }: DashboardPropsInterface) {
	return (
		<header className='flex gap-12'>
			<SearchField className='relative w-fit'>
				<Input placeholder='Search...' className='' />
				<Button className='absolute right-0'>
					<Search />
				</Button>
			</SearchField>
			<StatusSelect setParams={setParams} />
		</header>
	);
}
