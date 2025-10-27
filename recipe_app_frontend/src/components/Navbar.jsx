import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTheme, THEME } from '../theme';
import SearchBar from './SearchBar';

/**
 * Navbar - top navigation with brand, links, search, and theme toggle.
 * Ocean Professional styling, responsive layout.
 */
export default function Navbar({ onSearch }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="app-header">
      <div className="container header-inner" role="navigation" aria-label="Top Navigation">
        <Link to="/" className="brand" aria-label="Go to home">
          <span className="brand-mark" aria-hidden>🍳</span>
          <span className="brand-name">Recipe Explorer</span>
        </Link>

        <nav className="main-nav" aria-label="Primary">
          <NavLink to="/browse" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Browse
          </NavLink>
          <NavLink to="/favorites" className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Favorites
          </NavLink>
          <NavLink to="/signin" className={({ isActive }) => 'nav-link btn btn-primary' + (isActive ? ' active' : '')}>
            Sign In
          </NavLink>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div className="hide-on-small" style={{ width: 280, maxWidth: '50vw' }}>
            <SearchBar placeholder="Search recipes..." onSearch={onSearch} />
          </div>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === THEME.LIGHT ? 'dark' : 'light'} mode`}
            title={theme === THEME.LIGHT ? 'Switch to dark mode' : 'Switch to light mode'}
          >
            {theme === THEME.LIGHT ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}
