import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from 'react-highlight';

import UserProfileImage from "./UserProfileImage/UserProfileImage";
import UserProfileInfoContainer from "./UserProfileInfo/UserProfileInfoContainer";
import UPListingsContainer from "./UserProfileListings/UPListingsContainer";


class UserProfile extends React.Component {
  constructor(props){
    super(props);
    
  }

  render() {
      return (
            
          <div className="container">
            <div className="row">
              
              <UserProfileImage />

              <UserProfileInfoContainer />
                
              <UPListingsContainer />

            </div>
          </div>

    );
  };
}
export default UserProfile;

