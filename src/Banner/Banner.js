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
          <h1>Heather Hartley</h1>
          <small>Software Developer</small>
          <p className="about-text">My favorite part of being a Frontend Engineer is developing visually-appealing, interactive, responsive sites/apps. Some of my personal projects and designs are displayed below</p>
        </div>
      </div>
    )
  }
}

export default Banner;

