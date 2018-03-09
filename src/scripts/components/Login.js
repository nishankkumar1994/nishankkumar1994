import React from 'react';
import Layout from './Layout';

const Login = (props) => {
    return (
        <div className="login-body clearfix">
          	<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css' />
			<div className="logo" />
			<div className="login-block">
			    <h1>Login</h1>
			    <input type="text" value="" placeholder="Username" id="username" />
			    <input type="password" value="" placeholder="Password" id="password" />
			    <button>Submit</button>
			</div>
        </div>
    )
}

export default Login;
