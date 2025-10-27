import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Rating
 * Displays a star rating (0-5) with an optional count.
 */
export default function Rating({ value = 0, count, size = 16 }) {
  /** This is a public function. */
  const full = Math.floor(value);
  const half = value - full >= 0.5;

  return (
    <div className="rating" aria-label={`Rating: ${value} out of 5${count ? ` from ${count} reviews` : ''}`}>
      {[0, 1, 2, 3, 4].map((i) => {
        let type = 'empty';
        if (i < full) type = 'full';
        else if (i === full && half) type = 'half';
        return <Star key={i} type={type} size={size} />;
      })}
      {typeof count === 'number' && <span className="rating-count">({count})</span>}
    </div>
  );
}

function Star({ type, size }) {
  const fill = type === 'full' ? 'var(--color-secondary)' : 'none';
  const half = type === 'half';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden
      className="rating-star"
      style={{ filter: 'drop-shadow(0 1px 0 rgba(0,0,0,0.05))' }}
    >
      <defs>
        {half && (
          <linearGradient id="halfGrad" x1="0" x2="1">
            <stop offset="50%" stopColor="var(--color-secondary)" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        )}
      </defs>
      <path
        d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2
         9.24l5.46 4.73L5.82 21z"
        fill={half ? 'url(#halfGrad)' : fill}
        stroke="var(--color-secondary)"
        strokeWidth="1"
      />
    </svg>
  );
}
