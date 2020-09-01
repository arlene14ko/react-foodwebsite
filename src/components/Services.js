import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaConciergeBell, FaCookieBite, FaShoppingBasket } from "react-icons/fa";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Cocktails",
        info:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      },
      {
        icon: <FaConciergeBell />,
        title: "Simple Recipes",
        info:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      },
      {
        icon: <FaShoppingBasket />,
        title: "Shopping List",
        info:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      },
      {
        icon: <FaCookieBite />,
        title: "Pastries",
        info:
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
      }
    ]
  };
  render() {
    return (
    <section className="services">
        <Title title ="services"/>
        <div className="services-center">
            {this.state.services.map((item, index) => {
                return (
                    <article key={index} className="service">
                        <span> {item.icon} </span>    
                        <h6> {item.title} </h6>  
                        <p> {item.info} </p>  
                    </article>
                );
            })}
        </div>
    </section>
    );
}
}
