// everything comes together here

import React from 'react';

import Header from "./homechildren/Header";

import Static from "./homechildren/Static";

import Listings from "./homechildren/Listings";




class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchString: '',
      listingType: '',
      bedCount: 1,
      bathCount: 1
    }
  }

  onUpdate (name, value) {
    this.setState({[name] : value});
    console.log(name + " = " + value);
  }

  render () {
    return (

          <div className="container">

            <Header onClick={this.handleSubmit} onChange={this.handleChange}/>
            <div className="row" id="home">   
                  <Static onUpdate={this.onUpdate.bind(this)}/>
                  <Listings
                    searchString={this.state.searchString}
                    listingType={this.state.listingType}
                    bedCount={this.state.bedCount}
                    bathCount={this.state.bathCount}/>
            </div>
        </div>
    )
}
}

export default Home;