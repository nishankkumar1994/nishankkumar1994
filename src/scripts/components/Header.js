import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {

  componentWillMount() {
	console.log('in');
	const showHeaderAt = 150;

	const win = window;
	const body = document.documentElement.getElementsByTagName('body')[0];
	// Show the fixed header only on larger screen devices

	if(win.outerWidth > 600){

		// When we scroll more than 150px down, we set the
		// "fixed" class on the body element.
		window.addEventListener('scroll', function() {
			if(win.scrollY > showHeaderAt) {
				body.classList.add('fixed');
			}
			else {
				body.classList.remove('fixed');
			}
		});
	}
  }

  render() {
    return (
        <header className="header-fixed">
			<div className="header-limiter">
				<h1><Link to={`/`}>Company<span>logo</span></Link></h1>
				<nav>
					<Link to={`/`}>Home</Link>
					<Link to={`/topics`}>Topics</Link>
					<Link to={`/about`}>About</Link>
					<Link to={`/faq`}>Faq</Link>
					<Link to={`/contact`}>Contact</Link>
					<Link to={`/logout`}>Logout</Link>
				</nav>
			</div>
		</header>
    );
  }
}

export default Header;
