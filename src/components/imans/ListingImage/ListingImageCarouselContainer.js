import React from 'react';
import ReactDOM from 'react-dom';


import ListingImageCarousel from "./ListingImageCarousel";


class ListingImageCarouselContainer extends React.Component {
	constructor(props){
		super(props);
		
	}

    render() {
        return (
              
			<div className="col col-xs-12">
				
				<ListingImageCarousel />

	        </div>

    );
  };
}
export default ListingImageCarouselContainer;