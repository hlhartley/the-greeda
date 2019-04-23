import React, { Component } from 'react';
import './App.scss';
import Banner from './Banner/Banner';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

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
      <div className="App">
        <div className= { this.state.navFixed ? "navigation-container fixed-nav" : "navigation-container" }>
          <div className='logo'><i class="fas fa-heading"></i><i class="fas fa-heading"></i></div>
          <div className='nav-link-container'>
            <div className="nav-link"><a href="#banner">Home</a></div>
            <div className="nav-link"><a href="#about">About</a></div>
            <div className="nav-link"><a href="#projects">Projects</a></div>
            <div className="nav-link"><a href="#contact">Contact</a></div>
          </div>
        </div>
        <div id="banner">
          <Banner />
        </div>
        <div id="about">
          <About />
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
