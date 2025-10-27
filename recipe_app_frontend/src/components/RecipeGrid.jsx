import React from 'react';
import RecipeCard from './RecipeCard';

/**
 * PUBLIC_INTERFACE
 * RecipeGrid
 * Responsive grid display of RecipeCard items.
 */
export default function RecipeGrid({ recipes = [], onFavorite, favorites = {} }) {
  /** This is a public function. */
  return (
    <div className="recipe-grid">
      {recipes.map((r) => (
        <RecipeCard
          key={r.id}
          id={r.id}
          title={r.title}
          image={r.image}
          description={r.description}
          rating={r.rating}
          ratingCount={r.ratingCount}
          tags={r.tags}
          onFavorite={onFavorite}
          isFavorite={!!favorites[r.id]}
        />
      ))}
    </div>
  );
}
