const globalContainer = document.querySelector(".container").style;
globalContainer.color="black";
globalContainer.textAlign = "center";

document.querySelector("button").style;

const randomRecipe = {
    title:"Spaghetti Carbonara", 
    instructions: "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook pancetta until crispy. 3. In a bowl, whisk eggs and grated cheese. 4. Combine spaghetti, pancetta, and egg mixture, stirring quickly. 5. Serve immediately with additional cheese and black pepper.", 
    image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
}

document.getElementById("getRecipeBtn").addEventListener("click",fetchData);


function fetchData(){
document.getElementById("recipe-title").innerHTML=randomRecipe.title;
document.getElementById("recipe-image").src=randomRecipe.image;
document.getElementById("recipe-instruction").innerHTML=randomRecipe.instructions;
}
