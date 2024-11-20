import React from 'react'

const DataWeather = ({ data }) => {
  const location = data.name
  return (
    <div>
      <p>
        Pour la ville de <strong>{location}</strong>
      </p>
      <p>
        La météo est: <strong>{data.weather[0].description}</strong>
      </p>
      <p>
        La température est de: <strong>{data.main.temp}°C</strong>
      </p>
    </div>
  )
}

export default DataWeather
