import React from 'react';
import Hero from './../components/Hero';
import Banner from './../components/Banner';
import {Button} from 'react-bootstrap';
import RecipeContainer from '../components/RecipeContainer';

const Recipes = (props) => {
  return (
    <>
    <Hero hero="recipesHero"><br></br>
        <Banner title="Our Recipes" subtitle="">
          <Button exact href="/" variant="info">
            Return Home
          </Button>
        </Banner>
    </Hero>
    <RecipeContainer/>
    </>
  );

}

export default Recipes;