import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './Header';

const Layout = (props) => {
    return (
    	<div>
     	 	<Header />
        	<div className="main-container clearfix">
         	 {props.children}
        	</div>
    	</div>
    )
}

export default Layout;
