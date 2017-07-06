import React, { Component } from 'react';
import ImageUploadArea from './children/ImageUploadArea.js';



export default class SignUpForm extends Component {
    constructor() {
        super();
        this.state = {

        }; 
    }

    render() {
        return (
            <div>
                <ImageUploadArea />
            </div>
        )
    } 
}