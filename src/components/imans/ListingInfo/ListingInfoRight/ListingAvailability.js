import React from 'react';
import ReactDOM from 'react-dom';

import Datebox from './Datebox';


class ListingAvailability extends React.Component {
	constructor(props){
		super(props);
		
	}

    render() {
        return (
              
			<div className="col col-xs-4">
				
				<Datebox />

	        </div>

    );
  };
}
export default ListingAvailability;