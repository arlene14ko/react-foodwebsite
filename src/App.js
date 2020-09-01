import React from 'react';
import './App.css';
import Home from './pages/Home';
import Error from './pages/Error';
import Recipes from './pages/Recipes';
import SingleRecipe from './pages/SingleRecipe';
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <>
      <NavigationBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/recipes" component={Recipes} />
          <Route exact path="/recipes/:slug" component={SingleRecipe} />
          <Route exact path="/contactus" component={ContactUs}/>
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
