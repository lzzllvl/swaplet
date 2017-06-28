//Import dependencies using ES6
import React from 'react';

import Listingparent from './listingchildren/listingcard';
// THIS IS THE MAIN CONTAINER THAT SHOWS THE LIST OF LISTINGS
// FOUND ON THE HOMEPAGE
// WILL CONTAIN LISTING CARD CHILD COMPONENTS
// WE ONLY NEED ONE CARD CHILD COMPONENT INPUTTED IN HERE...
// REACT HAS THE MAP FUNCTION IN THE RENDER TO REUSE THIS COMPONENT FOR MULTIPLE LISTINGS
// https://facebook.github.io/react/docs/lists-and-keys.html#basic-list-component

class Listingparent extends React.Component {

	render() {
		return (
			<div className="container">
				<div className="row">
					<div class="col-sm-10 col-sm-offest-1">

					<Listingcard/>

					</div>
				</div>
			</div>

		);

	}
}
