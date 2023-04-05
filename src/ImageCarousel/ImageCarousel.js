import React, { Component } from 'react';
import '../main.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class ImageCarousel extends Component {
  constructor () {
      super()
    }

	render() {
		return (
      <div>
        <div className="desktop-image-container">
          <div className="image-container">
            <div>
              <img src={require('../assets/store-front-dark.PNG')} className="image-1" alt="img1"></img>
            </div>
            <div className="sub-image-container">
              <div>
                <img src={require('../assets/artwork-2.PNG')} className="image-2" alt="img2"></img>
              </div>
              <div>
                <img src={require('../assets/statue.PNG')} className="image-3" alt="img3"></img>
                <img src={require('../assets/jihee-3.PNG')} className="image-4" alt="img4"></img>
              </div>
            </div>
            <div className="sub-image-container">
              <div>
                <img src={require('../assets/purple-flowers.PNG')} className="image-5" alt="img5"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile-image-container">
          <Carousel>
            <div>
              <img src={require('../assets/IMG_1877.JPG')} className="image-3" alt="img3"></img>
            </div>
            <div>
              <img src={require('../assets/IMG_1876.JPG')} className="image-3" alt="img3"></img>
            </div>
            <div>
              <img src={require('../assets/statue-blue.PNG')} className="image-3" alt="img3"></img>
            </div>
            <div>
              <img src={require('../assets/artwork.PNG')} className="image-2" alt="img2"></img>
            </div>
            <div>
              <img src={require('../assets/jihee-3.PNG')} className="image-3" alt="img3"></img>
            </div>
            {/* <div>
              <img src={require('../assets/store-front-dark.PNG')} className="image-3" alt="img3"></img>
            </div>
            <div>
              <img src={require('../assets/statue.PNG')} className="image-3" alt="img3"></img>
            </div>
            <div>
              <img src={require('../assets/purple-flowers.PNG')} className="image-5" alt="img5"></img>
            </div> */}
          </Carousel>
        </div>
      </div>
		);
	}
}

export default ImageCarousel;