import React, { Component } from "react";

class RangeSlider extends Component {
    render() {
        <RangeSlider
            componentId="RangeSliderSensor"
            appbaseField="price"
            title="Price Range"
            stepValue={10}
            range={{
                "start": 10,
                "end": 250
            }}
        />
    }
};

module.exports = RangeSlider;