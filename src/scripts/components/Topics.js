import React from 'react';
// import fetch from 'fetch';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {ProgressBar, Line} from 'react-progressbar.js';
// import Line from ProgressBar.Line;
import Layout from './Layout';
import Topic from './Topic';
import {randomColor} from '../constant';
// var fetch = require("fetch");

class Topics extends React.Component {
  constructor(props) {
      super(props)
      this.state = { planets: [] }
    }

    componentDidMount() {
        console.log('rr');
      this.fetchPlanets();
    }
    fetchPlanets() {
      fetch('https://swapi.co/api/planets/')
      .then(response => response.json())
      .then(planets => {this.setState({ planets })});
    }
    getUrl(str) {
      if(str) {
        let arr = str.split('/');
        return arr[arr.length-2];
      }
      return '/';
    }
    // async fetchPlanets() {
    //     // let headers = new Headers()
    //     // headers.append('key-goes-here', 'pass-goes-here')
    //     // headers.append('Accept', 'application/json')
    //     // let request = new Request('api-url-goes-here' + planets, {headers: headers})
    //     // let data = await fetch(request).then(response => response.json()).then(json => json.players.forward)
    //     // console.log(data) // 'Christopher Brown'
    //     // return data
    //     try {
    //       let response = await fetch(
    //         'https://swapi.co/api/planets/'
    //       );
    //       let planets = await response.json();
    //       this.setState({ planets });
    //     } catch (error) {
    //       console.error(error);
    //     }
    // }

  render() {
    console.log(this.state.planets);
    return (
       <Layout>
          <h2>Planets - {this.state.planets.count}</h2>
          <ul className="topic-list">
              {this.state.planets && this.state.planets.results && this.state.planets.results.map((item, id) => (
                 <li key={id} className="blue"><Link to={`/topics/${this.getUrl(item.url)}`}>
                  {item.name}
                      <Line
                          progress={item.surface_water * 0.01}
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
              
          </ul>    
        </Layout>
      )
  }
}


export default Topics;
