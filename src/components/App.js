import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Landing from './landing';
import RegistrationForm from './registration-form';
import Dashboard from './dashboard';
import Favorites from './favorites';

export default function App(props) {
	return (
		<Router>
			<div className="app">
				<main>
					<Route exact path="/" component={Landing} />
					<Route exact path="/registration" component={RegistrationForm} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/favorites" component={Favorites} />
				</main>
			</div>
		</Router>
	)
}