import React, { Component } from 'react';
import SignUpForm from './Base/SignUpForm.js';
import ImageUploadArea from './Base/ImageUploadArea.js';
import { sendNewAccount } from '../../utils/userHelpers.js';

export default class SignUpFormWrapper extends Component {
    constructor() {
        super();
        this.state = {
             profileImageId: ''
        };  
    }


    addProfileLink(data) {
        let profileImageId =  data.image_id.split('/')[3].split("#")[0].split('.')[0]; //retrieving the id from the url
        this.setState({profileImageId: profileImageId});
    }

    upstreamSendProfile(newUserData) {
        let submission = Object.assign({}, newUserData, this.state);
        sendNewAccount(submission);
    }


    render() {
        return (
            <div>
                <SignUpForm
                    sendProfile={this.upstreamSendProfile.bind(this)}
                />
                <ImageUploadArea
                    type="Profile"
                    addImageLink={this.addProfileLink.bind(this)}
                    reference_id='new'
                /> 
            </div>
        )
    }
}