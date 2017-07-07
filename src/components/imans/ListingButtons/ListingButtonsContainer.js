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
              
			<div className="">

				<SwapButton />
				<SubletButton />

	        </div>

    );
  };
}
export default ListingButtonsContainer;