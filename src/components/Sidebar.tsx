import { logoMark } from '../assets/logo';
import { LogInIcon, MoonIcon, SunIcon } from 'lucide-react';
import useTheme from '../hooks/useTheme';
import { Button } from './ui/Button';

export default function Sidebar() {
	const { theme, toggleTheme } = useTheme();
	const buttonIcon = theme === 'dark' ? <MoonIcon /> : <SunIcon />;

	return (
		<aside className='flex flex-col gap-6 items-center justify-between rounded-r-lg text-sm bg-sidebar'>
			<ul className='flex flex-col gap-6 items-center justify-center'>
				{logoMark}
				<li>
					<LogInIcon className='size-6 text-input' />
					Log In
				</li>
			</ul>

			<Button onClick={toggleTheme}>
				{buttonIcon} {theme}
			</Button>
		</aside>
	);
}
