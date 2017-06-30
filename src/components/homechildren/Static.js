import React from 'react';

import Filterbox from "./staticchildren/Filterbox";

import Roombox from "./staticchildren/Roombox";

import Bathroombox from "./staticchildren/Bathroombox";

import Datebox from "./staticchildren/Datebox";


class Static extends React.Component {
    render() {
        return (

        <div className="container">
        	<Filterbox/>
        	<Roombox/>
        	<Bathroombox/>
        	<Datebox/>
        </div>

        );
    }
} 

export default Static;