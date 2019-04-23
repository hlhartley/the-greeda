import React, { Component } from 'react';
import './About.scss';

class About extends Component {
	render() {
		return (
			<div className="about-container">
                <div className="profile-container">
                    <img className="portrait-img" src={require("./assets/heatherhartley.jpeg")}/>
                    <div className="about-text">I recently graduated from Turing School of Software and Design and am passionately pursuing a career in software engineering. I have been acknowledged for creating interactive as well as visually-appealing web-based apps. Some of my featured projects and designs can be found below and on GitHub.</div>
                </div>
            </div>
		);
	}
}

export default About;
