import React, { Component } from 'react';
import './main.scss';
import Banner from './Banner/Banner';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

class App extends Component {
  constructor() {
    super();
    this.state = {
      navFixed: false,
      initialNavPosition: 0,
    }
  }

  componentDidMount() {
    const nav = document.querySelector('.navigation-container')
    window.addEventListener('scroll', this.fixNav.bind(this))
    this.setState({initialNavPosition: nav.offsetTop})
    }

  fixNav() {
    if(window.scrollY > this.state.initialNavPosition) {
        this.setState({navFixed: true})
    } else {
        this.setState({navFixed: false})
    }
  }

  render() {
    return (
      <div className="App" id="app">
        <div className= { this.state.navFixed ? "navigation-container fixed-nav" : "navigation-container" }>
          <div className='nav-link-container'>
            <div><a href="#app" className="nav-link">Home</a></div>
            <div><a href="#contact" className="nav-link">Contact</a></div>
          </div>
        </div>
        <div id="banner">
          <Banner />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
