import React from 'react';
import { DateRange } from 'react-date-range';

// react-dates go here
class Datebox extends React.Component {

handleSelect(range){
		console.log(range);
		// An object with two keys,
		// 'startDate' and 'endDate' which are Momentjs objects.
	}

render() {
        return (
        	    <div className="row staticChildren text-center">
                   <h4 className="rbc-title col s12">Date Range</h4>
                   <DateRange
                        calendars={1}
                        onInit={this.handleSelect}
                        onChange={this.handleSelect}
				    />
				</div>
        );
    }
} 

export default Datebox;