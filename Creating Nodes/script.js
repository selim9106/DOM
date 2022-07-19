/*1st ------------ Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article> --------------- DONE!*/
/*2nd -------------If the background is dark the text should be white, if the background is light the text should be black------------------ DONE!*/
/*3rd ------------ Find a way so that everytime you load the page the order of the elements changes!----------------------- DONE !!!!!*/

document.body.onload = addSection;

function addSection() {
  /*1. déclarer l'array contenant les noms*/
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
  /*3rd ==> déclarer une fonction qui déclare l'array dans un ordre aléatoire (le "let SuffledStudents =" est facultatif)/ RESSOURCE: https://sebhastian.com/shuffle-array-javascript/#:~:text=A%20JavaScript%20array%20elements%20can,using%20the%20sort()%20method.&text=The%20JavaScript%20Array%20sort(),value%20returned%20by%20that%20function.*/
  let ShuffledStudents = students.sort(function () {
    return Math.random() - 0.5;
  });
  /*2. creer une loop à partir de l'Array et appeler une fonction qui va créer un élément section à chaque item de l'Array */
  students.forEach(function (studentName) {
    /*3. créer un nouveau tag section dans le document */
    let newSection = document.createElement("section");
    /*4. Pointer le tag parent */
    let mainArticle = document.querySelector("article");

    /*5. créer un nouveau tag "p" dans le document */
    let newParagraph = document.createElement("p");

    /*6. remplir chaque nouveau p du texte de l'Array  */
    /* methode 1: */
    /*newParagraph.innerHTML = studentName;*/
    /*avec textNode ==> d'abord créer une variable de type texte (.createTextNode) qui définit le contenu à attribuer au tag*/

    /*let shuffledStudents = students.sort(function () {
      return Math.random() - 0.5;
    });*/
    let newContent = document.createTextNode(studentName);
    /*appliquer le contenu au tag concerné */
    newParagraph.appendChild(newContent);

    /* Déclarer chaque nouveau paragraphe comme étant un enfant de section */
    newSection.appendChild(newParagraph);

    /*Travailler du plus précis au plus large (le navigateur lit ligne par ligne et une fois une ligne de code appliquée, ne rentre plus dedans)/ Telle une maison rénovée par un entrepreneur immobilier, on finalise par la peinture, la façade et l'ameublement avant de la mettre en location*/

    /*3) Placer les nouveaux tags section après le tag défini comme parent*/
    mainArticle.appendChild(newSection);
    /*Créer la variable qui définit une couleur aléatoire cf DOM Selectors" */
    /*VERSION HEXADECIMALE RACCOURCIE: */
    let randombgColor = Math.floor(Math.random() * 16777215).toString(16);
    /* Appliquer la couleur Hexadecimal sur le background de la section*/
    newSection.style.backgroundColor = "#" + randombgColor;

    /*2nd --------------------------------If the background is dark the text should be white, if the background is light the text should be black------------------------- */

    /*RESSOURCES: https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color*/

    /*if (red*0.299 + green*0.587 + blue*0.114) > 186 use #000000 else use #ffffff;*/
    /*FROM HEXADECIMAL TO RGB: http://www.javascripter.net/faq/hextorgb.htm */
    /* THIS LINK IS GOLD =====================> https://codepen.io/davidhalford/pen/AbKBNr<=====================*/
    /*Définir la fonction standard pour transformer une couleur Hexadecimal en RGB*/
    function getCorrectTextColor(hex) {
      /*
			From this W3C document: http://www.webmasterworld.com/r.cgi?f=88&d=9769&url=http://www.w3.org/TR/AERT#color-contrast
			
			Color brightness is determined by the following formula: 
			((Red value X 299) + (Green value X 587) + (Blue value X 114)) / 1000
			*/
      /*seuil de constraste, modulable*/
      let threshold = 130; /* about half of 256. Lower threshold equals more dark text on dark background  */

      let hRed = hexToR(hex);
      let hGreen = hexToG(hex);
      let hBlue = hexToB(hex);
      /* Récupérer la quantité de rouge dans la couleur */
      function hexToR(h) {
        return parseInt(cutHex(h).substring(0, 2), 16);
      }
      /* Récupérer la quantité de vert dans la couleur */
      function hexToG(h) {
        return parseInt(cutHex(h).substring(2, 4), 16);
      }
      /* Récupérer la quantité de bleu dans la couleur */
      function hexToB(h) {
        return parseInt(cutHex(h).substring(4, 6), 16);
      }
      /* récupérer le code hexadécimal pour...*/
      function cutHex(h) {
        return h.charAt(0) == "#" ? h.substring(1, 7) : h;
      }
      /* Convertir les hauteurs de tons en formule qu'on confronte au seul de contraste défini */
      let cBrightness = (hRed * 299 + hGreen * 587 + hBlue * 114) / 1000;
      /* Si la valeur récupérée est plus grande que le seuil, définir la couleur comme noire, sinon comme blanche */
      if (cBrightness > threshold) {
        return "#000000";
      } else {
        return "#ffffff";
      }
    }
    /* définir la couleur du texte d'après la fonction appliquée au background */
    let textColor = getCorrectTextColor(randombgColor);
    /* attribuer la couleur comme style css aux paragraphes concernés */
    newParagraph.style.color = textColor;
  });
  /*RESSOURCES: https://stackoverflow.com/questions/32670902/create-multiple-elements 
https://www.w3schools.com/jsref/met_node_appendchild.asp
https://jsfiddle.net/cu4z27m7/66/
https://jsfiddle.net/selim9102/9vpj0Lmn/

*/
}
