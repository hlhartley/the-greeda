import React, { Component } from 'react';
import '../main.scss';

class Banner extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className='description_container'>
        <div className='profile-container'>
          <h1>Where beauty <br/>meets the eye...</h1>
          <small>Brow & SMP Design Shop<br />by Ji-Hee Shin</small>
          <div className="about-text">"Beauty begins the moment you decide to be yourself." —Coco Chanel </div>
        </div>
        <div className="image-container"></div>
      </div>
    )
  }
}

export default Banner;