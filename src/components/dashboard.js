import React from 'react';

import Navigation from './navigation';
import Venues from './venues';
import '../styles/dashboard.css';

export default class Dashboard extends React.Component {
    render() {
        return (
            <main>
                <Navigation />

                <div className="container">
                    <section className="actions">
                        <div className="action-step">Find My Favorites</div>
                        <div className="action-step">Pick My Clique</div>
                        <div className="action-step">Choose My Hangout</div>
                    </section>
                    <section className="screen">
                        <Venues />
                    </section>
                </div>
            </main> 
        )
    }
}