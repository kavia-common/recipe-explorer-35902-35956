import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Tag from './Tag';

/**
 * PUBLIC_INTERFACE
 * RecipeCard
 * Card to display a recipe summary, image, rating and tags.
 */
export default function RecipeCard({
  id,
  title,
  image,
  description,
  rating = 0,
  ratingCount,
  tags = [],
  onFavorite,
  isFavorite = false,
}) {
  /** This is a public function. */
  return (
    <article className="recipe-card" aria-labelledby={`recipe-${id}-title`}>
      <Link to={`/recipe/${id}`} className="recipe-card-media" aria-label={`View details for ${title}`}>
        <img
          src={image}
          alt=""
          loading="lazy"
          className="recipe-card-img"
          onError={(e) => {
            e.currentTarget.src =
              'data:image/svg+xml;utf8,' +
              encodeURIComponent(
                `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400">
                   <rect width="100%" height="100%" fill="#eef2ff"/>
                   <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#6366f1" font-size="24" font-family="Arial">No Image</text>
                 </svg>`
              );
          }}
        />
      </Link>
      <div className="recipe-card-body">
        <div className="recipe-card-header">
          <h3 id={`recipe-${id}-title`} className="recipe-card-title">{title}</h3>
          <button
            type="button"
            className={'fav-btn' + (isFavorite ? ' active' : '')}
            onClick={() => onFavorite?.(id)}
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '★' : '☆'}
          </button>
        </div>
        <p className="recipe-card-desc">{description}</p>
        <div className="recipe-card-meta">
          <Rating value={rating} count={ratingCount} />
          <div className="recipe-card-tags">
            {tags.slice(0, 4).map((t, i) => (
              <Tag key={`${id}-tag-${i}`}>{t}</Tag>
            ))}
          </div>
        </div>
        <div className="recipe-card-actions">
          <Link to={`/recipe/${id}`} className="btn btn-primary">View Recipe</Link>
        </div>
      </div>
    </article>
  );
}
