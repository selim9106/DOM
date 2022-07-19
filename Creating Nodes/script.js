/*1. --------------------------Modify the script.js to create a new <section> with a random background-color for each learner in your group. This section should contain a paragraph with the name of the learner. Those sections should be appended in the <article> ------------------------*/

document.body.onload = addSection;

function addSection() {
  /*1)Creer un nouveau tag dans le document */
  let newSection = document.createElement("section");
  /*2) déclarer le tag parent */
  const mainArticle = document.querySelector("article");
  /*3) Placer le nouveau tag après le tag défini comme parent*/
  mainArticle.appendChild(newSection);

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

  students.forEach(function (addstudents) {
    let newParagraph = document.createElement("p");
    newParagraph.innerHTML = addstudents;
    document.body.appendChild(newSection);
  });
  console.log(newSection);
}

/*RESSOURCES: https://stackoverflow.com/questions/32670902/create-multiple-elements */
