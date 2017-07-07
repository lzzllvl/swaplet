import React, { Component } from 'react';
import ImageUploadArea from './children/ImageUploadArea.js';
import { sendNewAccount } from '../../utils/userHelpers.js';
import { addProfileImage } from '../../utils/imageHelpers.js';


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

    uploadImage(imageData) {
        addProfileImage(imageData);
    } 

    render() {
        return (
            <div>
                <ImageUploadArea 
                    type="Profile" 
                    reference_id={} 
                    upload={this.uploadImage}/>
            </div>
        )
    } 
}