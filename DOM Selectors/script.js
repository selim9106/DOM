/*

You can access any elements from the DOM using the querySelector and querySelectorAll methods.

querySelector returns the first element that matches the selector
querySelectorAll returns a list of elements that matches the selector


*/

/*1. ---------------- A chaque element qui a pour attribut '.important', ajouter l'attribut '.title' avec pour valeur "This is an important item" -------------------------*/

const importantAnchor = document.querySelectorAll(".important");

importantAnchor.forEach(function (element) {
  element.setAttribute("title", "This is an important item");
});
console.log(importantAnchor);

/*RESSOURCES: https://stackoverflow.com/questions/68889832/how-to-add-attribute-to-child-element-a-using-javascript */

/*2.------------------------Select all the img tags and loop through them. If they have no important class, turn their display property to none---------------------------------*/

const pics = document.querySelectorAll("img");

for (let elt of pics) {
  if (!elt.classList.contains("important")) {
    elt.style.display = "none";
  }
}

/* =========> tag.style.class = "value"; ==> ajoute une classe et une valeur à l'élément sélectionné
ATTENTION: "".classList.contains" ==> classList (majuscule importante!!!) */

/*3. -------------------------Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname as well-------------------------*/

let paragraphs = document.querySelectorAll("p");

/*let text = paragraphs.textContent;*/

for (let eachparagraph of paragraphs) {
  if (eachparagraph.hasAttribute("class")) {
    console.log(eachparagraph.innerHTML && eachparagraph.className);
  } else {
    console.log(eachparagraph.innerHTML);
  }
}

/*4.--------------------------- Give each of the paragraph a random text color (different for each one) UNLESS it has a class then leave it as it is. ---------------------------*/

/*function generateRandomColor() {
  let baseColor = 0xffffff; // 16777215
  let randomNumber = Math.random() * baseColor;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randomColor = randomNumber.padStart(6, 0);
  return `#${randomColor.toUpperCase()}`;
}*/

for (let eachparagraph of paragraphs) {
  if (!eachparagraph.hasAttribute("class")) {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    eachparagraph.style.color = "#" + randomColor;
  }
}
/* ===============> la variable random doit être DANS le if sinon la même couleur est appliquée à tous les paragraphes)*/

/*RESSOURCES: https://www.educative.io/answers/how-to-generate-a-random-color-in-javascript */
/*RESSOURCES: https://css-tricks.com/snippets/javascript/random-hex-color/*/
