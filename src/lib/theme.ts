export type ThemeConfig = {
  name: string;
  primary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  secondary: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  accent: {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
  };
  background: string;
  text: string;
  textLight: string;
  border: string;
};

// Navy & Cream - Classic, trustworthy, timeless
export const navyAndCreamTheme: ThemeConfig = {
  name: 'Navy & Cream',
  primary: {
    50: '#f8f9fa',
    100: '#e8ecf1',
    200: '#d1d9e6',
    300: '#b9c1d9',
    400: '#7a8ba8',
    500: '#3d4f6f',
    600: '#2c3a52',
    700: '#1f2937',
    800: '#111827',
    900: '#0f1419',
  },
  secondary: {
    50: '#faf8f3',
    100: '#f3ede0',
    200: '#e7dcc1',
    300: '#dccaa2',
    400: '#c4a563',
    500: '#a88c4a',
    600: '#8b7042',
    700: '#6e5839',
    800: '#523f2a',
    900: '#3d2d1f',
  },
  accent: {
    50: '#f0f4ff',
    100: '#e0e8ff',
    200: '#c1d1ff',
    300: '#a2b9ff',
    400: '#6b8cff',
    500: '#4569ff',
    600: '#3b5bde',
    700: '#2c47b8',
    800: '#1f3491',
    900: '#141d4f',
  },
  background: '#ffffff',
  text: '#1f2937',
  textLight: '#6b7280',
  border: '#e5e7eb',
};

// Slate & Gold - Sophisticated, premium
export const slateAndGoldTheme: ThemeConfig = {
  name: 'Slate & Gold',
  primary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  secondary: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  accent: {
    50: '#fef3c7',
    100: '#fde68a',
    200: '#fcd34d',
    300: '#fbbf24',
    400: '#f59e0b',
    500: '#d97706',
    600: '#b45309',
    700: '#92400e',
    800: '#78350f',
    900: '#451a03',
  },
  background: '#ffffff',
  text: '#0f172a',
  textLight: '#475569',
  border: '#e2e8f0',
};

// Forest & Stone - Calm, professional, natural
export const forestAndStoneTheme: ThemeConfig = {
  name: 'Forest & Stone',
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#145231',
  },
  secondary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  accent: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#145231',
  },
  background: '#ffffff',
  text: '#0f172a',
  textLight: '#475569',
  border: '#e2e8f0',
};

// Monochrome + Teal - Modern and flexible
export const monochromeTeaLTheme: ThemeConfig = {
  name: 'Monochrome + Teal',
  primary: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
  },
  secondary: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#134e4a',
    900: '#0d3b36',
  },
  accent: {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6',
    600: '#0d9488',
    700: '#0f766e',
    800: '#134e4a',
    900: '#0d3b36',
  },
  background: '#ffffff',
  text: '#0f172a',
  textLight: '#475569',
  border: '#e2e8f0',
};

export const themes = {
  'navy-cream': navyAndCreamTheme,
  'slate-gold': slateAndGoldTheme,
  'forest-stone': forestAndStoneTheme,
  'monochrome-teal': monochromeTeaLTheme,
};

export const defaultTheme = navyAndCreamTheme;

export function getTheme(themeName?: string): ThemeConfig {
  if (!themeName) return defaultTheme;
  return themes[themeName as keyof typeof themes] || defaultTheme;
}
