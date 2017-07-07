import React, { Component } from 'react';
import ImageUploadArea from './children/ImageUploadArea.js';
import { addListingImage } from '../../utils/imageHelpers.js';



export default class AddListingForm extends Component {
    constructor() {
        super();
        this.state = {

        }; 
    }

    uploadImage(imageData) {
        addListingImage(imageData);
    }

    render() {
        return (
            <div>
                <ImageUploadArea 
                    type="Listing" 
                    reference_id={}
                    upload={this.uploadImage}/> 
            </div>
        )
    } 
}