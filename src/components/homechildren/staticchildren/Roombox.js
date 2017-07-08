import React from 'react';

class Roombox extends React.Component {
	plus() {
	  let rc = this.refs.roomCount.getDOMNode();
	  rc.value = Number.parseInt(rc.value) + 1;
	  this.props.onUpdate(rc.value);
	}
	minus() {
	  let rc = this.refs.roomCount.getDOMNode();
	  if (Number.parseInt(rc.value) > 1) {
	      rc.value = Number.parseInt(rc.value) - 1;
	      this.props.onUpdate(rc.value);
	  }
	}

    render() {
        return  (

    	    <div className="row staticChildren text-center">
    	    	<h4 className="rbc-title col s12 col-xs-12">Rooms</h4>
				<div className="rbc-numberbox-container col s12 col-xs-12">
				   <div className="rbc-label"></div>
				    <div className="rbc-numberbox-btn-container">
					  <button onClick={this.minus.bind(this)} className="btn rbc-btn rbc-btn-active">
                        <span className="fa fa-minus rbc-icon"></span>
                      </button>
						<input type='text' ref='roomCount' className='roomCount' value="1"/>
				      <button onClick={this.plus.bind(this)}  className="btn rbc-btn rbc-btn-active">
                        <span className="fa fa-plus rbc-icon"></span>
                      </button>
				    </div>
				 </div>
			</div>

        );
    }

} 

export default Roombox;