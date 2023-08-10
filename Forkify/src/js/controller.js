import * as model from './model.js';
import 'core-js/stable';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
import addRecipeView from './views/addRecipeView.js';
import { MODEL_CLOSE_SEC } from './config.js';

// if (module.hot) {
//   module.hot.accept();
// }

const recipeContainer = document.querySelector('.recipe');

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    // 0. Update results view to mark selected search result
    resultView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

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
    resultView.renderSpinner();
    const query = searchView.getQuery();
    if (!query) return;

    await model.loadSearchResults(query);

    //resultView.render(model.state.search.results);
    resultView.render(model.getSearchResultsPage());

    // render pagination
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

const controlPagination = function (goToPage) {
  resultView.render(model.getSearchResultsPage(goToPage));

  // render pagination
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // Update recipe servings
  model.updateServings(newServings);

  // render recipe view
  //recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1. Bookmark recipe
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.removeBookmark(model.state.recipe.id);

  // 2. Update UI
  recipeView.update(model.state.recipe);

  // 3. Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

const controlBooksmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();

    // Upload new Recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // Success message
    addRecipeView.renderMessage();

    // Render bookmarks
    bookmarksView.render(model.state.bookmarks);

    // Change ID in url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    /// Close form window
    setTimeout(function () {
      addRecipeView.toggleWindow();
    }, MODEL_CLOSE_SEC * 1000);
  } catch (error) {
    console.error(error);
    addRecipeView.renderError(error.message);
  }
};

const init = function () {
  bookmarksView.addHandlerRender(controlBooksmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
