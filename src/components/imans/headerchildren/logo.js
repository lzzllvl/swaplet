// Import Dependencies using ES6
import React from 'react';

class Logo extends React.component {
	render() {
		return (

		// Add this component to the header parent first
			<div class="navbar-header">
			    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navigation-example">
			        <span class="sr-only">Toggle navigation</span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			        <span class="icon-bar"></span>
			    </button>
			    <a class="navbar-brand" href="http://www.creative-tim.com">Creative Tim</a>
			</div>

		);
	}
}

export default Logo;