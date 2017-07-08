import React from 'react';

class Roombox extends React.Component {
    render() {
        return  (

    	    <div className="row staticChildren text-center">
    	    	<h4 className="rbc-title col s12 col-xs-12">Rooms</h4>
				<div className="rbc-numberbox-container col s12 col-xs-12">
				   <div className="rbc-label"></div>
				    <div className="rbc-numberbox-btn-container">
				      <button onChange={this.props.handleChange} className="btn rbc-btn rbc-btn-active">
				        <span className="fa fa-minus rbc-icon"></span>
				      </button>
				      <span onChange={this.props.handleChange} className="roomCount">1</span>
				      <button onChange={this.props.handleChange}  className="btn rbc-btn rbc-btn-active">
				        <span className="fa fa-plus rbc-icon"></span>
				      </button>
				    </div>
				 </div>
			</div>

        );
    }

} 

export default Roombox;