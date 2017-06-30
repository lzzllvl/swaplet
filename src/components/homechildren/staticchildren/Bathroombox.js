import React from 'react';

class Bathroombox extends React.Component {
    render() {
        return  (

	    <div className="row">
	    	<h4 className="rbc-title col s12 col-xs-12">Bathrooms</h4>
			<div className="rbc-numberbox-container col s12 col-xs-12">
			   <div className="rbc-label"></div>
			    <div className="rbc-numberbox-btn-container">
			      <button className="btn rbc-btn rbc-btn-active">
			        <span className="fa fa-minus rbc-icon"></span>
			      </button>
			      <span className="rbc-numberbox-number">1</span>
			      <button className="btn rbc-btn rbc-btn-active">
			        <span className="fa fa-plus rbc-icon"></span>
			      </button>
			    </div>
			 </div>
		</div>

        );
    }
} 

export default Bathroombox;