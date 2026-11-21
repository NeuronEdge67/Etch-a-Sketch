// printing project name in console.
console.log("Etch-a-Sketch");

// taking user prompt for grid size.
// Step 1: select the button element.
const button = document.querySelector(".button");
// Step 2: Add an EventListener which prompts user for a Number when ever user
// clicks the change grid size button.
button.addEventListener("click", (event) => {
    let gridSize = Number(prompt("Enter the new grid size. Between 0 & 100."));
    // using if-else statment to deal with user entering Number less than 0
    // or greater than 100.
    if (gridSize > 100){
        prompt("Enter a valid number between 1 & 100");
    }
    else if (gridSize === 0){
        prompt("Enter a valid number between 1 & 100");
    }
})

// selecting the container div.
const container =  document.querySelector(".container");

// creating a div and adding class name "box"
div = document.createElement("div");
div.className = "box";

// adding some CSS style to the upper div element
const box_div = document.getElementsByClassName('box');