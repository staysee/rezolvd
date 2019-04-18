import React from 'react';
import ReactDOM from 'react-dom';

import '../styles/navigation.css';

export default function Navigation(props) {

    return (
        <nav>
            <div className="logo">
                rezolvd
            </div>
            <ul className="nav-links">
                <li><a href="#">Profile</a></li>
                <li><a href="#">Find Friends</a></li>
                <li><a href="#">Log Out</a></li>
            </ul>
        </nav>
    );
}