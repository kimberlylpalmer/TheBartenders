// Global variables
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
const margaritaDropDown = document.querySelector('#margarita-dropdown');
const commentForm = document.querySelector('#comment-form');
const commentValue = document.querySelector('#comment-input');
const ingredientsList = document.querySelector('#ingredients-list');

// Landon
const start = () => {
  fetch(URL)
    .then(response => response.json())
    .then(data => data.drinks.forEach(margarita => dropMenu(margarita)))
    .catch(error => alert(error));
};

const dropMenu = (margarita) => {
  const option = document.createElement('option');
  option.textContent = margarita.strDrink;
  margaritaDropDown.append(option);
};

function handleCocktailSelection() {
  const selectedCocktail = margaritaDropDown.value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${selectedCocktail}`)
    .then(response => response.json())
    .then(data => {
      const selectedCocktailData = data.drinks[0];
      displayIngredients(selectedCocktailData);
    })
    .catch(error => alert(error));
}

margaritaDropDown.addEventListener('change', handleCocktailSelection);

const displayIngredients = (cocktail) => {
  ingredientsList.innerHTML = '';

  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];

    if (ingredient) {
      const li = document.createElement('li');
      li.textContent = `${measure ? measure + ' ' : ''}${ingredient}`;
      ingredientsList.appendChild(li);
    } else {
      break;
    }
  }
};

// Kimberly
document.addEventListener('DOMContentLoaded', () => {
  const commentForm = document.querySelector('#comment-form');
  commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const commentValue = document.querySelector('#comment-input');
    buildComment(commentValue.value);
    commentForm.reset();
  });

  function buildComment(comment) {
    let li = document.createElement('li');
    li.textContent = `${comment}`;
    document.querySelector('#comment-list').append(li);
  }
});

start();


//document.addEventListener("DOMContentLoaded", () { })  //first event


//Project Assignments List
    //1. DOMContentLoaded - Page Loads and picture pops up - Doesn't count as an eventListener
    //2. MouseOver - Button will be in the heading that will open the drop down menu of
    //3. Click - Whatever is selected from drop down menu, after a "click" will display name, image, description
    //4. Keypress Event - create like button spacebar press event
    //5. Submit - create comment form, add comment below the instructions
    //6. Language Menu
    //7. Add comments to API persistently
    
    
    //fetch request here
    
    // fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')