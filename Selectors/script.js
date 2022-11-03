// todo: Add a title attribute to every element that has the important class, stating This is an important item:

let importantElements = document.querySelectorAll(".important");
importantElements.forEach(element => element.setAttribute("title", "This is an important item"));


// todo: If images have no important class, turn their display property to none:

let images = document.querySelectorAll("img");
images.forEach(image => !image.classList.contains("important")?image.style.display="none": image.style.display = "block");


// todo: Display every paragraph content and class in the console:

let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph=>paragraph.hasAttribute("class")?console.log(paragraph.innerText + " Note: This paragraph is " +paragraph.classList):console.log(paragraph.innerText));

// todo: Give each of the paragraph a different random text color  unless it has a class:
// tip: the randomColor generator func MUST be inside loop, otherwise, they will all have the same color (= one random generated once).

for (let paragraph of paragraphs) {
    if(!paragraph.hasAttribute("class")) {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        paragraph.style.color=randomColor;
    }
}

// // RESSOURCES: https://www.educative.io/answers/how-to-generate-a-random-color-in-javascript */
// // RESSOURCES: https://css-tricks.com/snippets/javascript/random-hex-color/*/