import React from 'react';

//headerchildren may need to be capitalized
import Search from './headerchildren/search';

import Rightnav from './headerchildren/rightnav';

import Switcher from './headerchildren/switcher';

// THIS IS THE HEADER PARENT COMPONENT
// ADD THE HEADER CHILDREN BELOW

class Headerparent extends React.Component {

  render() {

    return (

      <div className="container">
		<nav class="navbar navbar-transparent navbar-absolute">
		    <div class="container">
		    	<Search/>
		    	<Rightnav/>
		    	<Switcher/>
		    </div>
		</nav>
      </div>
    );
  }
}

// Export the component back for use in other files
export default Headerparent;


