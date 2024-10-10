// https://api.openweathermap.org/data/2.5/weather?lat=47.90289&lon=1,90389&appid=964c92af9abfd53d27f21227cb8eab94

import { getReports, saveReport } from "./report-data.js";

//----------Fonction d'ajout d'humeur et de météo d'Orléans--------------------

// Création de la fonction pour ajouter une nouvelle humeur à notre serveur
function addNewMoodEventListener() {
  // on va chercher l'endroit où notre humeur est rentré (ici c'est un formulaire)
  const moodForm = document.querySelector('.mood-form');
  // on ajoute le listener sur l'évènement de notre submit
  moodForm.addEventListener('submit', (event) => {
  // on empêche le refresh de la page après le submit
    event.preventDefault();
  // on créé une variable mood qui sera la valeur de l'input de moodForm
    const mood = event.target.querySelector('[name=mood]').value;
  // On va récupérer notre serveur avec fetch et .then pour la réponse du serveur
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=47.90289&lon=1,90389&appid=964c92af9abfd53d27f21227cb8eab94")
      .then(response => response.json())
      // On récupère les "data" avec .then et on en fait une variable qui contient les données météo d'Orléans
      .then(data => {
        const weather = data
        // on envoie les valeurs de "mood" et de "weather" à une fonction "saveMoodAndRelatedWeather" 
        saveMoodAndRelatedWeather(mood, weather)
        // on affiche le résultat via une fonction "displayReports"
        displayReports()
      })

  });
}
// on appel la fonction "addNewMoodEventListener"
addNewMoodEventListener()


//------------ Fonction d'envoie à la sauvegarde du localStorage---------------

// création de la fonction "saveMoodAndRelatedWeather" en y ajoutant les variables "mood" et "weather"
function saveMoodAndRelatedWeather(mood, weather) {
  // création de la variable report qui contient les objets
  const report = {
    //mood
    mood,
    //weather qui indique le "weather" et "description" extraite de la data
    weather: weather.weather[0].description,
    // timestamp avec la date
    timestamp: new Date()
  }
  // report est ensuite sauvegarder grace à la fonction "saveReport" qui se trouve dans le fichier "./report-data.js"
  saveReport(report)
}



//----- fonction d'affichage à l'écran de notre humeur et météo -------------

// On créé la fonction "displayReports" pour afficher notre humeur et le temps qu'il fait 
function displayReports() {
  // On créé une variable qui fera appel à la fonction "getReports" que l'on trouve sur le fichier "./report-data.js"
  const reports = getReports()
  // On va chercher dans le DOM où notre fonction va s'afficher
  const moodList = document.querySelector("#mood-list")
  // on crée une variable "reportsList" qui va créer une liste avec la fonction "map" en prenant compte des donnés de "reports"
  const reportsList = reports.map(report => {
    //cette liste est "return" puis incrémentée en html
    return `
        <li>
          <p>mood: ${report.mood}</p>
          <p>weather: ${report.weather}</p>
          <p>date: ${report.timestamp}</p>
        </li>
    `
  })
  // "moodlist.innerhtml" est suite mis à jour avec la liste généré "reportList"
  moodList.innerHTML = reportsList
}