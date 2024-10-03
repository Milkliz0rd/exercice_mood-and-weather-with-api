// https://api.openweathermap.org/data/2.5/weather?lat=48.8575&lon=2.3514&appid={964c92af9abfd53d27f21227cb8eab94}

import { getReports, saveReport } from "./report-data.js";

function addNewMoodEventListener() {
  console.log("it works")
  const moodForm = document.querySelector('.mood-form');

  moodForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const mood = event.target.querySelector('[name=mood]').value;

    // Send the mood to your server here
    fetch("https://api.openweathermap.org/data/2.5/weather?lat=48.8575&lon=2.3514&appid=964c92af9abfd53d27f21227cb8eab94")
      .then(response => response.json())
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