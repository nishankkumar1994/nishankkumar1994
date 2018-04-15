import React from 'react';
import cookie from 'react-cookie';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {ProgressBar, Line} from 'react-progressbar.js';
import Layout from './Layout';
import Topic from './Topic';
import {randomColor, randomColorWR} from '../constant';


class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = { planetsTotal: '', pageCount: 1, totalPopulation: 20000, data: [], form: { name: '', password: ''}  };
	}
	async componentDidMount() {
		if(cookie){
			// console.log(cookie.load('name'), cookie.load('password'));
		}
	}
	onChangeUpdate(event){
		this.state.form[event.target.name] = event.target.value;
        this.setState({form: this.state.form});
	}
	async submitForm(){
		console.log(this.state.form.name)
		await fetch(`https://swapi.co/api/people/?search=${this.state.form.name}`)
		.then(response => response.json())
		.then(planets => {this.setState({ planetsTotal: planets.count, data: [...planets.results] })});
        this.state.data && this.state.data.map((item)=>{
        	if(item.name == this.state.form.name && item.birth_year == this.state.form.password){
        		console.log('success login-----------');
        		// cookie.save('name', this.state.form.name, { path: '/' });
        		// cookie.save('password', this.state.form.password, { path: '/' });
        		this.props.history.push('/topics');
        	}
        });
	}
	

	render() {
		// if(!this.state.data.length > 0) {
		// 	return (<Layout><div className="loading-spinner"><img src="/public/img/loader-old.gif" /></div></Layout>)
		// }
		console.log(this.state.data);
		return (
			 <div className="login-body clearfix">
	          	<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
				<div className="logo" />
				<div className="login-block">
				    <h1>Login</h1>
				    <input type="text" name="name" placeholder="Username" id="username" onChange={(e)=>this.onChangeUpdate(e)} />
				    <input type="password" name="password" placeholder="Password" id="password" onChange={(e)=>this.onChangeUpdate(e)} />
				    <button onClick={()=>this.submitForm()}>Submit</button>
				</div>
	        </div>
		)
	}
}

export default Login;
