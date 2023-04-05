import React, { Component } from 'react';
import './Reservations.scss';

class Reservations extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <div className="reservations-container">
          <div className="image-container">
            <img alt="process" className="process-banner" src={require('../assets/banner-process-1.png')}></img>
          </div>
          <div className="image-container">
            <img alt="reservation form" className="process-banner" src={require('../assets/banner-reservation-form-1.png')}></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Reservations;