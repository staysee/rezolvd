import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      venues: []
    }
  }

  getVenues() {
    const clientID = process.env.REACT_APP_FOURSQUARE_CLIENT_ID;
    console.log(clientID)
    const clientSECRET = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET
    console.log(clientSECRET)

    let setVenueState = this.setState.bind(this);

    const BASE_URL = 'https://api.foursquare.com/v2/venues/explore?';

    axios
      .get(BASE_URL, {
        params: {
          near: "Los Angeles",
          query: 'sushi',
          limit: 5,
          v: 20190204,
          client_id: clientID,
          client_secret: clientSECRET
        }
      })
      .then(response => console.log(response.data.response.groups[0].items))
      .then(response => {
        setVenueState({venues: response.data.response.groups[0].items})
      })
      .catch(error => {
        console.log(error.response);
      })
    
  }

  componentDidMount() {
    this.getVenues();
  }

  render() {
    const venueList = this.state.venues.map(item =>
      <li>{item.venue.name}</li>  
    )

    return (
      <ul>{venueList}</ul>
    );
  }
}

export default App;
