import axios from 'axios'
import React, { useEffect, useState } from 'react'
import DataWeather from './DataWeather'
import '../styles/components/Weather.css'

const Weather = () => {
  const [data, setData] = useState(null)
  const [isOpen, setIsOpen] = useState(false)
  // utiliser UseEffect
  const [name, setName] = useState('')

  useEffect(() => {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?lat=47.90289&lon=1,90389&lang=fr&units=metric&appid=964c92af9abfd53d27f21227cb8eab94',
      )
      .then((res) => setData(res.data))
  }, [])

  return isOpen ? (
    <div className="container">
      <div className="welcome-page">
        <p>
          Bonjour <strong>{name}</strong>
        </p>
        {data && <DataWeather data={data} />}
      </div>
    </div>
  ) : (
    <div className="container">
      <div className="welcome-page">
        <label htmlFor="nom">Veuillez entrer votre nom:</label>
        <br />
        <input
          className="input-name"
          type="text"
          name="nom"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={() => setIsOpen(true)}>Envoyer</button>
      </div>
    </div>
  )
}

export default Weather
