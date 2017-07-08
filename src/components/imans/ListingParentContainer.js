import React from 'react';
import ReactDOM from 'react-dom';

import ListingInfoContainer from "./ListingInfo/ListingInfoContainer";
import ListingImageCarouselContainer from "./ListingImage/ListingImageCarouselContainer";

class ListingParentContainer extends React.Component {
  constructor(props){
    super(props);
    
  }


    render() {
        return (
              
              <div className="container">
                <div className="row">
                  
                  <ListingImageCarouselContainer />

                  <ListingInfoContainer />
                    

                </div>
              </div>

    );
  };
}
export default ListingParentContainer;

