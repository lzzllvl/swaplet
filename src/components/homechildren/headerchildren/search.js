// Import Dependencies using ES6
import React from "react";

class Search extends React.Component {

	render() {
		return (
			// THIS IS THE SEARCH COMPONENT
			<div className="search" id="search">

					<button className="btn-sm btn-info" onClick={this.props.handleSubmit}>Search</button>
					<input type="text" stateName="searchString" className="searchinput" onChange={this.props.handleChange} placeholder="Search a City"/>

			</div>
		
		);
	}
}

export default Search;