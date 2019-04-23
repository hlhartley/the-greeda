import React, { Component } from 'react';
import './Projects.scss';

class Projects extends Component {
	render() {
		return (
            <div>
                <div className="projects-container">
                {/* <div className="projects-title">Projects</div> */}
                        <img className="project-img" src={require("./assets/terminal-commander.png")}/>
                    <img className="project-img" src={require("./assets/seasonal-shades.png")}/>
                    <img className="project-img" src={require("./assets/listy.png")}/>
                </div>
            </div>
		);
	}
}

export default Projects;
