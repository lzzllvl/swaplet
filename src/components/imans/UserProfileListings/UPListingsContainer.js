import React from 'react';
import ReactDOM from 'react-dom';


import IndividualListingContainer from "./IndividualListingContainer";


class UPListingsContainer extends React.Component {
	constructor(props){
		super(props);
		
	}

    render() {
        return (
        		

				<div className="col col-xs-12">
					<h2>Check Out My Listings</h2>

					<IndividualListingContainer />


					
				</div>

    );
  };
}

export default UPListingsContainer;