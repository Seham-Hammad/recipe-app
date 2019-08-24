import React from 'react';
import {Link} from 'react-router-dom';

const API_KEY= 'ece6ee0e709c9742e0eb682e57b6ab01';
class Recipe extends React.Component{
    
    state ={
        activeRecipe:[]
    }
    componentDidMount = async() =>{
        const title = this.props.location.state.recipe;
    
        const req = await fetch
        (`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)
       
        const res = await req.json();
        this.setState({
            activeRecipe: res.recipes[0]
        })
          
      console.log(this.state.activeRecipe);
    }
    render(){
        const recipe = this.state.activeRecipe;
        return(
            <div className="container">
               {this.state.activeRecipe.length !== 0 &&
            
            <div className="active-recipe">
            <img className="active-recipe__img"  src={recipe.image_url} 
                 alt={recipe.title}>
            </img>
            <h3 className="active_recipe__title">{recipe.title}</h3>
            <h4 className="active_recipe__publisher">
                Publisher: <span> {recipe.title}</span>
            </h4>
            <p className="active_recipe__website">
                <span>Website: <a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>
            </p>
            <button className="active-recipe__button"> 
            <Link to="/"> Go Home
            </Link>
            </button>
        </div>
              }
            </div>
        )
    }
}  
export default Recipe;


