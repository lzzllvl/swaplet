import React from 'react';
import ReactDOM from 'react-dom';


import IndividualListingImage from "./IndividualListingInfo/IndividualListingImage";
import IndividualListingTitle from "./IndividualListingInfo/IndividualListingTitle";
import IndividualListingButton from "./IndividualListingInfo/IndividualListingButton";

class IndividualListingContainer extends React.Component {
	constructor(props){
		super(props);
		
	}

    render() {
        return (


				<div className="container">
					<div className="row">

					<IndividualListingImage />
					<IndividualListingTitle />
					<IndividualListingButton />


					</div>
				</div>

    );
  };
}

export default IndividualListingContainer;