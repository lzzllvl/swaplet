import React, { Component } from "react";

class RangeSlider extends Component {
    render() {
        <RangeSlider
            componentId="RangeSliderSensor"
            appbaseField="guests"
            range={{
                "start": 0,
                "end": 10
            }}
        />
    }
};

module.exports = RangeSlider;