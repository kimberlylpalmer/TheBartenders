//Global variables
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const listDrinks = document.querySelector("#drink-list");
const commentForm = document.querySelector("#comment-form");
const commentValue = document.querySelector("#comment-input");
const drinkSearch = document.querySelector("#drink-search");
const searchResultsContainer = document.querySelector("#search-results");
const likes = document.querySelector("#likes");
const addLike = document.querySelector("#add-like");
const resetLike = document.querySelector("#reset-btn");
const addCocktailMessage = document.querySelector(
  "#drink-search input[type=text]"
);
const list = document.querySelector("li");

//Landon

drinkSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  let request = e.target.search.value;
  if (request.length > 1) {
    start(request);
    e.target.reset();
  } else {
    addCocktailMessage.placeholder = "Add Cocktail..";
  }
});

const start = (request) => {
  listDrinks.innerHTML = "";

  fetch(`${URL}${request}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.drinks && data.drinks.length > 0) {
        data.drinks.forEach((drink) => drinkList(drink));
      } else {
        alert("No drinks found for your search.");
      }
    })
    .catch((error) => alert(error));
};

const drinkList = (drink) => {
  const li = document.createElement("li");
  li.textContent = drink.strDrink;
  listDrinks.appendChild(li);
  li.addEventListener("mousemove", mouseOver);
  li.addEventListener("mouseout", mouseOut);
  li.addEventListener("click", () => {
    displayIngredients(drink);
    likes.textContent = 0;

   
    const cocktailName = document.getElementById("cocktail-name");
    cocktailName.textContent = drink.strDrink;

    const drinkImage = document.getElementById("cocktail-img");
    drinkImage.src = drink.strDrinkThumb;
  });
};

const mouseOver = (e) => {
  e.target.classList.add('blue-text');
};
const mouseOut = (e) => {
  e.target.classList.remove('blue-text')
};

const likeDrink = () => {
  likes.textContent = parseInt(likes.textContent) + 1;
};

const resetDrink = () => {
  likes.textContent = 0;
};

addLike.addEventListener("click", likeDrink);
resetLike.addEventListener("click", resetDrink);

//Michel

const displayIngredients = (cocktail) => {
  const ingredientsList = document.querySelector("#ingredients-list");
  ingredientsList.innerHTML = "";

  for (let i = 1; i <= 15; i++) {
    const ingredient = cocktail[`strIngredient${i}`];
    const measure = cocktail[`strMeasure${i}`];

    if (ingredient) {
      const li = document.createElement("li");
      li.textContent = `${measure ? measure + " " : ""}${ingredient}`;
      ingredientsList.appendChild(li);
    } else {
      break;
    }
  }
};

// Kimberly

  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    buildComment(commentValue.value);
    commentForm.reset();
  });

  function buildComment(comment) {
    let li = document.createElement("li");
    li.textContent = `${comment}`;
    document.querySelector("#comment-list").append(li);
  }




