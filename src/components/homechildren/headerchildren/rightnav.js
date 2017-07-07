import React from 'react';

class Rightnav extends React.Component {
    render() {
        return (

            // Add this component to the header parent, after the logoseach component
            <div className="rightnav" id="rightnav">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="" target="_blank">
                             Home
                        </a>
                    </li>
                    <li>
                        <a href="" target="_blank">
                             Profile
                        </a>
                    </li>

                    <li>
                        <a href="" target="_blank">
                             Login
                        </a>
                    </li>
                </ul>
            </div>
        );
    } 
}
export default Rightnav;

