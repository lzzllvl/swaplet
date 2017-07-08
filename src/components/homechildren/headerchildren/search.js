// Import Dependencies using ES6
import React from "react";

class Search extends React.Component {

	render() {
		return (
			// THIS IS THE SEARCH COMPONENT
			<div className="search col-sm-4" id="search">

					<div className="logo">Swaplet</div>
					<div>
						<input type="text" stateName="searchString" className="searchinput input btn" onChange={this.props.handleChange} placeholder="Destination"/>
						<button className="btn btn-info" onClick={this.props.handleSubmit}>Search</button>
					</div>

			</div>
		
		);
	}
}

export default Search;