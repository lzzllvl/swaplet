import React, { Component } from 'react';
import ImageUploadArea from './children/ImageUploadArea.js';



export default class AddListingForm extends Component {
    constructor() {
        super();
        this.state = {

        }; 
    }

    render() {
        return (
            <div>
                <ImageUploadArea type="listing" listing_id={}/> 
            </div>
        )
    } 
}