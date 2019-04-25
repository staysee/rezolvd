import React from 'react';
import axios from 'axios';

import SearchVenues from './search-venues';
import Venues from './venues';
import SavedFavorites from './saved-favorites';

export default class Favorites extends React.Component {
    state = {
        searchTerm: '',
        venues: {},
        favorites: {}
    };

    addToFavorites = key => {
        console.log('adding to favorites');
        const favorites = {...this.state.favorites}

        favorites[key] = favorites[key] + 1 || 1

        this.setState({
            favorites: favorites
        })
    }


    onSubmit = event => {
        event.preventDefault();
        console.log('finding venue');
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
                // console.log(this.state.venues)
            })
            .catch(error => {
                console.log(error.response);
            })
        
    }

    venueSearch(venue){
        this.setState({venue})
    }

    render() {
        console.log(this);
        return (
            <section>
                <div className="venue-searchbar">
                    <SearchVenues onSubmit={this.onSubmit} />
                </div>
                <ul className="venues-list">
                    {Object.keys(this.state.venues).map(key => (
                        <Venues
                            key={key}
                            index={key}
                            details={this.state.venues[key]}
                            addToFavorites={this.addToFavorites}
                        />
                    ))}
                </ul>
                <div>
                    <SavedFavorites addFavorite={this.addFavorite} />
                </div>
            </section>
        )
    }
}