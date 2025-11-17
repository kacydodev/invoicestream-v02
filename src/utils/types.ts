// export type ThemeType = 'light' | 'dark';

import type { SetURLSearchParams } from 'react-router';

export const themeType = ['light', 'dark'];
export type ThemeType = (typeof themeType)[number];

export const status = ['draft', 'pending', 'paid'];
export type StatusType = (typeof status)[number];

export interface DashboardPropsInterface {
	params?: URLSearchParams;
	setParams: SetURLSearchParams;
}
