import { useEffect, useState } from "react";
import Recipedetails from "./recipe";
import {useNavigate } from "react-router-dom";

import "../css/recipeFeed.css";
const Recipe = () => {
  const [recipes, setRecipes]=useState([]);
  const [search, setSearch]=useState("");
  const [query, setQuery]=useState("chicken"); //for new recipe once we hit search
  
  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes=async ()=>{
    const response= await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=d9895568&app_key=1120ceb2381c31748c9cf45a86ef8c07`);
    const data=await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  };

    const updateSearch= (e) =>{
      setSearch(e.target.value);
      console.log(e.target.value);
    };

    const getSearch= (e) =>{
      e.preventDefault();
      setQuery(search);
      setSearch("");
    };
    const navigate=useNavigate();
      const HandleRecipebutton=(e)=>{
          navigate('/newRecipe')
      }

    return (
    <div className="main-container">
      <form onSubmit={getSearch} className="search-form">
        <input className="searchBar" type='text' value={search} onChange={updateSearch}/>
        <button className="search-Btn" type="submit">Search</button>
        <button className="addRecipe" type="submit" onClick={HandleRecipebutton}>+</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe =>{
        return(
          <Recipedetails 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}/>
          
        )
      })}
      </div>
      
    </div>
  );
};
export default Recipe;
