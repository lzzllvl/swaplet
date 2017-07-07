// everything comes together here

import React from 'react';

import Header from "./homechildren/Header";

import Static from "./homechildren/Static";

import Listings from "./homechildren/Listings";


class Home extends React.Component {

    constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
      this.setState({value: event.target.value});
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
                        <Listings/>

                    </div>
                </div>
            </div>

        );
    }
} 

export default Home;