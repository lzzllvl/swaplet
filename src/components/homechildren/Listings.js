//Import dependencies using ES6
import React from 'react';

import Listingcard from "./listingschildren/Listingcard";
// THIS IS THE MAIN CONTAINER THAT SHOWS THE LIST OF LISTINGS
// FOUND ON THE HOMEPAGE
// WILL CONTAIN LISTING CARD CHILD COMPONENTS
// WE ONLY NEED ONE CARD CHILD COMPONENT INPUTTED IN HERE...
// REACT HAS THE MAP FUNCTION IN THE RENDER TO REUSE THIS COMPONENT FOR MULTIPLE LISTINGS
// https://facebook.github.io/react/docs/lists-and-keys.html#basic-list-component

class Listings extends React.Component {

	render() {
		return (
			<div className="col-sm-6" id="listings">
		        <div>Search String: <strong>{this.props.searchString}</strong></div>
		        <div>Listing Type: <strong>{this.props.listingType}</strong></div>
		        <div>Bed Count: <strong>{this.props.bedCount}</strong></div>
		        <div>Bath Count: <strong>{this.props.bathCount}</strong></div>
			</div>

		);
	}
}

export default Listings;
