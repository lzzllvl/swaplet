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
        	    <div className="row staticChildren">
                   <DateRange
                        onInit={this.handleSelect}
                        onChange={this.handleSelect}
				    />
				</div>
        );
    }
} 

export default Datebox;