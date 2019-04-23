import React, { Component } from 'react';
import './Contact.scss';

class Contact extends Component {
	render() {
		return (
			<div className="contact-container">
                <div className="contact-description">If you have any questions or comments, please feel free to contact me:</div>
                <div className="contact-info-container">
                    <div><i class="fas fa-envelope"></i> hlhartley@gmail.com</div>
                    <div><i class="fab fa-linkedin"></i> https://www.linkedin.com/in/heatherleehartley/</div>
                    <div><i class="fab fa-github"></i> https://github.com/hlhartley</div>
                </div>
            </div>
		);
	}
}

export default Contact;