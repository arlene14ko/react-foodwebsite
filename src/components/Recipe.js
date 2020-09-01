import React from 'react';
import {Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function Recipe({recipe}) {
    const {name, slug, images, type, category, description, featured, ingredients, procedure } = recipe;

    return (
      <article className="recipe">
        <div className="img-container">
          <img src={images[0]} alt="recipe" />
          {/*<div className="price-top">
            <h6>${price}</h6>
            <p>per night</p>
          </div> */}
          <Button
            className="recipe-link"
            size="sm"
            variant="outline-info"
            href={`/recipes/${slug}`}
          >
            Check Recipe
          </Button>
        </div>
        <p className="recipe-info">{name}</p>
      </article>
    );
}

Recipe.propTypes = {
  recipe: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  })
};
