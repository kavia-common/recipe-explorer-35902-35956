import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Tag
 * Small pill tag for labels like Vegan, 30-min, etc.
 */
export default function Tag({ children, color = 'var(--color-primary)' }) {
  /** This is a public function. */
  return (
    <span
      className="tag"
      style={{
        background: 'rgba(37,99,235,0.08)',
        color: 'var(--color-text)',
        border: `1px solid rgba(37,99,235,0.25)`,
      }}
    >
      {children}
    </span>
  );
}
