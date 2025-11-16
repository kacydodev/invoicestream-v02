import React, { useMemo, useState } from 'react';
import ThemeContext from './ThemeContext';
import { themeType, type ThemeType } from '../utils/types';

const initialTheme = (): ThemeType => {
	const storedTheme = localStorage.getItem('theme');
	if (storedTheme && themeType.includes(storedTheme)) {
		return storedTheme;
	} else return 'dark';
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	const [theme, setCurrentTheme] = useState<ThemeType>(initialTheme);

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
