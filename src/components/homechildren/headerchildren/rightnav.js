import React from 'react';

class Rightnav extends React.Component {
    render() {
        return (

            // Add this component to the header parent, after the logoseach component
            <div className="collapse navbar-collapse headerchildren" id="navigation-example">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="../components-documentation.html" target="_blank">
                            Components
                        </a>
                    </li>
                    <li>
                        <a href="http://demos.creative-tim.com/material-kit-pro/presentation.html?ref=utp-freebie" target="_blank">
                            <i className="material-icons">unarchive</i> Upgrade to PRO
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/CreativeTim" target="_blank" class="btn btn-simple btn-white btn-just-icon">
                            <i className="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/CreativeTim" target="_blank" class="btn btn-simple btn-white btn-just-icon">
                            <i className="fa fa-facebook-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/CreativeTimOfficial" target="_blank" class="btn btn-simple btn-white btn-just-icon">
                            <i className="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        );
    } 
}
export default Rightnav;

