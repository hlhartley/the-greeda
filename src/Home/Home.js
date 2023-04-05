import React, { Component } from 'react';
import '../Home/Home.scss';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Reservations from '../Reservations/Reservations';
import ImageCarousel from '../ImageCarousel/ImageCarousel';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      navFixed: false,
      initialNavPosition: 0,
    }
  }

  componentDidMount() {
    const nav = document.querySelector('.navigation-container')
    window.addEventListener('scroll', this.fixNav.bind(this))
    this.setState({initialNavPosition: nav.offsetTop})
    }

  fixNav() {
    if(window.scrollY > this.state.initialNavPosition) {
        this.setState({navFixed: true})
    } else {
        this.setState({navFixed: false})
    }
  }

  render() {
    return (
      <div className="Home" id="home">
        <div id="banner">
          <Banner />
        </div>
        <div id="services">
          <Services />
        </div>
        <div className="home-image-container">
          <video poster={require('../assets/video-thumbnail.png')} controls>
            <source src="https://the-greeda.s3.ap-northeast-2.amazonaws.com/_talkv_wsRSVUG3Ll_OTBz4t5gwGkAACncedInVk_talkv_high+.MP4" type="video/mp4" />
          </video>
          <img alt="flower in vase" className="flower-image" src={require('../assets/flower-in-vase-border.png')}></img>
        </div>
        <div className="video-image-container">
          <a href="https://m.blog.naver.com/flowerstyle96/223028893829">
            <img alt="customer quote" src={require('../assets/banner-quote.png')}></img>
          </a>
          <img alt="information" src={require('../assets/banner-info.png')}></img>
        </div>
        <div id="reservations">
          <Reservations />
        </div>
        <div id="image-carousel">
          <ImageCarousel />
        </div>
      </div>
    );
  }
}

export default Home;