import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
};

/**
 * PUBLIC_INTERFACE
 * getThemePalette
 * Returns the palette for a given theme name.
 */
export function getThemePalette(themeName = THEME.LIGHT) {
  /** This is a public function. */
  const base = {
    primary: '#2563EB',
    secondary: '#F59E0B',
    error: '#EF4444',
  };
  if (themeName === THEME.DARK) {
    return {
      ...base,
      bg: '#0f172a',       // slate-900 like
      surface: '#111827',  // gray-900
      text: '#f9fafb',
    };
  }
  return {
    ...base,
    bg: '#f9fafb',
    surface: '#ffffff',
    text: '#111827',
  };
}

const ThemeContext = createContext({
  theme: THEME.LIGHT,
  toggleTheme: () => {},
  palette: getThemePalette(THEME.LIGHT),
});

/**
 * PUBLIC_INTERFACE
 * useTheme
 * Hook to access theme state and helpers.
 */
export function useTheme() {
  /** This is a public function. */
  return useContext(ThemeContext);
}

/**
 * PUBLIC_INTERFACE
 * ThemeProvider
 * React provider that manages and syncs theme to CSS variables.
 */
export function ThemeProvider({ children }) {
  /** This is a public function. */
  const [theme, setTheme] = useState(() => {
    // try to read saved preference
    const saved = typeof window !== 'undefined' ? window.localStorage.getItem('app-theme') : null;
    return saved === THEME.DARK ? THEME.DARK : THEME.LIGHT;
  });

  const palette = useMemo(() => getThemePalette(theme), [theme]);

  useEffect(() => {
    // persist and sync CSS variables
    try {
      window.localStorage.setItem('app-theme', theme);
    } catch (_) {
      // ignore storage failures
    }
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.style.setProperty('--color-primary', palette.primary);
    root.style.setProperty('--color-secondary', palette.secondary);
    root.style.setProperty('--color-error', palette.error);
    root.style.setProperty('--color-bg', palette.bg);
    root.style.setProperty('--color-surface', palette.surface);
    root.style.setProperty('--color-text', palette.text);
  }, [theme, palette]);

  const toggleTheme = () => setTheme((t) => (t === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));

  const value = useMemo(() => ({ theme, toggleTheme, palette }), [theme, toggleTheme, palette]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
