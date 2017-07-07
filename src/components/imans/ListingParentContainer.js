import React from 'react';
import ReactDOM from 'react-dom';

import ListingInfoContainer from "./ListingInfo/ListingInfoContainer";
import UserProfileInfoContainer from "./UserProfileInfo/UserProfileInfoContainer";
import UPListingsContainer from "./UserProfileListings/UPListingsContainer";


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
                    
                  <ListingButtonsContainer />

                </div>
              </div>

    );
  };
}
export default ListingParentContainer;

