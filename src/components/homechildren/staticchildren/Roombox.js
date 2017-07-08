import React from 'react';

class Roombox extends React.Component {
	constructor (props) {
	    super(props)
	    this.state = {
	      bedCount: 1
	    }
  	}

    plus() {
	    this.state.bedCount += 1;
	    console.log('Increase Bed Count: ' + this.state.bedCount);
	      this.props.onUpdate('bedCount', this.state.bedCount);
    }
  
    minus() {
	    if (this.state.bedCount > 1) {
	        this.state.bedCount -= 1;
	      console.log('Decrease Bed Count: ' + this.state.bedCount);
	      this.props.onUpdate('bedCount', this.state.bedCount);
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
			              <span class="rbc-numberbox-number">{this.state.bedCount}</span>
			              <button onClick={this.plus.bind(this)}  className="btn rbc-btn rbc-btn-active">
			              <span className="fa fa-plus rbc-icon"></span>
			            </button>
	                  </div>
	                </div>
            </div>
        );
    }

  render() {
    return (
      <div className="row staticChildren text-center">
        <h4 className="rbc-title col s12 col-xs-12">Rooms</h4>
        <div className="rbc-numberbox-container col s12 col-xs-12">
          <div className="rbc-label"></div>
          <div className="rbc-numberbox-btn-container">
            <button onClick={this.minus.bind(this)} className="btn rbc-btn rbc-btn-active">
              <span className="fa fa-minus rbc-icon"></span>
            </button>
            <span className="rbc-numberbox-number">{this.state.bedCount}</span>
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