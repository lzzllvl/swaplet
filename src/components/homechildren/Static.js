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
                <Roombox onClick={this.props.increaseBedCount} onClick={this.props.decreaseBedCount}
                onChange={this.props.bedTotal} onChange={this.props.handleChange}
                />
                <Bathroombox onClick={this.props.increaseBathCount} onClick={this.props.decreaseBathCount}
                onChange={this.props.bathTotal} onChange={this.props.handleChange}

                />
                <Datebox/>
            </div>
        </div>        

        );
    }
} 

export default Static;

