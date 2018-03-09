import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './Login';
import Topics from './Topics';
import Topic from './Topic';

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	// toggleTheme(theme) {
	// 	const newTheme = theme;
	// 	localStorage ? localStorage.setItem('THEME_COLOR', theme) : '';
	// 	this.props.dispatchThemeChange(newTheme)
	// }

	render() {
		return (
			 <Router>
			    <div>
			      <Route exact path="/" component={Login} />
			      <Route path="/login" component={Login} />
			      <Route exact path="/topics" component={Topics} />
					<Route  path={`/topics/:topicId`} component={Topic} />
			    </div>
			 </Router>
			)
	}
}

export default App
