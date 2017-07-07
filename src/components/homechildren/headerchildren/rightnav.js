import React from 'react';

class Rightnav extends React.Component {
    render() {
        return (

            // Add this component to the header parent, after the logoseach component
            <div className="rightnav" id="rightnav">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="" target="_blank">
                            <i className="material-icons">unarchive</i> Home
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                            <i className="material-icons">unarchive</i> Profile
                        </a>
                    </li>

                    <li>
                        <a href="" target="_blank">
                            <i className="material-icons">unarchive</i> Login
                        </a>
                    </li>
                </ul>
            </div>
        );
    } 
}
export default Rightnav;

