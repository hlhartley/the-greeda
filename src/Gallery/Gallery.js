import React, { Component } from 'react';
import './Gallery.scss';

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      displayImageModal: false,
      galleryImage: 'IMG_1845',
    }
  }

  displayModal(bool, img) {
    this.setState({displayImageModal: bool});
    if (img) {
      this.setState({galleryImage: img});
    }
  }

  render() {
    return (
      <div className='gallery-container'>
        <div style={{display: this.state.displayImageModal ? 'block' : 'none'}} className="image-modal">
          <div className="close-button-container" >
            <div
              className="close-button"
              onClick={() => this.displayModal(false)}
            >
              <i class="fa fa-times"></i>
            </div>
          </div>
          <div className="modal-image-container">
            <img src={require(`../assets/${this.state.galleryImage}.JPG`)}></img>
          </div>
        </div>
        <div className="gallery-banner">
          <img src={require('../assets/gallery-banner-1.png')}></img>
        </div>
        <div className="images-container">
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1843')}>
            <img src={require('../assets/gallery-image-2.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1845')}>
            <img src={require('../assets/gallery-image-1.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1873')}>
            <img src={require('../assets/gallery-image-3.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1847')}>
            <img src={require('../assets/gallery-image-5.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1842')}>
            <img src={require('../assets/gallery-image-7.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1850')}>
            <img src={require('../assets/gallery-image-6.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1864')}>
            <img src={require('../assets/gallery-image-8.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1878')}>
            <img src={require('../assets/gallery-image-4.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1883')}>
            <img src={require('../assets/gallery-image-10.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1833')}>
            <img src={require('../assets/gallery-image-9.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1841')}>
            <img src={require('../assets/gallery-image-12.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1840')}>
            <img src={require('../assets/gallery-image-11.png')}></img>
          </div>
        </div>
        <div className="gallery-banner">
          <img src={require('../assets/gallery-banner-2.png')}></img>
        </div>
        <div className="images-container">
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1967')}>
            <img src={require('../assets/gallery-image-14.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1960')}>
            <img src={require('../assets/gallery-image-15.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1981')}>
            <img src={require('../assets/gallery-image-13.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1977')}>
            <img src={require('../assets/gallery-image-16.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1971')}>
            <img src={require('../assets/gallery-image-17.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1968')}>
            <img src={require('../assets/gallery-image-18.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1976')}>
            <img src={require('../assets/gallery-image-19.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1983')}>
            <img src={require('../assets/gallery-image-20.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1964')}>
            <img src={require('../assets/gallery-image-21.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1959')}>
            <img src={require('../assets/gallery-image-23.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1986')}>
            <img src={require('../assets/gallery-image-22.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1953')}>
            <img src={require('../assets/gallery-image-24.png')}></img>
          </div>
        </div>
        <div className="gallery-banner">
          <img src={require('../assets/gallery-banner-3.png')}></img>
        </div>
        <div className="images-container">
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1861')}>
            <img src={require('../assets/gallery-image-26.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1866')}>
            <img src={require('../assets/gallery-image-25.png')}></img>
          </div>
          <div className="image-container" onClick={() => this.displayModal(true, 'IMG_1865')}>
            <img src={require('../assets/gallery-image-27.png')}></img>
          </div>
      </div>
    </div>
    )
  }
}

export default Gallery;