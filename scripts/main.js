//start with 16x16 square created with javascript
let n = 16;


const container = document.querySelector(".container");
populate(n);

const buttonClear = document.querySelector("#buttonClear");
buttonClear.addEventListener("click", () => {

    clearScreen();
    do{
    n = prompt("How many rows and columns would you like? Max 100");
    } while (n>100);
    populate(n);
    
});

function clearScreen() {
    const clearNodes = document.querySelectorAll(".testDiv");
    clearNodes.forEach((node) => {
        container.removeChild(node)
    })
}

function populate(n) {
for (let i=0; i < (n*n); i++) {
    const divChild = document.createElement('div');
    divChild.classList.add('testDiv');
    container.appendChild(divChild);
}


container.style.gridTemplateColumns = `repeat(${n}, auto)`;
container.style.gridTemplateRows = `repeat(${n}, auto)`;

const nodes = document.querySelectorAll(".testDiv");
nodes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.classList.add('onHover')
    });
});
}




//for user input
//Clear Container div first
//create a for loop 1 to n creating nxn divs and appending them to the container parent div

//access the grid-template-columns and grid-template-rows and set them to repeat(n, autoß)