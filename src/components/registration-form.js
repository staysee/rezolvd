import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import '../styles/registration-form.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');



export class RegistrationForm extends React.Component {
    onSubmit(values) {
        console.log(values);
        const {username, password, firstName, lastName} = values;
        const user = {username, password, firstName, lastName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        // const {fields: {firstName, lastName, email}, handleSubmit} = this.props;
        return (
            <div>
                <h1 class="title">REZOLVD</h1>
            
                <form
                    className="registration-form"
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}>

                    <label htmlFor="firstName">First Name</label>
                    <Field 
                        name="firstName"
                        type="text"
                        component={Input} />
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                        name="lastName"
                        type="text"
                        component={Input}  />
                    <label htmlFor="email">Email Address</label>
                    <Field
                        name="email"
                        type="email"
                        component={Input}
                        validate={[required, nonEmpty, isTrimmed]} />
                    <label htmlFor="username">Username</label>
                    <Field 
                        name="username"
                        type="text"
                        component={Input}
                        validate={[required, nonEmpty, isTrimmed]} />
                    <label htmlFor="password">Password</label>
                    <Field
                        name="password"
                        type="password"
                        component={Input}
                        validate={[required, nonEmpty, isTrimmed]} />
                    <label htmlFor="passwordConfirm">Confirm Password</label>
                    <Field 
                        name="passwordConfirm" 
                        type="password" 
                        component={Input} 
                        validate={[required, nonEmpty, matchesPassword]} />
                    <button
                        type="submit"
                        disabled={
                            this.props.pristine || this.props.submitting
                        }>
                        Sign Me Up
                    </button>
                    <Link to="/login">I already have an account!</Link>
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);