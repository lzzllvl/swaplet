import React from 'react';
import ReactDOM from 'react-dom';


import NameField from "./NameField";
import LocationField from "./LocationField";
import BioField from "./BioField";

class UserProfileInfoContainer extends React.Component {
	constructor(props){
		super(props);
		
	}

    render() {
        return (
              
			<div className="col col-xs-12 col-sm-8 profileInfo">
	            <NameField />

	            <LocationField />

	            <hr />

	            <h3 className="bioFieldHeader">About Me</h3>                      
                    
                <BioField />


	        </div>

    );
  };
}
export default UserProfileInfoContainer;