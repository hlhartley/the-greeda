import React, { Component } from 'react';
import './main.scss';
import Programs from './Programs/Programs';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import Gallery from './Gallery/Gallery';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      navFixed: false,
      initialNavPosition: 0,
      displayNavMenu: false
    }
  }

  // componentDidMount() {
  //   const nav = document.querySelector('.navigation-container')
  //   window.addEventListener('scroll', this.fixNav.bind(this))
  //   this.setState({initialNavPosition: nav.offsetTop})
  // }

  // fixNav() {
  //   if(window.scrollY > this.state.initialNavPosition) {
  //       this.setState({navFixed: true})
  //   } else {
  //       this.setState({navFixed: false})
  //   }
  // }

  toggleNavMenu() {
    this.setState({displayNavMenu: !this.state.displayNavMenu})
  }

  hideNavMenu(event) {
    event.stopPropagation()
    this.setState({displayNavMenu: false})
  }

  render() {
    return (
      <Router>
        <div className="App" id="app">
          <div className={ this.state.navFixed ? "navigation-container fixed-nav" : "navigation-container" }>
            <div className="logo">The Greeda</div>
            <div className='nav-link-container'>
              <Link className="nav-link" to="/">홈</Link>
              <Link className="nav-link" to="/programs">교육과목</Link>
              <Link className="nav-link" to="/gallery">갤러리</Link>
            </div>
            <nav role="navigation">
              <div id="menuToggle" onClick={() => this.toggleNavMenu()}>
                <div id="hamburger-menu">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <ul id="menu" className={ this.state.displayNavMenu ? "display-block" : "display-hidden" }>
                  <li><Link className="nav-link" to="/" onClick={(e) => this.hideNavMenu(e)}>홈</Link></li>
                  <li><Link className="nav-link" to="/programs" onClick={(e) => this.hideNavMenu(e)}>교육과목</Link></li>
                  <li><Link className="nav-link" to="/gallery" onClick={(e) => this.hideNavMenu(e)}>갤러리</Link></li>
                </ul>
              </div>
            </nav>
          </div>
          <Routes>
            <Route exact path='/' element={< Home />}></Route>
            <Route exact path='/programs' element={< Programs />}></Route>
            <Route exact path='/gallery' element={< Gallery />}></Route>
            <Route path="*" element={<Home />} />
          </Routes>
          <Contact />
        </div>
      </Router>
    );
  }
}

export default App;

