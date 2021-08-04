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
        if (processColor(box)[0]==255 && processColor(box)[1]==255 && processColor(box)[2]==255) {
            randomColor(box)
            //add10PercBlack(box)
            //randomColor(box);
            console.log(processColor(box));
        }
        else {
            add10PercBlack(box)
        }
        //box.classList.add('onHover')
    });
});
}



//the challenge is that red blue and green are created as global variables and singular variables
//but we need to be access the red, blue and green values for each box

function randomColor(box) {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${red}, 
                                      ${green}, 
                                        ${blue})`
  }


  function add10PercBlack(box) {

    let red = processColor(box)[0];
    let green = processColor(box)[1];
    let blue = processColor(box)[2];
    
    if (red-25.5 < 0){
      red=0;
    }
    else {
      red = red-25.5;
    }

    if (green-25.5 < 0) {
      green=0;
    }
    else {
      green = green-25.5;
    }

    if (blue-25.5 <0) {
      blue =0;
    }
    else {
      blue = blue-25.5;
    }

    box.style.backgroundColor = `rgb(${red}, 
                                      ${green}, 
                                        ${blue})`


  }



  function processColor(box) {
    const style = window.getComputedStyle(box);
    let mainString;
    let rgbArray;
    let backColor = style.getPropertyValue("background-color");
    if (backColor.split("(")[0].length == 4) {
      mainString = backColor.slice(5, -1);
      rgbArray = mainString.split(", ");
    }
    else {
      mainString = backColor.slice(4, -1);
      rgbArray = mainString.split(", ");
    }
    return rgbArray;
  }

  /*function processColor(box) {



    const style = window.getComputedStyle(box);
    let backColor = style.getPropertyValue("background-color");
    //let mainString = backColor.slice(4, -1);
    //rgbArray = mainString.split(", ");
    //return rgbArray;
    return backColor;
  }*/






//for optional requirements
//