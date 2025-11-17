import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import {
	Select,
	Label,
	Button,
	SelectValue,
	Popover,
	ListBox,
	ListBoxItem,
} from 'react-aria-components';
import {
	status,
	type DashboardPropsInterface,
	type StatusType,
} from '../../utils/types';

export function StatusSelect({ setParams }: DashboardPropsInterface) {
	const [currentStatus, setCurrentStatus] = useState('');
	console.log('currentStatus:', currentStatus);

	return (
		<Select
			// value={currentStatus}
			// TODO: Fix this TS error
			onChange={(selected) => setCurrentStatus(selected)}
		>
			{/* Label is needed for accessibility. DO NOT REMOVE  */}
			<Label aria-hidden hidden>
				Select Status
			</Label>
			<Button>
				<SelectValue />
				<span aria-hidden='true'>
					<ChevronDown className='inline-block' />
				</span>
			</Button>
			<Popover>
				<ListBox>
					{status.map((item) => (
						<ListBoxItem key={item} id={item}>
							{item}
						</ListBoxItem>
					))}
				</ListBox>
			</Popover>
		</Select>
	);
}
