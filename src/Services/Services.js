import React, { Component } from 'react';
import './Services.scss';

class Services extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="services-container">
        <div className="service-item">
          <div className="service-image-container">
            <img alt="brush icon" src={require('../assets/icons8-brush-64.png')}></img>
          </div>
          <div>자연눈썹</div>
          </div>
        <div className="service-item">
          <div className="service-image-container">
            <img alt="comb icon" src={require('../assets/icons8-comb-64.png')}></img>
          </div>
          <div>헤어라인</div>
        </div>
        <div className="service-item">
          <div className="service-image-container">
            <img alt="cosmetics icon" src={require('../assets/icons8-makeup-64.png')}></img>
          </div>
          <div>틴트 입술</div>
        </div>
        <div className="service-item">
          <div className="service-image-container">
            <img alt="liner icon" src={require('../assets/icons8-liner-64.png')}></img>
          </div>
          <div>슬림 아이라인</div>
        </div>
      </div>
    )
  }
}

export default Services;