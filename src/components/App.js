import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      venues: []
    }
  }

  componentDidMount() {
    const clientID = process.env.REACT_APP_FOURSQUARE_CLIENT_ID;
    console.log(clientID)
    const clientSECRET = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET
    console.log(clientSECRET)

    // let setVenueState = this.setState.bind(this);

    const BASE_URL = 'https://api.foursquare.com/v2/venues/explore?';

    axios
      .get(BASE_URL, {
        params: {
          near: "Los Angeles",
          query: "sushi",
          limit: 5,
          v: 20190204,
          client_id: clientID,
          client_secret: clientSECRET
        }
      })
	//   .then(response => console.log(response))
	  .then(response => console.log(response.data.response.groups[0].items))
      .catch(error => {
        console.log(error.response);
      })
    
  }

  render() {

    return (
      <ul></ul>
    );
  }

}

export default App;
