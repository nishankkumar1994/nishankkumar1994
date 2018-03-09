import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {ProgressBar, Line} from 'react-progressbar.js';
import Layout from './Layout';
import Topic from './Topic';
import {randomColor, randomColorWR} from '../constant';

class Topics extends React.Component {
	constructor(props) {
		super(props);
		this.state = { planetsTotal: '', pageCount: 1, totalPopulation: 20000, data: []  };
	}

	async componentDidMount() {
		console.log('rr');
		 await this.fetchPlanets();
		 await this.findMaxInArrar();
	}
	async fetchPlanets(count) {
		if(count) {
		this.state.pageCount++;  
		}
		await fetch(`https://swapi.co/api/planets/?page=${this.state.pageCount}`)
		.then(response => response.json())
		.then(planets => {this.setState({ planetsTotal: planets.count, data: [...this.state.data, ...planets.results] })});
	}
	getUrl(str) {
		if(str) {
		let arr = str.split('/');
		return arr[arr.length-2];
		}
		return '/';
	}
	findMaxInArrar() {
		let max = 0;
		for(let i=0; i<this.state.data.length; i++){
		console.log(this.state.data[i].population);
		if(this.state.data[i].population != 'unknown'){
		max = Math.max(max, this.state.data[i].population);
		}
		console.log(max);
		}
		this.setState({ totalPopulation: max })
	}

	render() {
	if(!this.state.data.length > 0) {
		return (<Layout><div className="loading-spinner"><img src="/public/img/loader-old.gif" /></div></Layout>)
	}
	return (
		 <Layout>
			<h2>Planets - {this.state.planetsTotal}</h2>
			<ul className="topic-list">
				{this.state.data && this.state.data.map((item, id) => (
				 <li key={id} className={`color-${randomColorWR()}`}><Link to={`/topics/${this.getUrl(item.url)}`}>
					{item.name} - {item.population}
						<Line
							progress={item.population/this.state.totalPopulation}
							// text={randomColor()}
							options={{
								strokeWidth: 2,
								color: randomColor()
							}}
							initialAnimate={true}
							containerStyle={{
								// width: '200px',
								// height: '200px'
								display: 'inline-block'
							}}
							containerClassName={'progressbar'} />
					</Link></li>
				))}
				<button className="btn btn-primary load-more-btn" onClick={()=>this.fetchPlanets(true)}>load More</button>
			</ul>    
		</Layout>
		)
	}
}

export default Topics;
