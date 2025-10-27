import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Pagination
 * Simple pagination control with numbered buttons.
 */
export default function Pagination({ page = 1, total = 1, onChange }) {
  /** This is a public function. */
  if (total <= 1) return null;

  const pages = [];
  for (let i = 1; i <= total; i++) pages.push(i);

  const go = (p) => {
    if (p < 1 || p > total) return;
    onChange?.(p);
  };

  return (
    <nav className="pagination" role="navigation" aria-label="Pagination">
      <button className="page-btn" onClick={() => go(page - 1)} disabled={page <= 1} aria-label="Previous page">
        ‹
      </button>
      {pages.map((p) => (
        <button
          key={p}
          className={'page-btn' + (p === page ? ' active' : '')}
          aria-current={p === page ? 'page' : undefined}
          onClick={() => go(p)}
        >
          {p}
        </button>
      ))}
      <button className="page-btn" onClick={() => go(page + 1)} disabled={page >= total} aria-label="Next page">
        ›
      </button>
    </nav>
  );
}
