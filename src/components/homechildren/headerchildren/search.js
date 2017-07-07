// Import Dependencies using ES6
import React from "react";

class Search extends React.Component {

	render() {
		return (
			// THIS IS THE SEARCH COMPONENT
			<div className="search" id="search">

					<button className="btn-sm btn-info" onClick={this.clickHandler}>Search{this.props.buttonTxt}</button>
					<input type="text" className="form-control searchinput" placeholder="Search a City"/>

			</div>






			
	          /*<div className="headerchilren">
	            <form className="navbar-form">
				  <div className="form-group label-floating">
	                <input type="text" ref="searchBox" className="form-control" placeholder={this.props.hint} />
	                <button className="btn btn-info" onClick={this.clickHandler}>{this.props.buttonTxt}</button>
	              </div>
	            </form>
	          </div>
			*/
		);
	}
}

export default Search;