import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from '../input';
import {required, nonEmpty, matches, length, isTrimmed} from '../../validators';
import './registration-form.css';

const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');



export class RegistrationForm extends React.Component {
    onSubmit(values) {
        console.log(values);
    }

    render() {
        // const {fields: {firstName, lastName, email}, handleSubmit} = this.props;
        return (
            <form
                className="login-form"
                // onSubmit={handleSubmit(this.handleSubmit(values =>
                //     this.onSubmit(values)
                >

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
            </form>
        )
    }
}

export default reduxForm({
    form: 'registration',
    onSubmitFail: (errors, dispatch) =>
        dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);