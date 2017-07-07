import React, { Component } from 'react';
import ImageUploadArea from './children/ImageUploadArea.js';
import { sendNewAccount } from '../../utils/userHelpers.js';


export default class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "", 
            email: "",
            password: "",
            bio: ""
        }; 
    }

    render() {
        return (
            <div>
                <ImageUploadArea type="profile" user_id={}/>
            </div>
        )
    } 
}