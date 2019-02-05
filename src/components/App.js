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
	const clientSECRET = process.env.REACT_APP_FOURSQUARE_CLIENT_SECRET;
	//console.log(clientID)
    //console.log(clientSECRET)

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
		.then(response => {
			let items = response.data.response.groups[0].items;
			console.log(items);
			this.setState({
				venues: items
			})
		})
		.catch(error => {
			console.log(error.response);
		})
    
  }

  render() {
	const venueList = this.state.venues.map(item =>
		<li>{item.venue.name}</li>	
	);
    return (
		<div>
			<ul>{ venueList }</ul>
		</div>
		
    );
  }

}

export default App;
