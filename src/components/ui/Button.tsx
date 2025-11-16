import classNames from 'classnames';

interface ButtonInterface
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variants?: 'default' | 'outline' | 'link';
	children?: React.ReactNode;
}

export function Button({
	variants = 'default',
	children,
	...props
}: ButtonInterface) {
	const baseStyle =
		'px-4 py-2 flex gap-2 items-center cursor-pointer capitalize [&>svg]:size-5';

	switch (variants) {
		case 'outline':
			return (
				<button
					className={classNames(
						baseStyle,
						'border-2 border-primary text-primary hover:border-primary-dark hover:text-primary-dark'
					)}
					{...props}
				>
					{children}
				</button>
			);

		default:
			return (
				<button
					className={classNames(
						baseStyle,
						'bg-primary text-primary-text hover:bg-primary-dark'
					)}
					{...props}
				>
					{children}
				</button>
			);
	}
}
