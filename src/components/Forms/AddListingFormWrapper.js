import React, { Component } from 'react';
import AddListingForm from './Base/AddListingForm.js';
import ImageUploadArea from './Base/ImageUploadArea.js';
import { addNewListing } from '../../utils/apiHelpers.js';

export default class AddListingFormWrapper extends Component {
    constructor() {
        super();
        this.state = {
             listingImageIds: []
        };  
    }


    addListingLink(data) {
        let listingImageId =  data.image_id.split('/')[3].split("#")[0].split('.')[0]; //retrieving the id from the url
        let listingImageList = this.state.listingImageIds
        listingImageList.push(listingImageId);
        console.log("Pushing " + listingImageId);
        this.setState({ listingImageIds: listingImageList });
    }

    upstreamSendListing(newListingData) {
        let submission = Object.assign({}, newListingData);
        submission.user_id = this.props.user_id;
        addNewListing(submission);
    }


    render() {
        return (
            <div>
                <AddListingForm
                    sendListing={this.upstreamSendListing.bind(this)}
                />
                <ImageUploadArea
                    type="Listing"
                    addImageLink={this.addListingLink.bind(this)}
                    reference_id='new'
                /> 
            </div>
        )
    }
}