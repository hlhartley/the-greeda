import React, { Component } from 'react';
import '../Banner/Banner.scss';

class Banner extends Component {
  constructor () {
    super()
  }
  componentDidMount() {
    console.log('banner', document.querySelector('.container').offsetTop)
  }
  render() {
    return (
        <div className='typewriter container'><h1><span>Hello!</span><span> I'm Heather Hartley</span></h1></div>
    )
  }
}

export default Banner;

