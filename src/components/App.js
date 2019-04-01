import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Landing from './landing';
import RegistrationForm from './registration-form';
import LoginForm from './login-form';
import Dashboard from './dashboard';
import Venues from './venues';

export default function App(props) {
	return (
		<Router>
			<div className="app">
				<main>
					<Route exact path="/" component={Landing} />
					<Route exact path="/registration" component={RegistrationForm} />
					<Route exact path="/login" component={LoginForm} />
					<Route exact path="/dashboard" component={Dashboard} />
					<Route exact path="/venues" component={Venues} />
				</main>
			</div>
		</Router>
	)
}