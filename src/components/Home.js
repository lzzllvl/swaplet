// everything comes together here

import React from 'react';

import Header from "./homechildren/Header";

import Static from "./homechildren/Static";

import Listings from "./homechildren/Listings";


class Home extends React.Component {
    render() {
        return (

        <div className="container">
        	<Header/>
        	<Static/>
        	<Listings/>
        </div>

        );
    }
} 

export default Home;