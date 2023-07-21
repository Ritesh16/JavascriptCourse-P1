import * as model from './model.js';
import 'core-js/stable';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';

const recipeContainer = document.querySelector('.recipe');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    // 1. Get Recipe
    await model.loadRecipe(id);

    // 2. Render Recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    console.log(error);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);
    console.log(model.state.search.results);
  } catch (error) {
    console.log(error);
  }
};

const init = function () {
  recipeView.addRenderHandle(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
