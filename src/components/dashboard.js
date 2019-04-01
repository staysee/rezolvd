import React from 'react';

import Navigation from './navigation';
import Venues from './venues';

export default class Dashboard extends React.Component {
    render() {
        return (
            <main>
                <Navigation />
                <Venues />
            </main> 
        )
    }
}