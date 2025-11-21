import { logoMark } from '../assets/logo';
import { LogInIcon, MoonIcon, SunIcon } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import { MyButton } from './ui/MyButton';

export default function Sidebar() {
	const { theme, toggleTheme } = useTheme();
	const buttonIcon = theme === 'dark' ? <MoonIcon /> : <SunIcon />;

	return (
		<aside className='flex flex-col gap-6 items-center justify-between rounded-r-lg text-sm bg-sidebar-background'>
			<ul className='flex flex-col gap-6 items-center justify-center'>
				{logoMark}
				<li>
					<LogInIcon className='size-6 text-input' />
					Log In
				</li>
			</ul>

			<MyButton variants='primary' onClick={toggleTheme}>
				{buttonIcon} {theme}
			</MyButton>
		</aside>
	);
}
