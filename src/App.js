import React  from 'react';
import Form   from './components/Form';
import Recipes from './components/Recipes.js';
import './App.css';

const API_KEY= 'ece6ee0e709c9742e0eb682e57b6ab01';

class App extends React.Component {

  state ={
    recipes:[ ]
  }

  getRecipe = async (e ) => {
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    const api_call = await fetch
    (`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`)
    const data = await api_call.json();
       this.setState({
           recipes: data.recipes
       })
    console.log(this.state.recipes);
  }
  componentDidMount =() =>{
    /**grap the items stored in the local storage using localStorage.getItem()
     * then parse it back inot json format, its in string format in localstorage
     * we use JSON.parse(sting name) to parse string format to json format
     
     */
    const json = localStorage.getItem("recipes");
    const recipes = JSON.parse(json);
    /** in ES6 if the name of the key and value of the state is the same then we can use one of them only,  this.setState({recipes: recipes}) */

    this.setState({recipes})
  }
  componentDidUpdate =() =>{
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem("recipes", recipes);

  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="App-title">Recipe Search..</h1>
        </header>
        <Form getRecipe={this.getRecipe}/>
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
  
}

export default App;
