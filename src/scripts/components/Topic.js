import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Layout from './Layout';


class Topic extends React.Component {
  constructor(props) {
      super(props)
      this.state = { planet: [], nextPage: []  }
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
    // async fetchPlanet() {
    //     // let headers = new Headers()
    //     // headers.append('key-goes-here', 'pass-goes-here')
    //     // headers.append('Accept', 'application/json')
    //     // let request = new Request('api-url-goes-here' + planet, {headers: headers})
    //     // let data = await fetch(request).then(response => response.json()).then(json => json.players.forward)
    //     // console.log(data) // 'Christopher Brown'
    //     // return data
    //     try {
    //       let response = await fetch(
    //         'https://swapi.co/api/planet/'
    //       );
    //       let planet = await response.json();
    //       this.setState({ planet });
    //     } catch (error) {
    //       console.error(error);
    //     }
    // }

  render() {
    console.log(this.state.planet);
    return (
       <Layout>
          <h2>Planet - {this.state.planet.name}</h2>
              <ul>
              	{this.state.planet && this.state.planet.map((item) => (
              		<li><span className="left">{item.key}</span><span>:</span><span className="right">{item.value}</span></li>
              	))}
              </ul>
        </Layout>
      )
  }
}


export default Topic;
