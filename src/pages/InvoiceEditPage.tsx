import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { InvoiceForm, type InvoiceFormType } from '../utils/types';
import { FormInput } from '../components/form/FormInput';
import { MyButton } from '../components/ui/MyButton';

// /invoice/edit/0e7cee1e-e78d-44d2-87da-24a45b985f81

export default function InvoiceEditPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<InvoiceFormType>({ resolver: zodResolver(InvoiceForm) });

	const onSubmit: SubmitHandler<InvoiceFormType> = (data) => console.log(data);
	return (
		<main>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='p-8 space-y-6 rounded border border-ui-border'
			>
				<FormInput
					label='Invoice ID'
					id='secondaryId'
					error={errors.secondaryId}
					{...register('secondaryId')}
				/>

				<FormInput
					id='description'
					error={errors.description}
					{...register('description')}
				/>

				<MyButton type='submit'>Submit</MyButton>
			</form>
			{/* {errors && <pre>{JSON.stringify(errors.email?.message, null, 2)}</pre>} */}
		</main>
	);
}
