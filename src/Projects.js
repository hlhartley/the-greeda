import React, { Component } from 'react';
import './Projects.scss';

class Projects extends Component {
	render() {
		return (
            <div>
                <div className="projects-title">Projects</div>
                <div className="projects-container">
                        <img className="project-img" src={require("./assets/terminal-commander.png")}/>
                            <div className="project-description">
                                <button>On GitHub</button>
                                <button>Hosted App</button>
                            </div>
                    <img className="project-img" src={require("./assets/seasonal-shades.png")}/>
                    <img className="project-img" src={require("./assets/listy.png")}/>
                </div>
            </div>
		);
	}
}

export default Projects;
