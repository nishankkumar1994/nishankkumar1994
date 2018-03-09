import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from './Layout';


class Topic extends React.Component {
	constructor(props) {
			super(props)
			this.state = { planet: null, nextPage: []  }
		}

		componentDidMount() {
				console.log('rr');
			this.fetchPlanet();
		}
		fetchPlanet() {//https://swapi.co/api/planets/2/
			fetch(`https://swapi.co/api/planets/${this.props.match.params.topicId}`)
			.then(response => response.json())
			.then(planet => {this.setState({ planet });});
		}

	render() {
		console.log(this.state.planet);
		if(!this.state.planet) {
			return (<Layout><div className="loading-spinner"><img src="/public/img/loader-old.gif" /></div></Layout>)
		}
		return (
			 <Layout>
					<h2>Planet - {this.state.planet.name}</h2>
							<ul className="table-form">
							<li><span className="left">{'name'}</span><span>:</span><span className="right">{this.state.planet.name}</span></li>
							<li><span className="left">{'rotation_period'}</span><span>:</span><span className="right">{this.state.planet.rotation_period}</span></li>
							<li><span className="left">{'orbital_period'}</span><span>:</span><span className="right">{this.state.planet.orbital_period}</span></li>
							<li><span className="left">{'diameter'}</span><span>:</span><span className="right">{this.state.planet.diameter}</span></li>
							<li><span className="left">{'climate'}</span><span>:</span><span className="right">{this.state.planet.climate}</span></li>
							<li><span className="left">{'gravity'}</span><span>:</span><span className="right">{this.state.planet.gravity}</span></li>
							<li><span className="left">{'terrain'}</span><span>:</span><span className="right">{this.state.planet.terrain}</span></li>
							<li><span className="left">{'surface_water'}</span><span>:</span><span className="right">{this.state.planet.surface_water}</span></li>
							<li><span className="left">{'population'}</span><span>:</span><span className="right">{this.state.planet.population}</span></li>
							<li><span className="left">{'created'}</span><span>:</span><span className="right">{this.state.planet.created}</span></li>
							<li><span className="left">{'edited'}</span><span>:</span><span className="right">{this.state.planet.edited}</span></li>
							</ul>
				</Layout>
			)
	}
}


export default Topic;
