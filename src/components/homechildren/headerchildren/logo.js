// Import Dependencies using ES6
import React from 'react';

class Logo extends React.component {
	render() {
		return (

		// Add this component to the header parent first
			<div className="navbar-header headerchildren">
			    <button type="button" className="navbar-toggle header" data-toggle="collapse" data-target="#navigation-example">
			        <span className="sr-only">Toggle navigation</span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			        <span className="icon-bar"></span>
			    </button>
			    <a class="navbar-brand" href="http://www.creative-tim.com">Creative Tim</a>
			</div>

		);
	}
}

export default Logo;