// Function to fetch and display a random recipe
async function getRandomRecipe(): Promise<void> {
    const apiUrl: string = 'https://www.themealdb.com/api/json/v1/1/random.php';
  
    try {
      const response: Response = await fetch(apiUrl);
      const data: any = await response.json();
      const recipe: any = data.meals[0];
  
      displayRecipe(recipe);
    } catch (error) {
      console.error('Error fetching the recipe:', error);
    }
  }
  
  // Function to update the DOM with the recipe details
  function displayRecipe(recipe: any): void {
    const recipeContainer: HTMLElement | null = document.getElementById('recipeContainer');
    const recipeImage: HTMLImageElement | null = document.getElementById('recipe-image') as HTMLImageElement;
    const recipeTitle: HTMLElement | null = document.getElementById('recipe-title');
    const recipeInstructions: HTMLElement | null = document.getElementById('recipe-instruction');
  
    if (recipeImage) {
      recipeImage.src = recipe.strMealThumb;
      recipeImage.alt = recipe.strMeal;
    }
    
    if (recipeTitle) {
      recipeTitle.textContent = recipe.strMeal;
    }
    
    if (recipeInstructions) {
      recipeInstructions.textContent = recipe.strInstructions;
    }
  
    if (recipeContainer) {
      recipeContainer.style.display = 'block';
    }
  }
  
  // Event listener for the button click
  document.getElementById('getRecipeBtn')?.addEventListener('click', getRandomRecipe);