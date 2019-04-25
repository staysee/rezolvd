import React from 'react';
import axios from 'axios';

import '../styles/search-venues.css';

const { API_KEY } = process.env
const API_URL = '';

class SearchVenues extends React.Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         searchTerm: '',
    //         venues: []
    //     }
    // }
    
    handleChange = (event) => {
        const searchTerm = event.currentTarget.value;
        // this.setState({searchTerm});
        // this.props.onSearchTermChange(event);
    }

    // handleSubmit = event => {
    //     event.preventDefault();
    //     this.props.handleFormSubmit(this.state.term);
    // }

    render() {
        return (
            <div className="search-bar">
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="field">
                        <label htmlFor='venue-search'>Venue Search</label>
                        <input
                            onChange={this.handleChange}
                            name='venue-search'
                            type='text'
                            placeholder='Enter your search...'
                         />
                    </div>
                    <div className="field">
                        <label htmlFor='search-location'>Location</label>
                        <input
                            name='search-location'
                            type='text'
                            placeholder='City, State' />
                            
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchVenues