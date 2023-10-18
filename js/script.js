//Create variables to grab .show-cat and .cat
const button = document.querySelector(".show-cat");
//console.log(button);
const cat = document.querySelector(".cat");
//console.log(cat);
//create eventListener and handler for the button
button.addEventListener("click", function () {
    button.innerText = "It's working? - Yes";
    //in the function body we use the car variable and and classlist property to add the show class
    cat.classList.add("show");
});