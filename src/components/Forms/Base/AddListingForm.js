import React, { Component } from 'react';
import { addListingImage } from '../../../utils/imageHelpers.js';


//need to pass in the owner mongo _id as a prop
export default class AddListingForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            nightlyRate: 0.00,
            sublettable: true,
            swappable: true,
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
      //  this.addListingImageId = this.addListingImageId.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    //this currently isnt doing anything
    uploadImage(imageData) {
        addListingImage(imageData);
    }

    // addListingImageId(imageId) {
    //     let { image_id } = imageId;
    //     image_id = image_id.split('/')[3].split("#")[0].split('.')[0]; //retrieving the id from the url
    //     let newImageList = this.state.imageLinks;
    //     newImageList.push(image_id);
    //     this.setState({ imageLinks: newImageList }); 
    // }

    handleSubmit(event) {
        event.preventDefault();
        this.props.sendListing(this.state)
    }

    handleChange(event) {
        let newState = {};
        switch(event.target.id){
            case 'address': 
                newState.address = event.target.value;
                break;
            case 'nightlyRate':
                newState.nightlyRate = event.target.value;
                break;
            case 'sublettable':
                newState.sublettable = !this.state.sublettable;
                break;
            case 'swappable':
                newState.swappable = !this.state.swappable;
                break;
            case 'amenities': 
                newState.amenities = event.target.value.split(',');
                break;
            case 'prefferedSwapLocations':
                newState.prefferedSwapLocations = event.target.value.split(',');
                break;
            case 'specifications': 
                newState.specifications = event.target.value.split(',');
                break;

            default:
                newState = this.state;
        }
        console.log(this.state);
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <h4 className="">
                            <strong>Address</strong>
                        </h4>
                        <input
                            value={this.state.address}
                            type="text"
                            className="form-control text-center"
                            id="address"
                            onChange={this.handleChange}
                            required
                        />
                        <br />
                        <h4 className="">
                            <strong>Nightly Rate</strong>
                        </h4>
                        <input
                            value={this.state.nightlyRate}
                            type="number"
                            className="form-control text-center"
                            id="nightlyRate"
                            onChange={this.handleChange}
                            required
                        />
                        <br />
                        
                        <h4 className="">
                            <strong>Open to Sublet</strong>
                        </h4>
                        <input
                            value={this.state.sublettable}
                            type="checkbox"
                            className="form-control text-center"
                            id="sublettable"
                            onChange={this.handleChange}
                            
                        />
                        <br />
                        <h4 className="">
                            <strong>Open to Swap</strong>
                        </h4>
                        <input
                            value={this.state.swappable}
                            type="checkbox"
                            className="form-control text-center"
                            id="swappable"
                            onChange={this.handleChange}
                            
                        />
                        <br />
                        <h4 className="">
                            <strong>Amenities</strong>
                        </h4>
                        <input
                            value={this.state.amenities}
                            type="text"
                            className="form-control text-center"
                            id="amenities"
                            onChange={this.handleChange}
                            required
                        />
                        <br/>
                        <h4 className="">
                            <strong>Preffered Swap Locations</strong>
                        </h4>
                        <input
                            value={this.state.prefferedSwapLocations}
                            type="text"
                            className="form-control text-center"
                            id="prefferedSwapLocations"
                            onChange={this.handleChange}
                            required
                        />
                        <br/>
                      

                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Add Listing
                        </button>
                    </div>
                </form>
            </div>
        )
    } 
}