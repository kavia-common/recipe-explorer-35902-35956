import React from 'react';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import { ThemeProvider, useTheme, THEME } from './theme';

// Simple Header component with navigation links
function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="app-header">
      <div className="container header-inner">
        <Link to="/" className="brand">
          <span className="brand-mark">🍳</span>
          <span className="brand-name">Recipe Explorer</span>
        </Link>
        <nav className="main-nav" aria-label="Primary">
          <NavLink to="/" end className={({ isActive }) => 'nav-link' + (isActive ? ' active' : '')}>
            Home
          </NavLink>
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
        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === THEME.LIGHT ? 'dark' : 'light'} mode`}
        >
          {theme === THEME.LIGHT ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
}

// Placeholder pages for routing; these will be replaced with real pages later
function HomePage() {
  return (
    <section className="container page">
      <h1 className="page-title">Welcome</h1>
      <p className="muted">Discover delicious recipes tailored to your taste.</p>
    </section>
  );
}

function BrowsePage() {
  return (
    <section className="container page">
      <h1 className="page-title">Browse Recipes</h1>
      <p className="muted">Explore curated collections and categories.</p>
    </section>
  );
}

function RecipeDetailPage() {
  return (
    <section className="container page">
      <h1 className="page-title">Recipe Details</h1>
      <p className="muted">Detailed view for a selected recipe.</p>
    </section>
  );
}

function FavoritesPage() {
  return (
    <section className="container page">
      <h1 className="page-title">Your Favorites</h1>
      <p className="muted">Recipes you’ve saved for quick access.</p>
    </section>
  );
}

function SignInPage() {
  return (
    <section className="container page">
      <h1 className="page-title">Sign In</h1>
      <p className="muted">Sign in to sync your favorites across devices.</p>
    </section>
  );
}

// PUBLIC_INTERFACE
function AppShell() {
  /** Application shell with header, content area, and routes */
  return (
    <div className="app-root">
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage />} />
          <Route path="/recipe/:id" element={<RecipeDetailPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </main>
      <footer className="app-footer">
        <div className="container">
          <p className="muted small">© {new Date().getFullYear()} Recipe Explorer</p>
        </div>
      </footer>
    </div>
  );
}

// PUBLIC_INTERFACE
export default function App() {
  /** Root App component wiring ThemeProvider around the shell */
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  );
}
