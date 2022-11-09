let list = document.querySelector("ul");
let listitems = list.childNodes;
// !: childNodes includes non-element nodes like text and comment

let movies = [...listitems].filter(movie => movie.nodeType === 1);
// info: where 1 === Node.ELEMENT_NODE;

removeDuplicates(movies);

/**
 * 
 * @param {array} array 
 * @returns a shallow copy which contains only unique values
 */
function removeDuplicates(array) {
    return array.filter(function(item,index) {
        for(let i=0; i<index; i++) {
            if (item.isEqualNode(array[i])) {
                item.remove();
            }
        }
    });
}


/**
 * Move an list element to the top + add class
 * alert text when a list element is clicked
 */
movies.forEach(function(movie) {
    if (movie.innerText.includes("Fast")) {
        list.insertAdjacentElement("afterbegin", movie);
        movie.classList.add("important");
    }
    
    movie.addEventListener("click", (e) => e.target.innerText.includes("Fast")? alert ("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family."): alert(e.target.innerText));
})


let body = document.querySelector('body');
/**
 * add key events to shuffle content or duplicate the first one
 */
body.addEventListener("keydown", (event) =>  { 
    if(event.key === "r") {
    shuffleItems(list);
    } else if (event.key === "d") {
        let clone = listitems[0].cloneNode(true);
        list.appendChild(clone);
    }
});

/**
 * display shuffled returned elements from shuffle function below
 * @param {htmllist} list 
 */
function shuffleItems(list) {
   let items = list.children, i=0;
    //  items = Array.prototype.slice.call(items); same as:
   items = [...items];
   items = shuffle(items);
   while(i<items.length) {
    list.appendChild(items[i]);
    ++i;
   }
}

/**
 * 
 * @param {array} items 
 * @returns randomly ordered array
 * info: .slice(1) excludes first aray item from shuffling
 */ 
function shuffle(items) {
    let cached = items.slice(1), temp, i = cached.length, rand;
    while(--i)
    {
        rand = Math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}

insertNewElement("div", list, body);

/**
 * Create new element and insert it at the top of a parent one
 * @param {htmlelement} elementype 
 * @param {htmlelement} nextelement 
 * @param {htmlelement} parentElt 
 */
function insertNewElement(elementype, nextelement, parentElt) {
    let newelement = document.createElement(elementype);
    parentElt.insertBefore(newelement, nextelement);
}

// let selectfield = document.createElement('select');
// document.querySelector("div").appendChild(selectfield);

let franchises = ["important franchises", "normal franchises"];
selectInputConfig(document.querySelector("div"), "franchise");

/**
 * Create select field + insert
 * @param {htmlelement} parent 
 * @param {string} name 
 */
function selectInputConfig(parent, name) {
    let selectinput = document.createElement("select");
    selectinput.setAttribute("name", name);
    parent.appendChild(selectinput);
}

addOptions(franchises, "select");

/**
 * 
 * @param {array} values 
 * @param {htmlselecttag} selecttag 
 */
function addOptions(values, selecttag) {
    let selectinput = document.querySelector(selecttag);

    values.forEach((value) => {
        let newoption = document.createElement("option");
        newoption.setAttribute("value", value);
        newoption.innerText = value;
        selectinput.appendChild(newoption);
    });
}

let selectinput = document.querySelector("select");
selectinput.addEventListener("change",(e) => filterList(e.target.value, movies));

/**
 * Display or Hide elements depending on option selected
 * @param {string} value = option value
 * @param {nodes} items 
 */
function filterList(value, items) {
    switch (value) {
        case "important franchises": items.forEach(item => item.classList.contains("important")? item.style.display="": item.style.display="none");
        break;
        case "normal franchises": items.forEach(item => item.classList.contains("important")? item.style.display="none": item.style.display="");
        break;
    }
}

// info: About shuffle : https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order
// info: About Array.slice() && array.splice(): https://dasha.ai/en-us/blog/javascript-arrays-slice-and-splice#:~:text=The%20array%20slice%20javascript%20method,method%20takes%20two%20optional%20arguments.
