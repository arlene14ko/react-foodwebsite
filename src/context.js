import React, { Component } from 'react';
import Client from './Contentful';

const RecipeContext = React.createContext();
// <RecipeContext.Provider value={'hello'}
class RecipeProvider extends Component {
    state={
        recipes:[],
        sortedRecipes: [],
        featuredRecipes: [],
        loading: true,
    };
    // getData 

    getData = async () => {
        try{
            let response = await Client.getEntries({
                content_type: "deepFrying" 
            });

            let recipes = this.formatData(response.items);
            let featuredRecipes = recipes.filter(
                (recipe) => recipe.featured === true
            );
            this.setState({
                recipes,
                featuredRecipes,
                sortedRecipes: recipes,
                loading: false,
                    });

        } catch (error){
            console.log(error);
        }
    }

    componentDidMount(){
        this.getData();
    }

    formatData(items){
        let tempItems = items.map( item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image =>
                image.fields.file.url);

            let recipe = { ...item.fields, images, id}
            return recipe;
        });
        return tempItems;
    }

    getRecipe = (slug) => {
        let tempRecipes = [...this.state.recipes];
        const recipe = tempRecipes.find((recipe)=> recipe.slug === slug);
        return recipe;
    }


    render() {
        return (
            <RecipeContext.Provider value={{ 
                ...this.state, getRecipe: this.getRecipe }}>
                {this.props.children}
            </RecipeContext.Provider>
        )
    }
}

const RecipeConsumer = RecipeContext.Consumer;

export function withRecipeConsumer(Component){
    return function ConsumerWrapper(props){
        return <RecipeConsumer>
            {value => <Component {...props} context ={value}/>}
        </RecipeConsumer>
    }
}

export {RecipeProvider, RecipeConsumer, RecipeContext};