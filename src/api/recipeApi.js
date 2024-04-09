import RECIPES from "../mocks/recipes-mock";

async function getRecipes() {
  //prova a fare questa cosa
  try {
    //aspetta che arriva la risposta, e se arriva inseriscilo nella costante response
    const response = await RECIPES;
    return response;
    //se non riesci richiama l'errore
  } catch (error) {
    console.log(error);
  }
}

async function getRecipeById(id) {
  try {
    const response = await RECIPES.find((res) => res._id === id);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//oggetto che mi conterrà i metodi da esportare
const RecipesApi = {
  getRecipes: getRecipes,
  getRecipeById: getRecipeById,
};

export default RecipesApi;
