import React, { Component } from 'react';
import './Projects.scss';

class Projects extends Component {
	render() {
		return (
            <div>
                <div className="projects-container">
                    <div className="project">
                        <img className="project-img" src={require("./assets/terminal-commander.png")}/>
                        <div className="project-text-right">A web-based React game that allows users to enhance muscle memory by repetitively typing actual terminal commands into the input box.
                            <ul>
                                <li>React</li>
                                <li>SCSS</li>
                                <li>Jest + Enzyme</li>
                            </ul>
                            <div className="buttons-container">
                                <button>GitHub</button>
                                <button>App Link</button>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-text-left">A web-based React website designed to give makeup lovers color ideas who want to find the perfect shade of lipstick, blush, eyeshadow, or nailpolish.
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>React Router</li>
                                <li>JavaScript</li>
                                <li>SCSS</li>
                                <li>Jest + Enzyme</li>
                            </ul>
                            <div className="buttons-container">
                                <button>GitHub</button>
                                <button>App Link</button>
                            </div>
                        </div>
                        <img className="project-img" src={require("./assets/seasonal-shades.png")}/>
                    </div>
                    <div className="project">
                        <img className="project-img" src={require("./assets/listy.png")}/>
                        <div className="project-text-right">An app similar to Google Keep created with both front-end and back-end frameworks which allows users to save, edit, and delete notes.
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>React Router</li>
                                <li>JavaScript</li>
                                <li>SCSS</li>
                                <li>Express</li>
                                <li>Jest + Supertest</li>
                            </ul>
                            <div className="buttons-container">
                                <button>GitHub</button>
                                <button>App Link</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
		);
	}
}

export default Projects;
