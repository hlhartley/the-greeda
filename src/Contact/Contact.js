import React, { Component } from 'react';
import '../main.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Contact extends Component {
  constructor () {
      super()
    }

	render() {
		return (
      <div className="contact-info-container">
        <div className="contact-info-section">
          <i class="fa fa-comment-dots"></i> 카카오톡 상담: the_greeda7401
          <br />
          <i class="fab fa-instagram"></i> 인스타그램: the_greeda
          <br />
        </div>
        <div className="naver contact-info-section">
          <i class="fas fa-search"></i> 네이버: <a href="https://m.blog.naver.com/flowerstyle96/223028893829">경산 눈썹문신 잘 하는 곳(feat.더그리다)</a>
        </div>
      </div>
		);
	}
}

export default Contact;