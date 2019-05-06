import React, { Component } from 'react';
import '../Projects/Projects.scss';

class Projects extends Component {
    constructor () {
        super()
    }
    componentDidMount() {
        console.log('projects', document.querySelector('.projects-container').offsetTop)
    }

	render() {
		return (
                <div className="projects-container">
                    <div className="project">
                    <a href="https://github.com/hlhartley/listy" target="_blank"><img className="project-img" src={require("../assets/listy-ss.png")}/></a>
                        <div className="project-text-right">Similar to Google Keep - created with both front-end and back-end frameworks. You can save, edit, and delete personalized notes.
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>React Router</li>
                                <li>JavaScript</li>
                                <li>SCSS</li>
                                <li>Node</li>
                                <li>Express</li>
                                <li>Jest + Supertest</li>
                            </ul>
                            <div className="buttons-container">
                                <a href="https://github.com/hlhartley/listy" target="_blank" className="button-link">GitHub</a>
                                <div className="disabled-button">App</div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-text-left">You can browse the newest releases as well as collect your favorite movies.
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>React Router</li>
                                <li>JavaScript</li>
                                <li>TMDb API</li>
                                <li>SCSS</li>
                                <li>Express</li>
                                <li>Jest + Enzyme</li>
                            </ul>
                            <div className="buttons-container">
                                <a href="https://github.com/hlhartley/movie-tracker-app" target="_blank" className="button-link">GitHub</a>
                                <div className="disabled-button">App</div>
                            </div>
                        </div>
                        <a href="https://github.com/hlhartley/movie-tracker-app" target="_blank"><img className="project-img" src={require("../assets/movie-tracker.png")}/></a>
                    </div>
                    <div className="project">
                    <a href="https://github.com/hlhartley/terminal-commander" target="_blank"><img className="project-img" src={require("../assets/terminal-commander.png")}/></a>
                        <div className="project-text-right">A fun and interactive game with special CSS animations that allows you to enhance muscle memory by repetitively typing in actual terminal commands.
                            <ul>
                                <li>React</li>
                                <li>SCSS</li>
                                <li>Jest + Enzyme</li>
                                <li>Heroku</li>
                            </ul>
                            <div className="buttons-container">
                                <a href="https://github.com/hlhartley/terminal-commander" target="_blank" className="button-link">GitHub</a>
                                <a href="https://terminal-commander.herokuapp.com/" target="_blank" className="button-link">App</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-text-left">A Vue-based app which showcases as well as promotes certain selections of Korean art from the Harvard Art Museum. The carousel allows you to easily swipe through the paintings one by one while viewing the associated title and info.
                            <ul>
                                <li>Vue</li>
                                <li>Harvard Art Museum API</li>
                                <li>SCSS</li>
                                <li>Amazon Web Services - S3</li>
                            </ul>
                            <div className="buttons-container">
                                <a href="https://github.com/hlhartley/harvard-art-project" target="_blank" className="button-link">GitHub</a>
                                <a href="http://harvard-art-project.s3-website-us-west-2.amazonaws.com/" target="_blank" className="button-link">App</a>
                            </div>
                        </div>
                        <a href="https://github.com/hlhartley/harvard-art-project" target="_blank"><img className="project-img" src={require("../assets/harvard-art-project.png")}/></a>
                    </div>
                    <div className="project">
                    <a href="https://github.com/hlhartley/palette-picker" target="_blank"><img className="project-img" src={require("../assets/palit.png")}/></a>
                        <div className="project-text-right">Based on the website Coolors, you can generate color palettes for websites and other design projects.
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>JavaScript</li>
                                <li>SCSS</li>
                                <li>Express</li>
                                <li>Knex</li>
                                <li>PostgreSQL</li>
                                <li>Jest + Enzyme</li>
                                <li>Travis CI</li>
                                <li>Heroku</li>
                            </ul>
                            <div className="buttons-container">
                                <a href="https://github.com/hlhartley/palette-picker" target="_blank" className="button-link">GitHub</a>
                                <a href="https://palit-picker.herokuapp.com/" target="_blank" className="button-link">App</a>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="project-text-left">Designed to give you color ideas for the perfect shade of lipstick, blush, eyeshadow, or nailpolish.
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>React Router</li>
                                <li>JavaScript</li>
                                <li>Makeup API</li>
                                <li>SCSS</li>
                                <li>Jest + Enzyme</li>
                                <li>Amazon Web Services - S3</li>
                            </ul>
                            <div className="buttons-container">
                                <a href="https://github.com/hlhartley/seasonal-shades" target="_blank" className="button-link">GitHub</a>
                                <a href="http://seasonal-shades.s3-website-us-west-2.amazonaws.com/eyeshadow" target="_blank" className="button-link">App</a>
                            </div>
                        </div>
                        <a href="https://github.com/hlhartley/seasonal-shades" target="_blank"><img className="project-img" src={require("../assets/seasonal-shades.png")}/></a>
                    </div>
                <div className="project">
                <a href="https://github.com/hlhartley/swapi-box" target="_blank"><img className="project-img" src={require("../assets/swapi-box.png")}/></a>
                    <div className="project-text-right">Lets you search through the Starwars database to find your favorite characters, planets, and vehicles as well as save your favorite cards to local storage.
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Starwars API</li>
                            <li>SCSS</li>
                            <li>Jest + Enzyme</li>
                            <li>Amazon Web Services - S3</li>
                        </ul>
                        <div className="buttons-container">
                            <a href="https://github.com/hlhartley/swapi-box" target="_blank" className="button-link">GitHub</a>
                            <a href="http://swapi-box.s3-website-us-west-2.amazonaws.com/" target="_blank" className="button-link">App</a>
                        </div>
                    </div>
                </div>
                <div className="project">
                    <div className="project-text-left">You can easily see all of the ice cream flavors available throughout Denver and Aurora as well as explore and filter for new and exciting flavors.
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>Fetch API</li>
                            <li>SCSS</li>
                            <li>Jest + Enzyme</li>
                            <li>Amazon Web Services - S3</li>
                        </ul>
                        <div className="buttons-container">
                            <a href="https://github.com/hlhartley/icecream_whateverly" target="_blank" className="button-link">GitHub</a>
                            <a href="http://icecream-whateverly.s3-website-us-west-2.amazonaws.com/" target="_blank" className="button-link">App</a>
                        </div>
                    </div>
                    <a href="https://github.com/hlhartley/icecream_whateverly" target="_blank"><img className="project-img" src={require("../assets/iscream.png")}/></a>
                </div>
                <div className="project">
                    <a href="https://github.com/hlhartley/wheeloffortune" target="_blank"><img className="project-img" src={require("../assets/spin2win.png")}/></a>
                        <div className="project-text-right">$pin 2 !win is a take on the classic game show Wheel of Fortune. Players can test their luck by guessing phrases and winning a variety of monetary prizes through four rounds of fun. This web app was built using Object Oriented Principles in Javascript.
                            <ul>
                                <li>JavaScript + OOP</li>
                                <li>CSS</li>
                                <li>Mocha + Chai</li>
                                <li>Amazon Web Services - S3</li>
                            </ul>
                            <div className="buttons-container">
                                <a href="https://github.com/hlhartley/wheeloffortune" target="_blank" className="button-link">GitHub</a>
                                <a href="http://spin-2-win.s3-website-us-west-2.amazonaws.com/" target="_blank" className="button-link">App</a>
                            </div>
                        </div>
                    </div>
                <div className="project">
                    <div className="project-phone-text-right">Based on the famous game 'Pokemon Go' - except you can 'collect' famous landmarks! When you visit a landmark, you can take and store your picture in the app. You gain points/gems based on how many landmarks you have 'collected'. Download our app from Google Play store on your Android mobile device today!
                        <ul>
                            <li>React Native</li>
                            <li>JavaScript</li>
                            <li>Geocoder API</li>
                            <li>SCSS</li>
                            <li>Django</li>
                            <li>Rest_framework</li>
                            <li>PostgreSQL</li>
                            <li>Jest + Enzyme</li>
                            <li>Travis CI</li>
                            <li>Google Play store</li>
                        </ul>
                        <div className="buttons-container">
                            <a href="https://github.com/hlhartley/PicYourLandmark" target="_blank" className="button-link">GitHub</a>
                            <a href="https://play.google.com/store/apps/details?id=com.heatherandmatt.picyourlandmark" target="_blank" className="button-link">App</a>
                        </div>
                    </div>
                    <a href="https://github.com/hlhartley/PicYourLandmark" target="_blank"><img className="project-phone-img" src={require("../assets/picyourlandmarklogin.png")}/></a>
                    <a href="https://github.com/hlhartley/PicYourLandmark" target="_blank"><img className="project-phone-img" src={require("../assets/picyourlandmark.png")}/></a>
                </div>
            </div>
		)
	}
}

export default Projects;