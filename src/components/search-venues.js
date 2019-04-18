import React from 'react';
import axios from 'axios';

import '../styles/search-venues.css';

const { API_KEY } = process.env
const API_URL = '';

class SearchVenues extends React.Component {
    state = {
        term: ''
    }
    
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

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
                            value={this.state.term}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchVenues