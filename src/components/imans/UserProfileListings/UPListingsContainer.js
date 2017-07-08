import React from 'react';
import ReactDOM from 'react-dom';


import IndividualListingContainer from "./IndividualListingContainer";


class UPListingsContainer extends React.Component {
	constructor(props){
		super(props);
		
	}

    render() {
        return (
        		

				<div className="container">
				<div className="row">
					<h2>Check Out My Listings</h2>

					<IndividualListingContainer />


					
				</div>
				</div>

    );
  };
}

export default UPListingsContainer;