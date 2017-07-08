import React from 'react';
import ReactDOM from 'react-dom';

import ListingAvailability from "./ListingInfoRight/ListingAvailability";
import ListingButtonsContainer from "./ListingInfoRight/ListingButtons/ListingButtonsContainer";



class ListingInfoRight extends React.Component {
	constructor(props){
		super(props);
		
	}

    render() {
        return (
			
			<div className="col col-xs-3">
				
				<ListingAvailability />
				
				<ListingButtonsContainer />

	        </div>


    );
  };
}
export default ListingInfoRight;