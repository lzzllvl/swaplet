import React from 'react';
import ReactDOM from 'react-dom';


import ListingImageCarousel from "./ListingImageCarousel";


class ListingImageCarouselContainer extends React.Component {
	constructor(props){
		super(props);
		
	}

    render() {
        return (
              
			<div className="">
				
				<ListingImageCarousel />

	        </div>

    );
  };
}
export default ListingImageCarouselContainer;