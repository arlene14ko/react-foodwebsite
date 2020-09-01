import React from 'react'; 
/**
* @author
* @function Hero
**/

export default function Hero ({children, hero}) {
  return    <header className={hero}> {children}</header>;
}

Hero.defaultProps = {
  hero: "defaultHero"
};