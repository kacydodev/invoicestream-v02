import classNames from 'classnames';
import { Button, type ButtonProps } from 'react-aria-components';

interface MyButtonProps extends Omit<ButtonProps, 'variant'> {
	variants?: 'default' | 'primary' | 'danger';
	children?: React.ReactNode;
}

export function MyButton({
	variants = 'default',
	children,
	...props
}: MyButtonProps) {
	const variantClass = classNames({
		'px-4 py-2 flex gap-2 items-center rounded capitalize font-semibold cursor-pointer [&>svg]:size-5':
			true, // Base design
		'': true, // Base dark
		'bg-neutral text-neutral-text hover:bg-neutral-hover':
			variants === 'default',
		'bg-primary text-primary-text hover:bg-primary-hover hover:text-primary-text-hover':
			variants === 'primary',
		'bg-error text-error-text hover:bg-error-hover': variants === 'danger',
	});

	return (
		<Button {...props} className={variantClass}>
			{children}
		</Button>
	);
}
