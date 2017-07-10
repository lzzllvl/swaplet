import React from 'react';

class Bathroombox extends React.Component {
	constructor (props) {
	    super(props)
	    this.state = {
	      bathCount: 1
	    }
  	}

    plus() {
	    this.state.bathCount += 1;
	    console.log('Increase Bath Count: ' + this.state.bathCount);
	      this.props.onUpdate('bathCount', this.state.bathCount);
    }
  
    minus() {
	    if (this.state.bathCount > 1) {
	        this.state.bathCount -= 1;
	      console.log('Decrease Bath Count: ' + this.state.bathCount);
	      this.props.onUpdate('bathCount', this.state.bathCount);
	    }
    }

    render() {
        return  (

            <div className="row staticChildren text-center">
	            <h4 className="rbc-title col s12 col-xs-12">Bathrooms</h4>
	                <div className="rbc-numberbox-container col s12 col-xs-12">
	                  <div className="rbc-label"></div>
	                  <div className="rbc-numberbox-btn-container">
	                      <button onClick={this.minus.bind(this)} className="btn rbc-btn rbc-btn-active">
			              <span className="fa fa-minus rbc-icon"></span>
			              </button>
			              <span className="rbc-numberbox-number">{this.state.bathCount}</span>
			              <button onClick={this.plus.bind(this)}  className="btn rbc-btn rbc-btn-active">
			              <span className="fa fa-plus rbc-icon"></span>
			            </button>
	                  </div>
	                </div>
            </div>
        );
    }

} 

export default Bathroombox;