import React from 'react';

import Pickdate from "../dateboxchildren/Pickdate";

// react-dates go here
class Datebox extends React.Component {
    render() {
        return (
        	    <div className="row">
					<Pickdate/>
				</div>
        );
    }
} 

export default Datebox;