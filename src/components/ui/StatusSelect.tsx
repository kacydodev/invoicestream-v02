import { ChevronDown, X } from 'lucide-react';
import {
	Select,
	Label,
	Button,
	SelectValue,
	Popover,
	ListBox,
	ListBoxItem,
	type Key,
} from 'react-aria-components';
import { type DashboardPropsInterface } from '../../utils/types';
import { useGetStatuses } from '../../hooks/useGetStatuses';
import ErrorPage from '../../pages/ErrorPage';
import { useState } from 'react';
import classNames from 'classnames';
import { useSearchParams } from 'react-router';

// TODO: refactor to smaller chunk?
export function StatusSelect({ setParams }: DashboardPropsInterface) {
	const { data: statuses, error } = useGetStatuses();
	const [searchParams] = useSearchParams();
	const [label, setLabel] = useState<string | null>(
		searchParams.get('status') || null
	);
	const filterButton = classNames({
		'p-1 bg-primary-darker': true,
		hidden: !label,
	});

	if (error) return <ErrorPage />;

	function handleParamChange(selected?: Key | null) {
		const params = new URLSearchParams();
		if (typeof selected === 'string') params.set('status', selected);
		setParams(params);
	}

	return (
		<div className='flex items-center gap-2'>
			<Select onChange={handleParamChange}>
				{/* DO NOT REMOVE */}
				{/* Label is needed for accessibility. */}
				<Label aria-hidden hidden>
					Select Status
				</Label>
				<Button className='w-28 pl-3 space-x-3 text-left capitalize'>
					<SelectValue>{label || 'Status'}</SelectValue>
					<span aria-hidden='true'>
						<ChevronDown className='inline-block' />
					</span>
				</Button>
				<Popover>
					<ListBox className='w-28 bg-primary-darker border-3 capitalize border-primary-darkest [&_*]:p-3'>
						{statuses &&
							statuses.map((status) => (
								<ListBoxItem
									key={status}
									id={status}
									onClick={() => setLabel(status)}
								>
									{status}
								</ListBoxItem>
							))}
					</ListBox>
				</Popover>
			</Select>

			<Button
				onClick={() => {
					handleParamChange();
					setLabel(null);
				}}
				className={filterButton}
			>
				<X />
			</Button>
		</div>
	);
}
