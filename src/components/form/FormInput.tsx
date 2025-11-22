import type { FieldError } from 'react-hook-form';
import type { InvoiceFormIdType } from '../../utils/types';
import classNames from 'classnames';

interface FormInput extends React.FormHTMLAttributes<HTMLInputElement> {
	label?: string;
	id: InvoiceFormIdType;
	error: FieldError | undefined;
}

export function FormInput({ id, label = id, error, ...props }: FormInput) {
	const inputClass = classNames([
		'px-2 py-1 bg-ui-background rounded border',
		!error ? 'border-ui-border/0' : 'border-ui-border-error',
	]);

	return (
		<div id={id} className='relative w-78 pb-4.5 flex flex-col'>
			<label className='text-ui-label text-sm capitalize'>{label}</label>
			<input {...props} className={inputClass} />
			{error && (
				<small className='absolute bottom-0 text-error'>{error.message}</small>
			)}
		</div>
	);
}
