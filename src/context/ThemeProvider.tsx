import React, { useMemo, useState } from 'react';
import ThemeContext from './ThemeContext';
import type { ThemeType } from '../utils/types';

export default function ThemeProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const [theme, setCurrentTheme] = useState<ThemeType>('dark');

	const toggle = () => {
		setCurrentTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	const setTheme = (newTheme: ThemeType) => {
		if (newTheme !== theme) {
			setCurrentTheme(newTheme);
		}
	};

	const toggleTheme = useMemo(() => toggle, []);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
}
