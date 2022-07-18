/*
 */
/*------------------------Change the document title to Modifying the DOM-----------------*/

document.title = "Modifying the DOM";

/*------------Change the background color of the body to hot pink (#FF69B4)----------*/

/*document.body.style.backgroundColor = "#FF69B4"*/
/*document.body.style.backgroundColor = "rgb(255,105,180)";*/
document.body.style.backgroundColor =
  "#DFF0FF"; /*bleu pastel moins agressif pr les yx */

/*----------------------Using the children method and a for ... of loop, display every children elements of the second child element of your document (display all children elements of the <body>)-----------------*/

let bodychildren = document.body.children;
for (let element of bodychildren) {
  console.log(element);
}

/*let bodychildren = document.body.getElementsByTagName();
let bodychildren = arr [];
for (let element of bodychildren) {
  console.log(element);
}*/

/*const bodychildren = Array.from(document.body.getElementsByTagName())*/

/**/
