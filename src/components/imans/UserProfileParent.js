import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from 'react-highlight';
import NameField from "./NameField";
import LocationField from "./LocationField";
import BioField from "./BioField";



import {RIEInput, RIEToggle, RIETextArea, RIENumber, RIETags, RIESelect} from './REI/riet.js';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      select : {id: "1", text: "broccoli"},
      selectOptions : [
        {id: "1", text: "broccoli"},
        {id: "2", text: "arugula"},
        {id: "3", text: "leek"},
        {id: "4", text: "radish"},
        {id: "5", text: "watercress"},
        {id: "6", text: "dandelion"}
      ],
      boolean : true,
      number : 9000,
      text : "Enter Name",
      textarea : `Multiline example
  text value`,
      date : Date.now(),
      tags: new Set(["Bergen", "Asmara", "Göteborg", "Newcastle", "Seattle"]),
      simulateXHR: false,
      XHRDelay: 450,
      highlight: false,
      showSource: false,
      isDisabled: false,
      imageSRC: "https://a0.muscache.com/im/pictures/01e9708a-c075-48cb-a215-04ad41a5567d.jpg?aki_policy=profile_x_medium",
    };
  }

  virtualServerCallback = (newState) => {
    if (this.state.simulateXHR) {
    window.setTimeout(function() {
      this.changeState(newState);
    }.bind(this), this.state.XHRDelay);
    } else {
    this.changeState(newState);
    }
  };

  changeState = (newState) => {
    this.setState(newState);
  };

  isStringAcceptable = (string) => {
    return (string.length >= 1);  // Minimum 4 letters long
  };

  isStringEvenNumber = (string) => {
    var number = parseInt(string);
    if (isNaN(number) || !isFinite(number)) return false;
    return number % 2 == 0;
  };

  isValidXHRDelay = (text) => {
    let number = parseInt(text);
    if (isNaN(number)) return false;
    return (0 < number) && (number < 50000);
  };

  formatInteger = (number) => {
    return number.toString() + " feet";
  };

  formatMillisecondsAppend = (text) => {
    return text + " ms";
  };

    render() {
        return (
              
              <div className="container">
                <div className="row">
                  <div className="col col-xs-12 col-sm-4">
                    <img className="profileImg" src={this.state.imageSRC}/>
                  </div>

                  <div className="col col-xs-12 col-sm-8 profileInfo">
                    
                    <NameField />

                    <LocationField />

                    <hr />

                    <h3 className="bioFieldHeader">About Me</h3>                      
                    <BioField />

                  </div>

                </div>
              </div>

    );
  };
}
export default UserProfile;

