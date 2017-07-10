import React, { Component } from 'react';
import { sendLogin } from '../../../utils/userHelpers.js';




export default class LoginForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);  
    }

    handleChange(event) {
        
        let newState = {};
        switch(event.target.id) {
            case 'email': 
                newState.email = event.target.value;
                break;
            case 'password':
                newState.password = event.target.value;
                break;
            default:
                newState = this.state; 
        }
        this.setState(newState);
    }

    handleSubmit(event) {
        event.preventDefault();
        let { email, password } = this.state;
        let userData = Object.assign({}, { email, password });
        sendLogin(userData).then((response) => {
            console.log(response);
        }); 
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h4 className="">
                            <strong>Email Address</strong>
                        </h4>
                        <input
                            value={this.state.email}
                            type="text"
                            className="form-control text-center"
                            id="email"
                            onChange={this.handleChange}
                            required
                        />
                        <br />
                        <h4 className="">
                            <strong>Password</strong>
                        </h4>
                        <input
                            value={this.state.password}
                            type="password"
                            className="form-control text-center"
                            id="password"
                            onChange={this.handleChange}
                            required
                        />
                        <br />
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    } 
}