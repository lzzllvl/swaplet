import React from 'react';

import Bbox from "../bathboxchildren/Bbox";

class Bathroombox extends React.Component {
    render() {
        return  (

	    <div className="row">
	    	<h4 className="rbc-title col s12 col-xs-12">Bathrooms</h4>
			<Bbox/>
		</div>

        );
    }
} 

export default Bathroombox;