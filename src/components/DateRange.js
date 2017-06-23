import React, { Component } from "react";


class DateRange extends Component {
    
    render() {
        return (
            <DateRange
                componentId="DateSensor"
                appbaseField="mtime"
                title="DatePicker"
                numberOfMonths={2}
                allowAllDates={true}
            />
        )
    }
};

export default DateRange;