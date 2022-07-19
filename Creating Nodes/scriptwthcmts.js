/*1st ------------ Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article> --------------- DONE!*/
/*2nd -------------If the background is dark the text should be white, if the background is light the text should be black------------------ DONE!*/
/*3rd ------------ Find a way so that everytime you load the page the order of the elements changes!----------------------- */

document.body.onload = addSection;

function addSection() {
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

  let ShuffledStudents = students.sort(function () {
    return Math.random() - 0.5;
  });

  students.forEach(function (studentName) {
    let newSection = document.createElement("section");

    let mainArticle = document.querySelector("article");

    let newParagraph = document.createElement("p");

    let newContent = document.createTextNode(studentName);

    newParagraph.appendChild(newContent);

    newSection.appendChild(newParagraph);

    mainArticle.appendChild(newSection);

    let randombgColor = Math.floor(Math.random() * 16777215).toString(16);
    newSection.style.backgroundColor = "#" + randombgColor;

    function getCorrectTextColor(hex) {
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
    let textColor = getCorrectTextColor(randombgColor);
    newParagraph.style.color = textColor;
  });
}
