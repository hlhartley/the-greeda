import React, { Component } from 'react';
import './Navigation.scss';

class Navigation extends Component {
	render() {
		return (
			<div className= { this.props.navFixed ? "navigation-container fixed-nav" : "navigation-container" }>
				<div className='logo'><i class="fas fa-cloud"></i>Top</div>
				<div className='nav-link-container'>
					<div className="nav-link">About</div>
					<div className="nav-link">Portfolio</div>
					<div className="nav-link">Testimonials</div>
					<div className="nav-link">Contact</div>
				</div>
			</div>
		);
	}
}

export default Navigation;
