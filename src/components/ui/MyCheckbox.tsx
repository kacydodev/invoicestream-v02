import { Square, SquareCheck } from 'lucide-react';
import { Checkbox, type CheckboxProps } from 'react-aria-components';

export function MyCheckbox({
	children,
	...props
}: Omit<CheckboxProps, 'children'> & { children?: React.ReactNode }) {
	return (
		<Checkbox {...props}>
			{({ isSelected }) => {
				return (
					<>
						{isSelected ? (
							<SquareCheck className='inline-flex mr-2 mb-1' />
						) : (
							<Square className='inline-flex mr-2 mb-1' />
						)}
						{children}
					</>
				);
			}}
		</Checkbox>
	);
}
