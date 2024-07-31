// Function to fetch and display a random recipe
async function getRandomRecipe() {
    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      const recipe = data.meals[0];
      
      displayRecipe(recipe);
    } catch (error) {
      console.error('Error fetching the recipe:', error);
    }
  }
  
  // Function to update the DOM with the recipe details
  function displayRecipe(recipe) {
    const recipeContainer = document.getElementById('recipeContainer');
    const recipeImage = document.getElementById('recipe-image');
    const recipeTitle = document.getElementById('recipe-title');
    const recipeInstructions = document.getElementById('recipe-instruction');
  
    recipeImage.src = recipe.strMealThumb;
    recipeImage.alt = recipe.strMeal;
    recipeTitle.textContent = recipe.strMeal;
    recipeInstructions.textContent = recipe.strInstructions;
  
    recipeContainer.style.display = 'block';
  }
  
  // Event listener for the button click
  document.getElementById('getRecipeBtn').addEventListener('click', getRandomRecipe);