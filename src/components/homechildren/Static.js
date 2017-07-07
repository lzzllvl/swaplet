import React from 'react';

import Filterbox from "./staticchildren/Filterbox";

import Roombox from "./staticchildren/Roombox";

import Bathroombox from "./staticchildren/Bathroombox";

import Datebox from "./staticchildren/Datebox";


class Static extends React.Component {
    render() {
        return (

        <div className="col-sm-6" id="static">
            <div className="staticdiv">
                <Filterbox/>
                <Roombox/>
                <Bathroombox/>
                <Datebox/>
            </div>
        </div>        

        );
    }
} 

export default Static;

