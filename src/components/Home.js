// everything comes together here

import React from 'react';

import Header from "./homechildren/Header";

import Static from "./homechildren/Static";

import Listings from "./homechildren/Listings";


class Home extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
      	searchString: '',
      	listingType: '',
      	bedCount: 1,
  		bathCount: 1
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
    	console.log(event.target);
      // this.setState({event.target.attr.searchName: event.target.value});
      this.setState({searchString: event.target.value});
    }

    handleSubmit(event) {
      // alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
  }


    render() {
        return (

             <div className="section">
                <div className="container">
	                <Header onClick={this.handleSubmit} onChange={this.handleChange}/>
	                <div className="row" id="home">                       
	                    
	                    <Static/>
	                    <Listings searchString={this.state.searchString} />

	                </div>
                </div>
            </div>

        );
    }
} 

export default Home;