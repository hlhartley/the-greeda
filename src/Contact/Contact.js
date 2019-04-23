import React, { Component } from 'react';
import '../Contact/Contact.scss';

class Contact extends Component {
    constructor () {
        super()
      }
      componentDidMount() {
        console.log('contact', document.querySelector('.contact-container').offsetTop)
      }
	render() {
		return (
			<div className="contact-container">
                <div className="contact-description">Please feel free to contact me. Thanks for visiting!</div>
                <div className="contact-info-container">
                    <div><i class="fas fa-envelope"></i> hlhartley@gmail.com</div>
                    <div><i class="fab fa-linkedin"></i> <a href="https://www.linkedin.com/in/heatherleehartley/" target="_blank" className="link">https://www.linkedin.com/in/heatherleehartley/</a></div>
                    <div><i class="fab fa-github"></i> <a href="https://github.com/hlhartley" target="_blank" className="link">https://github.com/hlhartley</a></div>
                </div>
            </div>
		);
	}
}

export default Contact;