import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import '../styles/landing.css';

import LoginForm from './login-form';

export default class Landing extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Test'
        }
    }

    render() {
        return (
            <div className="landing">
                <h1 class="title">REZOLVD</h1>

                <div className="landing-container">
                    <p class="description">Are your friends indecisive? Do you pick fights over where dinner will be?<br />Rezolvd alleviates the stress of picking your next group hangout!</p>

                    <div className="product-features">
                        <div className="feature">
                            <i class="fas fa-star"></i>
                            <h3>Find your favorites</h3>
                            <p>Let your voice be heard. Select your recommendations or your favorite venues to have them entered into the draw.</p>
                        </div>
                        <div className="feature">
                            <h3>Pick your clique</h3>
                            <p>Choose the friends you will be hanging out with. Their recommendations will be put into the pool of choices.</p>
                        </div>
                        <div className="feature">
                            <h3>Choose your destination</h3>
                            <p>Randomly select the venue of your next hangout from your group's selection.</p>
                        </div>
                    </div>

                    <h3 class="description-2">Let us help you select the next hangout</h3>
                    {/* <LoginForm /> */}
                    <div className="sign-up">
                        <button className="join"><Link to="/registration">Join today</Link></button>
                        <button className="login"><Link to="/login">Log In</Link></button>
                    </div>



                </div>


            </div>
        )
    }
}