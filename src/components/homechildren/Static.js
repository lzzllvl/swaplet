import React from 'react';

import Filterbox from "./staticchildren/Filterbox";

import Roombox from "./staticchildren/Roombox";

import Bathroombox from "./staticchildren/Bathroombox";

import Datebox from "./staticchildren/Datebox";


class Static extends React.Component {
    update () {
      // Send value of 'myInput' to parent onUpdate method.
      this.props.onUpdate(this.refs.myInput.getDOMNode().value)
    }

    render() {
        return (

        <div className="col-sm-6 staticdiv" id="static">
            <div className="staticdiv">
                <Filterbox/>
                <Roombox onChange={this.props.handleChange}/>
                <Bathroombox onChange={this.props.handleChange}/>
                <Datebox/>
            </div>
        </div>        

        );
    }
} 

export default Static;

