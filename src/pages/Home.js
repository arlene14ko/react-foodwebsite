import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Button} from 'react-bootstrap';
import Services from '../components/Services';
import Featured from '../components/Featured';

export default function Home () {
  return (
    <>
    <Hero>
      <Banner
        title="Deep Frying"
        subtitle="A mixture of Asian and European cuisine"
      >
        <Button href="/recipes" variant="info" size="lg">
          Our Recipes
        </Button>
      </Banner>
    </Hero>
    <Services/>
    <Featured/>
    </>

  );

}
