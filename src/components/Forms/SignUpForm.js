import React, { Component } from 'react';
import ImageUploadArea from './children/ImageUploadArea.js';
import { sendNewAccount } from '../../utils/userHelpers.js';
import { addProfileImage } from '../../utils/imageHelpers.js';


export default class SignUpForm extends Component {
    constructor() {
        super();
        
        this.setProfileImageId = this.setProfileImageId.bind(this);
        this.updateImage = this.updateImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            firstName: "",
            lastName: "", 
            email: "",
            password: "",
            bio: "",
            profileImageId: ""
        }; 
    }

    updateImage(imageData) {
        addProfileImage(imageData);
    } 

    setProfileImageId(imageId) {
        let { image_id } = imageId;
        console.log(image_id);
        this.setState({ profileImageId: image_id }); 
    }

    handleSubmit(event) {
        event.preventDefault();
        let {
            firstName,
            lastName, 
            email,
            password,
            bio,
            profileImageId
        } = this.state;
        let submission = Object.assign({}, {
            firstName,
            lastName, 
            email,
            password,
            bio,
            profileImageId
        });
        sendNewAccount(submission);
    }

    handleChange(event) {
        let newState = {};
        switch(event.target.id) {
            case 'firstName': 
                newState.firstName = event.target.value;
                break;
            case 'lastName': 
                newState.lastName = event.target.value;
                break;
            case 'bio': 
                newState.bio = event.target.value;
                break;
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

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h4 className="">
                            <strong>First Name</strong>
                        </h4>
                        <input
                            value={this.state.firstName}
                            type="text"
                            className="form-control text-center"
                            id="firstName"
                            onChange={this.handleChange}
                            required
                        />
                        <br />
                        <h4 className="">
                            <strong>Last Name</strong>
                        </h4>
                        <input
                            value={this.state.lastName}
                            type="text"
                            className="form-control text-center"
                            id="lastName"
                            onChange={this.handleChange}
                            required
                        />
                        <br />
                        
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
                            type="text"
                            className="form-control text-center"
                            id="password"
                            onChange={this.handleChange}
                            required
                        />
                        <br />
                        <h4 className="">
                            <strong>Bio</strong>
                        </h4>
                        <input
                            value={this.state.bio}
                            type="text"
                            className="form-control text-center"
                            id="bio"
                            onChange={this.handleChange}
                            required
                        />
                        <br/>
                        
                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <ImageUploadArea 
                            type="Profile" 
                            reference_id="new" 
                            addImageLink={this.setProfileImageId}/>

                <br />
            </div>
        )
    } 
}