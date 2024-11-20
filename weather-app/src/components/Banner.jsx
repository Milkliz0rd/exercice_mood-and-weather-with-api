import React from 'react';
import '../styles/components/Banner.css'
import weatherPicture from '../assets/img/weather.jpg'

const Banner = () => {
  return (
    <div className='banner-div'>
      <h1>Mon application Météo</h1>
      <img src={weatherPicture} alt="weather" className='img-banner'/>
    </div>

  );
};

export default Banner;