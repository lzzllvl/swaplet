import React from 'react';

import Bbox from "../roomboxchildren/Rbox";

class Roombox extends React.Component {
    render() {
        return  (

        	    <div className="row">
        	    	<h4 className="rbc-title col s12 col-xs-12">Rooms</h4>
					<Rbox/>
				</div>

        );
    }

} 

export default Roombox;