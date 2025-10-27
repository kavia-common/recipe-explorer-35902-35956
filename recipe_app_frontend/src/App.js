import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './theme';
import { Navbar, RecipeGrid, Pagination, Modal } from './components';

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
  const [page, setPage] = React.useState(1);
  const [query, setQuery] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const mockRecipes = Array.from({ length: 9 }, (_, i) => ({
    id: `r-${page}-${i + 1}`,
    title: `Sample Recipe ${i + 1}`,
    image: `https://picsum.photos/seed/recipe-${page}-${i}/600/400`,
    description: 'A tasty sample recipe to demonstrate card layout and styling.',
    rating: 3.5 + ((i % 3) * 0.5),
    ratingCount: 12 + i,
    tags: ['Quick', 'Easy', i % 2 ? 'Vegetarian' : 'Gluten-free'],
  }));

  return (
    <section className="container page">
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <div>
          <h1 className="page-title">Browse Recipes</h1>
          <p className="muted small">{query ? `Results for "${query}"` : 'Explore curated collections and categories.'}</p>
        </div>
        <button className="btn" onClick={() => setOpen(true)}>Open Info Modal</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <RecipeGrid recipes={mockRecipes} onFavorite={() => {}} favorites={{}} />
      </div>

      <Pagination page={page} total={5} onChange={setPage} />

      <Modal open={open} title="How browsing works" onClose={() => setOpen(false)}>
        <p className="muted">This is a placeholder modal to show the Ocean Professional modal styling. Integrate with real content later.</p>
      </Modal>
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
  const [search, setSearch] = React.useState('');
  return (
    <div className="app-root">
      <Navbar onSearch={setSearch} />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/browse" element={<BrowsePage key={search} />} />
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
