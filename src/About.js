import React, { Component } from 'react';
import './About.scss';

class About extends Component {
	render() {
		return (
			<div className="about-container">
                <div className="about-title">About</div>
                <div className="profile-container">
                    <img className="portrait-img" src={require("./assets/heatherhartley.jpeg")}/>
                    <div className="about-text">I recently graduated from Turing School of Software and Design and am passionately pursuing a career in software engineering. I have been acknowledged for creating visually-appealing as well as interactive web-based apps. Some of my featured projects and designs can be found below and on GitHub.</div>
                </div>
                <i class="fas fa-broom"></i>
                <i class="far fa-file-code"></i>
                <i class="fas fa-bug"></i>
                <i class="fas fa-code-branch"></i>
                <i class="fas fa-cogs"></i>
                <i class="fas fa-exchange-alt"></i>
                <i class="fas fa-wrench"></i>
            </div>
		);
	}
}

export default About;
