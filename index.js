//Landon




//Michel




//Kimberly

document.addEventListener("DOMContentLoaded", () => {
    const commentForm = document.querySelector('#comment-form')
    commentForm.addEventListener('submit', (event) => {event.preventDefault()
        const commentValue = document.querySelector('#comment-input')
        console.log(commentValue.value)
        buildComment(commentValue.value)
        console.log(event.target.id)
        commentForm.reset()
    })
})

function buildComment (comment) {
    let li = document.createElement('li');
    li.textContent = (`${comment}`)
    document.querySelector('#comment-list').append(li)
  }

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