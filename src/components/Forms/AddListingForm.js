import React, { Component } from 'react';
import ImageUploadArea from './children/ImageUploadArea.js';
import { addListingImage } from '../../utils/imageHelpers.js';
import { addNewListing } from '../../utils/apiHelpers.js';

//need to pass in the owner mongo _id as a prop
export default class AddListingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            nightlyRate: 0.00,
            sublettable: true,
            swappable: false,
            amenities: [],
            prefferedSwapLocations: [],
            specifications: {
                bedrooms: 1,
                bathrooms: 1,
                listingType: ''
            },
            imageLinks: []
        }; 

        this.uploadImage = this.uploadImage.bind(this);
        this.addListingeImageId = this.addListingeImageId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    //this currently isnt doing anything
    uploadImage(imageData) {
        addListingImage(imageData);
    }

    addListingeImageId(imageId) {
        let { image_id } = imageId;
        image_id = image_id.split('/')[3].split("#")[0].split('.')[0]; //retrieving the id from the url
        let newImageList = this.state.imageLinks.push(image_id);
        this.setState({ imageLinks: newImageList }); 
    }

    handleSubmit(event) {
        event.preventDefault();
        addNewListing(this.state, this.props.user_id)
    }

    handleChange(event) {
        let newState = {};
        switch(event.target.id){
            default:
                newState = this.state;
        }
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <ImageUploadArea 
                    type="Listing" 
                    reference_id='new'
                    addImageLink={this.addListingeImageId}/> 
            </div>
        )
    } 
}