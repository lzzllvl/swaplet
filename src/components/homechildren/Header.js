import React from 'react';

//headerchildren may need to be capitalized
import Search from './headerchildren/search';

import Rightnav from './headerchildren/rightnav';

// THIS IS THE HEADER PARENT COMPONENT
// ADD THE HEADER CHILDREN BELOW

class Headerparent extends React.Component {
//Props
  constructor(props) {
    super(props);
    this.search = this.searchUser.bind(this);
  }
  searchUser(username) {
    console.log(username);
  }

  render() {

    return (


      <div className="container" role="navigation">
        <div className="bar">
          <div className="">
            {this.props.title}
          </div>
          	<Search/>
		    <Rightnav/>
          </div>
      </div>



      	/*<nav className="navbar navbar-transparent navbar-absolute">
		    <div className="container-fluid">
		    	<Search/>
		     	<Rightnav/>
		     </div>
		</nav> 
		*/
    );
  }
}

<<<<<<< Updated upstream
=======
//Nav Prototypes
/*
NavBar.propTypes = {
  title: React.PropTypes.string,
  hint: React.PropTypes.string,
  buttonTxt: React.PropTypes.string,
  onClickHandler: React.PropTypes.func
};

NavBar.defaultProps = {
  title: 'SWAPLET',
  hint: 'Choose a location',
  buttonTxt: 'Search',
  onClickHandler: () => {}
};
*/


// Export the component back for use in other files
>>>>>>> Stashed changes
export default Headerparent;


