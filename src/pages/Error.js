import React from 'react';
import Hero from './../components/Hero';
import Banner from './../components/Banner';
import {Button} from 'react-bootstrap';

const Error = (props) => {
  return (
    <Hero>
      <Banner title="404" subtitle="Page Not Found">
        <Button exact href="/" variant="info" size="lg">
          Return Home
        </Button>
      </Banner>
    </Hero>
  );

}

export default Error;