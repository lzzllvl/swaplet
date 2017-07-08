import React, { Component } from 'react';
import ImageUploadArea from './children/ImageUploadArea.js';
import { addListingImage } from '../../utils/imageHelpers.js';



export default class AddListingForm extends Component {
    constructor() {
        super();
        this.state = {
            profileListingId: '',

        }; 
    }

    uploadImage(imageData) {
        addListingImage(imageData);
    }

    setListingeImageId(imageId) {
        let { image_id } = imageId;
        this.setState({ listingImageId: image_id }); 
    }

    render() {
        return (
            <div>
                <ImageUploadArea 
                    type="Listing" 
                    reference_id='new'
                    addImageLink={this.setListingeImageId}/> 
            </div>
        )
    } 
}