import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import BannerPage from '../assets/pizza.jpeg'

function Home() {
  return (
    <div className='home' style={{backgroundImage:`url(${BannerPage})`}}>
      <div className='headerContainer' >
        <h1>My Pizza</h1>
        <p>Pizza to fit any taste</p>
        <Link to='/menu'>
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
