// https://api.openweathermap.org/data/2.5/weather?lat=47.90289&lon=1,90389&appid=964c92af9abfd53d27f21227cb8eab94

import { getReports, saveReport } from "./report-data.js";

// Création de la fonction pour ajouter une nouvelle humeur à notre serveur
function addNewMoodEventListener() {
  console.log("it works")
  // on va chercher l'endroit où notre humeur est rentré (ici c'est un formulaire)
  const moodForm = document.querySelector('.mood-form');
  // on ajoute le listener sur l'évènement de notre submit
  moodForm.addEventListener('submit', (event) => {
  // on empêche le refresh de la page après le submit
    event.preventDefault();
  // on créé une variable mood qui sera la valeur de l'input de moodForm
    const mood = event.target.querySelector('[name=mood]').value;

    //------------------ Send the mood to your server here --------------------------

    // On va récupérer notre serveur avec fetch et .then pour la réponse du serveur
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=47.90289&lon=1,90389&appid=964c92af9abfd53d27f21227cb8eab94")
      .then(response => response.json())
      // On récupère les "data" avec .then du temps qu'il fait en ce moment à Orléans et on en fait une variable
      .then(data => {
        const weather = data

        saveMoodAndRelatedWeather(mood, weather)
        displayReports()
      })

  });
}

addNewMoodEventListener()

function saveMoodAndRelatedWeather(mood, weather) {
  const report = {
    mood,
    weather: weather.weather[0].description,
    timestamp: new Date()
  }

  saveReport(report)
}

function displayReports() {
  const reports = getReports()
  const moodList = document.querySelector("#mood-list")
  const reportsList = reports.map(report => {
    return `
        <li>
          <p>mood: ${report.mood}</p>
          <p>weather: ${report.weather}</p>
          <p>date: ${report.timestamp}</p>
        </li>
    `
  })

  moodList.innerHTML = reportsList
}