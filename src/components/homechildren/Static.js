import React from 'react';

import Filterbox from "./staticchildren/Filterbox";

import Roombox from "./staticchildren/Roombox";

import Bathroombox from "./staticchildren/Bathroombox";

import Datebox from "./staticchildren/Datebox";


class Static extends React.Component {

    render() {
        return (

        <div className="col-sm-6 staticdiv" id="static">
            <div className="staticdiv">
                <Filterbox/>
                <Roombox onUpdate={this.props.onUpdate}/>
                <Bathroombox onUpdate={this.props.onUpdate}/>
                <Datebox/>
            </div>
        </div>        

        );
    }
} 

export default Static;