import React from 'react';
import ReactDOM from 'react-dom';


import ListingImageCarouselContainer from "../ListingImage/ListingImageCarouselContainer";
import ListingTitle from "./ListingTitle";
import ListingLocation from "./ListingLocation";
import ListingInfo from "./ListingInfo";
import ListingAvailability from "./ListingAvailability";
import ListingButtonsContainer from "../ListingButtons/ListingButtonsContainer";

class ListingInfoContainer extends React.Component {
	constructor(props){
		super(props);
		
	}

    render() {
        return (
              
			<div className="col col-xs-12">
				
				<ListingImageCarouselContainer />

				<ListingTitle />
				
				<ListingLocation />
				
				<ListingInfo />
				
				<ListingAvailability />
				
				<ListingButtonsContainer />

	        </div>

    );
  };
}
export default ListingInfoContainer;