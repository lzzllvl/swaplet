import React from 'react';
import ReactDOM from 'react-dom';
import Highlight from 'react-highlight';
import {RIEInput, RIEToggle, RIETextArea, RIENumber, RIETags, RIESelect} from './REI/riet.js';

class UserProfile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: 'San Diego, CA',
      name : "Example text value",
      textarea : `Iman is known for his great sense of humor. In fact, he has been acknowledged by comedy legends as possessing a sense of humor that is far superior to that of a normal plebeian. His jokes are considered by many to be timeless, reminiscent of the jokes curated by the likes of Gene Wilder and Richard Pryor. A great majority of people consider his comedic approach to be Eddie Murphy-esque, with his frequent use of social realism and profanity. Filling stadiums across the globe to max capacity, his stadium-filling shows produce laughs so loud that he's in the Guinness Book of World Records, having reached 145.2 decibels during his stop at Staples Center in 2017. 
`,
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

  render = () => {
    let xhrDelaySwitch = (this.state.simulateXHR) ? <li>XHR delay: <RIENumber value={this.state.XHRDelay} change={this.changeState} validate={this.isValidXHRDelay} propName="XHRDelay" className="editable-pill" format={this.formatMillisecondsAppend} /></li> : null;
    return (
      <div className="container">
        <div className="row">

          <div className="col col-xs-12 col-sm-4">

            <img className="profileImg" src={this.state.imageSRC}/>

          </div>

          <div className="col col-xs-12 col-sm-8">

            <h2 className="nameField">
              <RIEInput
                value={this.state.name}
                change={this.virtualServerCallback}
                propName="text"
                className={this.state.highlight ? "editable" : ""}
                classLoading="loading"
                classInvalid="invalid"
                isDisabled={this.state.isDisabled} />
            </h2>

            <h4 className="locationField">
              <RIEInput
                value={this.state.location}
                change={this.virtualServerCallback}
                propName="text"
                className={this.state.highlight ? "editable" : ""}
                classLoading="loading"
                classInvalid="invalid"
                isDisabled={this.state.isDisabled} />
            </h4>

            <p className="bioField">
              <RIETextArea
                value={this.state.textarea}
                change={this.virtualServerCallback}
                propName="textarea"
                className={this.state.highlight ? "editable" : ""}
                validate={this.isStringAcceptable}
                classLoading="loading"
                classInvalid="invalid"
                isDisabled={this.state.isDisabled} />
            </p>



          </div>





        </div>
      </div>
    )
  };
}

export default UserProfile;

