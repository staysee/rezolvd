import React from 'react';
import axios from 'axios';

import '../styles/venues.css';

export class Venues extends React.Component {
    constructor(props) {
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
            <li className="venue-name">{item.venue.name}</li>	
        );
        return (
            <div>
                <div className="search-venue">
                </div>
                <ul>{ venueList }</ul>
            </div>
            
        );
    }
}

export default Venues