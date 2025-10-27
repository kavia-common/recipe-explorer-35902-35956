import React, { useEffect, useRef, useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * SearchBar
 * A controlled search input with submit and clear actions.
 */
export default function SearchBar({ placeholder = 'Search...', onSearch }) {
  /** This is a public function. */
  const [q, setQ] = useState('');
  const ref = useRef();

  useEffect(() => {
    // Optional: we could debounce automatic search here if needed
    // Keeping manual submit for explicitness.
  }, [q]);

  function submit(e) {
    e && e.preventDefault();
    if (typeof onSearch === 'function') onSearch(q.trim());
  }

  function clear() {
    setQ('');
    ref.current?.focus();
    if (typeof onSearch === 'function') onSearch('');
  }

  return (
    <form onSubmit={submit} className="searchbar" role="search" aria-label="Site-wide">
      <div className="searchbar-inner">
        <span className="searchbar-icon" aria-hidden>🔎</span>
        <input
          ref={ref}
          type="search"
          className="searchbar-input"
          placeholder={placeholder}
          value={q}
          onChange={(e) => setQ(e.target.value)}
          aria-label="Search recipes"
        />
        {q && (
          <button type="button" className="searchbar-clear" onClick={clear} aria-label="Clear search">
            ✕
          </button>
        )}
        <button type="submit" className="btn btn-primary searchbar-submit" aria-label="Submit search">
          Search
        </button>
      </div>
    </form>
  );
}
