// Todo: Manipulate the DOM to do the following steps (Do not modify the HTML file, don't create new nodes):

// todo: 1. Select the last child of listand put it at the beginning

let list = document.querySelector("ol");
let lastitemlist = list.lastElementChild;
let firstitemlist = list.firstElementChild;
list.insertAdjacentElement("afterbegin", lastitemlist);

// todo: 2. Swap second and third sections titles
let sections = document.querySelectorAll('section');
let secondsection = sections[1];
let thirdsection = sections[2];

let titles = document.querySelectorAll('h2');
let secondtitle = titles[1];
let thirdtitle = titles[2];

secondsection.insertAdjacentElement("afterbegin", thirdtitle);
thirdsection.insertAdjacentElement("afterbegin", secondtitle);

// todo: remove the footer part
let footer = document.querySelector("footer");
footer.remove();

// // About insertAdjacentElement: https://www.w3schools.com/jsref/met_node_insertadjacentelement.asp