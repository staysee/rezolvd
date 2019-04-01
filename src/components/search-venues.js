import React from 'react';
import axios from 'axios';

import '../styles/search-venues.css';

const { API_KEY } = process.env
const API_URL = '';

class SearchVenues extends React.Component {
    state = {
        query: '',
        results: []
    }
    
    getInfo = () => {
        axios
            .get(`${API_URL}?api_key=${API_KEY}&prefix=${this.state.query}&limit=7`)
            .then(({ data }) => {
                this.setState({
                    results: data.data
                })
            })
    }

    handleInputChange = () => {
        this.setState({
            query: this.search.value
        }, () => {
            if (this.state.query && this.state.query.length > 1){
                if (this.state.query.length % 2 === 0 ){
                    this.getInfo()
                }
            }
        })
    }

    

    render() {
        return (
            <form>
                <input
                    placeholder="Search for..."
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}
                />
                <p>{this.state.query}</p>
            </form>
        )
    }
}

export default SearchVenues