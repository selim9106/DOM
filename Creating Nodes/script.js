// todo: Create a new section with a random background-color for each array element. If the background is dark the text should be white, if the background is light the text should be black.
// Everytime you load the page the order of the elements must change

let students = [
    "Anthony",
    "Axel",
    "Benoît",
    "Daniela",
    "Doriano",
    "Dylan",
    "Eddy",
    "Guillaume",
    "Hazem",
    "Julien",
    "Kamilla",
    "Luca",
    "Quentin",
    "Rinaldo",
    "Selim",
    "Sophie",
    "Stéphanie",
    "Titouan",
    "Vicent",
    "Xavier",
  ];

let article = document.querySelector("article");

/**
 * Return a new section with a new paragph inside + a random bg color
 */
function generateSections(arr) {
    let arrayShuffled = shuffleAar(arr);
    for (let elt of arrayShuffled) {
        let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        let newsection = document.createElement("section");
        let newparagraph = document.createElement("p");
        newparagraph.innerText = elt;
        newsection.appendChild(newparagraph);
        let bgsection = newsection.style.backgroundColor=randomColor;
        newparagraph.style.color=setCorrectTextColor(bgsection);
        article.appendChild(newsection);
    }
}

generateSections(students);

function shuffleAar(arr) {
    let shuffleAar = [...arr];
    let length = shuffleAar.length;
    const getRandomValue = (i,N) => Math.floor(Math.random()*(N-i)+i);
    shuffleAar.forEach((elem, i, array, j = getRandomValue(i, length)) => [array[i], array[j]] = [array[j], array[i]]);
    return shuffleAar;
}

function setCorrectTextColor(hex) {
    let threshold = 130;
    let hRed = hexToR(hex);
    let hGreen = hexToG(hex);
    let hBlue = hexToB(hex);

    function hexToR(h) {
      return parseInt(cutHex(h).substring(0, 2), 16);
    }
    function hexToG(h) {
      return parseInt(cutHex(h).substring(2, 4), 16);
    }
    function hexToB(h) {
      return parseInt(cutHex(h).substring(4, 6), 16);
    }
    function cutHex(h) {
      return h.charAt(0) == "#" ? h.substring(1, 7) : h;
    }
    let cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
    if (cBrightness > threshold) {
      return "#000000";
    } else {
      return "#ffffff";
    }
  }


