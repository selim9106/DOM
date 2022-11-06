// Todo: 1. Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper);
// Todo: 2. Create a new <li> in the log below to state when the action was done

/**
 * info: time functions
 */
const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

let displayedsquarescontainer = document.querySelector('.displayedsquare-wrapper');
let list = document.querySelector("ul");

const clickOnSquare = (e) => {
    let newsquare = document.createElement('div');
    newsquare.setAttribute("class","displayedsquare");
    let squarecolor = e.target.classList[1];
    setColor(e.target, squarecolor, newsquare);

    displayedsquarescontainer.insertAdjacentElement("afterbegin", newsquare);
  
    createListItem(list, "At " + getElapsedTime() + " a " +e.target.classList[1]+ " square was created");
  }

  /** 
   * Todo: 3. Clicking on a generated square will pop up an alert with the color of that square
   * ! To Add a eventlistener on dynamic content, we need to refers to a preexisting non-dynamic element (the nearest or the boduy if there is none);
   * info: See Event Delegation/bubbling
   * // https://dev.to/akhil_001/adding-event-listeners-to-the-future-dom-elements-using-event-bubbling-3cp1
   */
  displayedsquarescontainer.addEventListener("click", function(e){
    let square = e.target;
    if (hasClass(square, square.classList[1])) {
      alertColor(square.classList[1]);
    }
  })

 
/**
 * Get a specific class from an element and set it to another
 * @param {htmlelement} targetelement 
 * @param {string}
 * @param {htmlelement} element 
 */
function setColor(targetelement, color, element) {
    if (targetelement.classList.contains(color)) {
        element.classList.add(color);
    }
}

/**
 * create an new <li>, add textcontent and append it to <ul>
 * @param {htmlelement} parent 
 * @param {string} textcontent 
 */
function createListItem(parent, textcontent) {
    let itemlist = document.createElement("li");
    itemlist.innerHTML = textcontent;
    parent.appendChild(itemlist);
}

/**
 * Check if an element has a specific class and return it
 * @param {htmlelem} elem 
 * @param {string} className 
 * @returns 
 */
function hasClass(elem, className) {
    return elem.classList.contains(className);
  }

function alertColor(color) {
    alert ("You just click a " + color + " square.");
}

// ! Main function which handle every "squares stuff"
const actionSquares = document.querySelectorAll('.actionsquare');
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

// Todo: 3. Add an event listener on the body; When pressing spacebar, background background color of the document will be change randomly/ when pressing the L key, clear list items/ when pressing the S key, clear all generated squares

let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
let body = document.querySelector('body');

/**
 * Set a specific color as baground of the selected element
 * @param {htmlelement} elem 
 * @param {colorcode} color 
 */
const changeElemBgColor = (elem, color) => elem.style.backgroundColor=color;


body.addEventListener("keydown", (event) => {
        if (event.isComposing || event.code === "Space") {
            event.preventDefault();
            let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            changeElemBgColor(body, randomColor);
            createListItem(list, "At " + getElapsedTime() + " the background color has been updated in HEX:" +randomColor+ " by pressing the space bar");
        } else if (event.code === "KeyL") {
            removeChildren(list);
        } else if (event.code === "KeyS") {
            removeChildren(displayedsquarescontainer);
        }
  });

  /**
   * Remove all children elements (withouth removing comments or textcontent)
   * @param {htmlelement} parent 
   */
  function removeChildren(parent) {
    while (parent.lastElementChild) {
        parent.removeChild(parent.lastElementChild);
      }
  }




//  // https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript