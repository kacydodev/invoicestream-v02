import { Search } from 'lucide-react';
import type { InputHTMLAttributes } from 'react';

export function SearchBar(props: InputHTMLAttributes<HTMLInputElement>) {
	return (
		<div className='relative flex items-center'>
			<input {...props} className='w-full h-full' />
			<Search size={30} className='absolute right-0' />
		</div>
	);
}
