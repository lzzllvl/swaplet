import React from 'react';
import ReactDOM from 'react-dom';

import ListingInfoLeft from "./ListingInfoLeft";
import ListingInfoRight from "./ListingInfoRight";

class ListingInfoContainer extends React.Component {
	constructor(props){
		super(props);
		
	}

    render() {
        return (
              
			<div className="col col-xs-12">
				
				<ListingInfoLeft />
				
				<ListingInfoRight />

	        </div>

    );
  };
}
export default ListingInfoContainer;