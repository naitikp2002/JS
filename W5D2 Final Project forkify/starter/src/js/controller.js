import recipeView, { RecipeView } from './views/recipeView.js';
import * as model from './model.js';
import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';
console.log(icons);
const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    recipeView.renderSpinner();
    await model.loadRecipe(id);
    // const { recipe } = model.state;

    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe);
  } catch (err) {
    console.log(err);
    recipeView.errorRender();
  }
};

// controlRecipe();
const init = function () {
  recipeView.addHandlerRender(controlRecipe);
};
init();
