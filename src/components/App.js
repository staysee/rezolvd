import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Landing from './landing/landing';
import Favorites from './favorites/favorites'

export default function App(props) {
	return (
		<Router>
			<div className="app">
				<header>
					{/* <h1><Link to="/">REZOLVD</Link></h1> */}
				</header>

				<main>
					<Route exact path="/" component={Landing} />
					{/* <Route exact path="/favorites" component={Favorites} /> */}

				</main>
			</div>
		</Router>
	)
}