import React, { Component } from "react";
import Banner from "../components/Banner";
import { Button, Container, Image, Col } from "react-bootstrap";
import { RecipeContext } from "../context";
import StyledHero from '../components/StyledHero';
import Featured from '../components/Featured';

import Markdown from 'react-markdown';
import ReactMarkdown from "react-markdown";

export default class SingleRecipe extends Component {
  constructor(props){
    super(props);
    //console.log(this.props);
    this.state =  {
      slug: this.props.match.params.slug
    };
  }
  static contextType= RecipeContext;
  //componentDidMount(){}
  render() {
    const {getRecipe} = this.context;
    const recipe = getRecipe(this.state.slug);
    console.log(recipe);
    if(!recipe){
      return ( 
      <div className="error"><br></br><br/>
        <h3> Could not find this Recipe...</h3>
        <Button href="/recipes" variant="info">
          Back to Recipes
        </Button>
      </div>
      );
    }

    const {
      name,
      images,
      type,
      category,
      description,
      ingredients,
      procedure
    } = recipe;

    return (
      <>
        <br />
        <br />
        <StyledHero>
          <Banner title={`${name} Recipe`}></Banner>
        </StyledHero>
        <div style={{ marginLeft: "2rem", marginRight: "2rem" }}>
          <section className="single-recipe">
            <div className="type">
              <section>
                <article>{description}</article>
                <br />
                <h6>
                  Type: <strong> {type} </strong>
                  Category: <strong>{category} </strong>
                </h6>
                <br />
              </section>
            </div>

            <div className="single-recipe-images">
              <article className="ingredients">
                <h3>Ingredients</h3>
                <ReactMarkdown source={ingredients} />
                {/*<ul className="extras">
                {ingredients.map((item, index) => {
                  return <li key={index}> - {item}</li>;
                })}
              </ul>*/}
              </article>
              <article>
                <Container>
    
                  {images.map((item, index) => {
                    return <img key={index} src={item} alt={name} />;
                  })}
              </Container>
              </article>
            </div>
          </section>
          <br />
          <section>
            <h3>Procedure</h3>
            <br />
            <ReactMarkdown source={procedure} />
          </section>
        </div>
        <div className="other recipes">
          <Featured />
        </div>
      </>
    );
  }
}
