import { Button, Input, SearchField } from 'react-aria-components';
import type { DashboardPropsInterface } from '../../utils/types';
import { StatusSelect } from './StatusSelect';
import { Search } from 'lucide-react';

export function DashboardHeader({ setParams }: DashboardPropsInterface) {
	return (
		<header className='flex gap-12 w-full'>
			<SearchField aria-label='Search Field' className='relative w-fit'>
				<Input placeholder='Search...' className='' />
				<Button type='submit' className='absolute right-0'>
					<Search />
				</Button>
			</SearchField>
			<StatusSelect setParams={setParams} />
		</header>
	);
}
