//Global variables
const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
const margaritaDropDown = document.querySelector('#margarita-dropdown')
//Landon
const start = () => {
    fetch(URL)
        .then(response => response.json())
        .then(data => data.drinks.forEach(margarita => dropMenue(margarita)))
        .catch(error => alert(error))
}
const dropMenue = (margarita) => {
  
    const option = document.createElement('option')
    option.textContent = margarita.strDrink
    margaritaDropDown.append(option)
}
start()
//Michel




//Kimberly
//document.addEventListener("DOMContentLoaded", () { })  //first event

//Project Assignments List
    //1. DOMContentLoaded - Page Loads and picture pops up
    //2. MouseOver - Button will be in the heading that will open the drop down menu of
    //3. Click - Whatever is selected from drop down menu, after a "click" will display name, image, description
    //4. Keypress Event - create like button spacebar press event
    //5. Submit - create comment form, add comment below the instructions
    
    
    //fetch request here
    
    // fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')