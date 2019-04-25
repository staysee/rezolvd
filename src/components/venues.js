import React from 'react';
import axios from 'axios';

import '../styles/venues.css';

export class Venues extends React.Component {

    render() {
    
        const { name, location, categories } = this.props.details.venue;
    // console.log(this);
    // console.log(this.props.details.venue);




        // const venueList = this.state.venues.map(item =>
        //     <li className="venue-name">{item.venue.name}</li>	
        // );
        return (
            <div className="venue-results">
                <h3 className="venue-name">{name}</h3>
                <div className="venue-location">
                    <p className="venue-address">{location.formattedAddress[0]}</p>
                    <p className="venue-address">{location.formattedAddress[1]}</p>
                </div>
                <button onClick={() => this.props.addToFavorites(this.props.index)}>SAVE</button>
            </div>
            
        );
    }
}

export default Venues