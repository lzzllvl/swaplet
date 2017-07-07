// everything comes together here

import React from 'react';

import Header from "./homechildren/Header";

import Static from "./homechildren/Static";

import Listings from "./homechildren/Listings";

import ImageUploadArea from "./Forms/children/ImageUploadArea.js";


class Home extends React.Component {
    render() {
        return (

             <div className="section">
                <div className="container">
                <Header/>
                    <div className="row" id="home">
                        
	                    
	                    <Static/>
	                    <Listings/>
	         

                    </div>
                </div>
                <ImageUploadArea type="Profile"/>
            </div>

        );
    }
} 

export default Home;