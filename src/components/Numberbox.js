var React = require('react');

class NumberBox extends Component {
    render() {
        <NumberBox
            componentId="NumberBoxSensor"
            appbaseField="guests"
            title="NumberBox component"
            data={{ "label": "Guests", "start": 0, "end": 5 }}
            defaultSelected={0}
            labelPosition="left"
        />
    }
};

module.exports = NumberBox;