// 1. Use childNodes to list all the children from the <ul>

let movieslist = document.querySelector("ul");
let movies = movieslist.childNodes;

//  transformer la liste de nodes en éléments ==>
let moviestoarray = [...movies].filter(element => {
    return element.nodeType === Node.ELEMENT_NODE
});



// 7. Create a new <div> before the list, using createElement and insertBefore

let newDiv = document.createElement("div");
movieslist.parentNode.insertBefore(newDiv, movieslist);

// 8. create a <select> tag into the <div>, with two <option>s: "important franchises" and "normal franchises"
let newlabel = document.createElement("label");
newlabel.setAttribute("for", "choice");
newlabel.innerText += "Make a choice : ";

newDiv.appendChild(newlabel);
let selection = document.createElement("select");
newDiv.appendChild(selection);


let importantfranchises = document.createElement("option");
importantfranchises.setAttribute("value", "importantfranchises");
importantfranchises.innerText += "Important franchises";

let normalfranchises = document.createElement("option");
normalfranchises.setAttribute("value", "normalfranchises");
normalfranchises.innerText += "Normal franchises";

selection.appendChild(importantfranchises);
selection.appendChild(normalfranchises);



    // 2. Write a for loop to iterate over every child

    for (let i=0; i<movies.length; i++) {

        // 3. Use a condition in the loop to only iterate over element nodes 

        if (movies[i].nodeType === Node.ELEMENT_NODE) {

            let movie = movies[i];

            
            // 4. Find the element that contains Fast and Furious. If it's not the first element move it to the top of the list. 

            if (movie.textContent.includes("Furious")) {

                const fastandfurious = movie;

                if (fastandfurious !== movies[0]) {

                    let firstitem = movies[0];

                    fastandfurious.parentNode.removeChild(fastandfurious);
                    firstitem.parentNode.insertBefore(fastandfurious, firstitem);

                    // 5. Add a class "".important" to the  F&F element

                    fastandfurious.classList.add("important");

                };

    
            };

            //6. Add an eventListener on every item so if the item is clicked an alert() pops up to display the name of clicked element ==> see function displayName below
            movie.addEventListener("click", displayName);

            // NE PAS DEFINIR selection.addEventListener("change", selectFranchise);


        
        };

    }; 


//9. Add an eventListener to the <select>, on change, if option "important franchise" is chosen, only display items of the list that have the class .important. (tip: toggle visibility with element.style.visibility = 'hidden')
// ==> Not in the loop,here, otherwise, the addeventlistener will loop through i<movies.length times

selection.addEventListener("change", (e) => { 

    if (e.target.value == "importantfranchises") {

            moviestoarray.forEach(movie => {
                //  /!\ le "movie" ici n'a rien a voir avec le 'movie' de la boucle
                // solution avec if else ===>

                // if (movie.classList.contains("important")) {
                //     movie.style.visibility = 'visible';
                // }
                // else {
                //     movie.style.visibility = 'hidden';
                // }

                // -----------------------------------------------

                // SOLUTION WITH TERNARY OPERATOR/GUARD CLOSE:

                movie.classList.contains("important") ? movie.style.visibility = 'visible' : movie.style.visibility = 'hidden';
            })
        }
        
    if (e.target.value == "normalfranchises") {
        moviestoarray.forEach(movie => {
            movie.classList.contains("important") ? movie.style.visibility = 'hidden' : movie.style.visibility = 'visible';
        
        })
    }

})



// 7 function displayName ( with special condition if the clicked item is Fast and Furious (different content in the alert).
            
function displayName(event) { 
    
    if (event.target.className !== "important") {
        alert(event.target.innerText);
    } 
    // /!\ pas de ";" entre les conditions if et else

    else {
        alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family");
    };

};




  


//RESSOURCES:
// 3. https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType  (tip: Node.ELEMENT_NODE = 1)
// 4. https://bobbyhadz.com/blog/javascript-find-element-by-content
// 5. https://stackoverflow.com/questions/27633000/dynamically-move-a-div-above-a-list-element-using-javascript
// 7. https://www.javascripttutorial.net/javascript-dom/javascript-change-event/
// 9. https://learningactors.com/javascript-guard-clauses-how-you-can-refactor-conditional-logic/
// 9. https://ultimatecourses.com/blog/a-comprehensive-dive-into-nodelists-arrays-converting-nodelists-and-understanding-the-dom#looping-through-nodelists-on-the-fly


