import React from 'react';
import ReactDOM from 'react-dom';


import ListingTitle from "./ListingInfoLeft/ListingTitle";
import ListingLocation from "./ListingInfoLeft/ListingLocation";
import ListingDescription from "./ListingInfoLeft/ListingDescription";
import ListingAmenities from "./ListingInfoLeft/ListingAmenities";

class ListingInfoLeft extends React.Component {
	constructor(props){
		super(props);
		
	}

    render() {
        return (
              
			<div className="col col-xs-9">
				
				<ListingTitle />
				
				<ListingLocation />
				
				<ListingDescription />
				
				<ListingAmenities />
	        
	        </div>

    );
  };
}
export default ListingInfoLeft;