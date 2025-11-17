// export type ThemeType = 'light' | 'dark';

export const themeType = ['light', 'dark'];
export type ThemeType = (typeof themeType)[number];

export const status = ['draft', 'pending', 'paid'];
export type StatusType = (typeof status)[number];

export interface DashboardPropsInterface {
	setParams: React.Dispatch<React.SetStateAction<URLSearchParams>>;
}
