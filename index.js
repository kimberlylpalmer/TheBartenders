//Global variables
const URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const listDrinks = document.querySelector("#drink-list");
const commentForm = document.querySelector("#comment-form");
const commentValue = document.querySelector("#comment-input");
const drinkSearch = document.querySelector("#drink-search");
//Landon
drinkSearch.addEventListener("submit", (e) => {
  e.preventDefault();
  let request = e.target.search.value;
  start(request);
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
  listDrinks.append(li);
};
// start()
//Michel

//Kimberly

document.addEventListener("DOMContentLoaded", () => {
  const commentForm = document.querySelector("#comment-form");
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const commentValue = document.querySelector("#comment-input");
    console.log(commentValue.value);
    buildComment(commentValue.value);
    console.log(event.target.id);
    commentForm.reset();
  });
});

function buildComment(comment) {
  let li = document.createElement("li");
  li.textContent = `${comment}`;
  document.querySelector("#comment-list").append(li);
}

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
