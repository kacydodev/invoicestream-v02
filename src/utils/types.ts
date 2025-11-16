// export type ThemeType = 'light' | 'dark';

export const themeType = ['light', 'dark'];
export type ThemeType = (typeof themeType)[number];
