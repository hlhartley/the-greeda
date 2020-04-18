import React, { Component } from 'react';
import '../Projects/Projects.scss';

class Projects extends Component {
  constructor() {
    super()
  }
  componentDidMount() {
    console.log('projects', document.querySelector('.projects-container').offsetTop)
  }

  render() {
    return (
      <div className="projects-container">
        <div className="project">
          <a href="https://github.com/hlhartley/listy" target="_blank"><img className="project-img" src={require("../assets/listy-ss.png")} /></a>
          <div className="buttons-container">
            <a href="https://github.com/hlhartley/listy" target="_blank" className="button-link">GitHub</a>
            <div className="disabled-button">App</div>
          </div>
        </div>
        <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
          <a href="https://github.com/hlhartley/movie-tracker-app" target="_blank"><img className="project-img" src={require("../assets/movie-tracker.png")} /></a>
          <div className="buttons-container">
            <a href="https://github.com/hlhartley/movie-tracker-app" target="_blank" className="button-link">GitHub</a>
            <div className="disabled-button">App</div>
          </div>
        </div>
        <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
          <a href="https://github.com/hlhartley/terminal-commander" target="_blank"><img className="project-img" src={require("../assets/terminal-commander.png")} /></a>
          <div className="buttons-container">
            <a href="https://github.com/hlhartley/terminal-commander" target="_blank" className="button-link">GitHub</a>
            <a href="https://terminal-commander.herokuapp.com/" target="_blank" className="button-link">App</a>
          </div>
        </div>
        <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
          <a href="https://github.com/hlhartley/harvard-art-project" target="_blank"><img className="project-img" src={require("../assets/harvard-art-project.png")} /></a>
          <div className="buttons-container">
            <a href="https://github.com/hlhartley/harvard-art-project" target="_blank" className="button-link">GitHub</a>
            <a href="http://harvard-art-project.s3-website-us-west-2.amazonaws.com/" target="_blank" className="button-link">App</a>
          </div>
        </div>
        <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
          <a href="https://github.com/hlhartley/palette-picker" target="_blank"><img className="project-img" src={require("../assets/palit.png")} /></a>
          <div className="buttons-container">
            <a href="https://github.com/hlhartley/palette-picker" target="_blank" className="button-link">GitHub</a>
            <a href="https://palit-picker.herokuapp.com/" target="_blank" className="button-link">App</a>
          </div>
        </div>
        <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
          <a href="https://github.com/hlhartley/seasonal-shades" target="_blank"><img className="project-img" src={require("../assets/seasonal-shades.png")} /></a>
          <div className="buttons-container">
            <a href="https://github.com/hlhartley/seasonal-shades" target="_blank" className="button-link">GitHub</a>
            <a href="http://seasonal-shades.s3-website-us-west-2.amazonaws.com/eyeshadow" target="_blank" className="button-link">App</a>
          </div>
        </div>
        <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
          <a href="https://github.com/hlhartley/swapi-box" target="_blank"><img className="project-img" src={require("../assets/swapi-box.png")} /></a>
          <div className="buttons-container">
            <a href="https://github.com/hlhartley/swapi-box" target="_blank" className="button-link">GitHub</a>
            <div className="disabled-button">App</div>
          </div>
        </div>
        <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
          <a href="https://github.com/hlhartley/icecream_whateverly" target="_blank"><img className="project-img" src={require("../assets/iscream.png")} /></a>
          <div className="buttons-container">
            <a href="https://github.com/hlhartley/icecream_whateverly" target="_blank" className="button-link">GitHub</a>
            <div className="disabled-button">App</div>
          </div>
        </div>
        <div className="project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
          <a href="https://github.com/hlhartley/wheeloffortune" target="_blank"><img className="project-img" src={require("../assets/spin2win.png")} /></a>
          <div className="buttons-container">
            <a href="https://github.com/hlhartley/wheeloffortune" target="_blank" className="button-link">GitHub</a>
            <a href="http://spin-2-win.s3-website-us-west-2.amazonaws.com/" target="_blank" className="button-link">App</a>
          </div>
        </div>
        <div className="phone project" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="500" data-aos-once="true" data-aos-delay="150">
          <div className="project_image--container">
            <a href="https://github.com/hlhartley/PicYourLandmark" target="_blank"><img className="project-phone-img" src={require("../assets/picyourlandmarklogin.png")} /></a>
            <a href="https://github.com/hlhartley/PicYourLandmark" target="_blank"><img className="project-phone-img" src={require("../assets/picyourlandmark.png")} /></a>
          </div>
          <div className="buttons-container">
            <a href="https://github.com/hlhartley/PicYourLandmark" target="_blank" className="button-link">GitHub</a>
            <div className="disabled-button">App</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects;