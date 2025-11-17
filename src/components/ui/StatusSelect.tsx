import { ChevronDown } from 'lucide-react';
import {
	Select,
	Label,
	Button,
	SelectValue,
	Popover,
	ListBox,
	ListBoxItem,
} from 'react-aria-components';
import { status, type DashboardPropsInterface } from '../../utils/types';

export function StatusSelect({ setParams }: DashboardPropsInterface) {
	return (
		<Select
			onChange={(selected) => {
				if (selected && typeof selected === 'string') {
					const params = new URLSearchParams();
					params.set('status', selected);
					setParams(params);
				}
			}}
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
