import React, { Component } from 'react';
import './Banner.scss';
import './Banner';

class Banner extends Component {
  render() {
    return (
      <div className="container">
        <div className='cloud'></div>
        <div className='cloud'></div>
        <div className='banner-text'>Thanks for visiting! I'm</div>
        <div className='introduction-text'>HEATHER HARTLEY</div>
        <div className='banner-text'>a front-end engineer and UI/UX designer</div>
        <div className="balloon">
          <div className="bottom"></div>
          <div className="basket"></div>
          <div className="rope"></div>
        </div>
      </div>
    );
  }
}

export default Banner;

