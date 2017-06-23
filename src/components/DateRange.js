var React = require('react');


class DateRange extends Component {
    
    render() {
        <DateRange
            componentId="DateSensor"
            appbaseField="mtime"
            title="DatePicker"
            numberOfMonths={2}
            allowAllDates={true}
        />
    }
};

module.exports = DateRange;
