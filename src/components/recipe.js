import '../css/recipe.css';
const Recipedetails=({title, calories, image, ingredients})=>{
    return(
        <div className='recipeBox'>
            <img src={image}></img><br/ >
            <b className="title">{title}</b>
            <ol>
                {ingredients.map(ingredient=>(
                    <li className='list'>{ingredient.text}</li>
                ))}
            </ol>
            <p className='calorie'>Calories: {calories}</p>
            
        </div>
    )
}
export default Recipedetails;