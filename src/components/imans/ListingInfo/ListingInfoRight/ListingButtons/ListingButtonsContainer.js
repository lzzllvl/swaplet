import React from 'react';
import ReactDOM from 'react-dom';


import SwapButton from "./SwapButton";
import SubletButton from "./SubletButton";


class ListingButtonsContainer extends React.Component {
	constructor(props){
		super(props);
		
	}

    render() {
        return (
              
			<div className="col col-xs-12">

				<SwapButton />
				<SubletButton />

	        </div>

    );
  };
}
export default ListingButtonsContainer;