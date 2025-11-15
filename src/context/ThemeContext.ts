import { createContext } from 'react';
import type { ThemeType } from '../utils/types';
// import type { ThemeContext } from '../types';

interface ThemeContext {
	theme: string;
	toggleTheme: () => void;
	setTheme: (newTheme: ThemeType) => void;
}

const ThemeContext = createContext<ThemeContext | null>(null);

export default ThemeContext;
