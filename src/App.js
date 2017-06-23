import React, { Component } from 'react';

import ReactDOM from 'react-dom';
import {
    ReactiveBase,
    DateRange,
    NumberBox,
    RangeSlider,
    ToggleList,
    ResultCard
} from '@appbaseio/reactivesearch';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';


class Main extends Component {
    render() {
        return (
            <div className="fullWrapper" style={{'margin':'0'}}>
                <ReactiveBase
                    app=""
                    credentials=""
                    type="lsiting"
                    theme=""
                >
                    <nav>
                        {/*navbar stuff*/}
                    </nav>
                    <div className="bodyWrapper">
                        <div className="searchQueries">
                            <DateRange
                                componentId="DateSensor"
                                appbaseField="mtime"
                                title="When"
                                numberOfMonths={2}
                                allowAllDates={true}
                            />
                            <NumberBox
                                componentId="NumberBoxSensor"
                                appbaseField="guests"
                                title="NumberBox component"
                                data={{ "label": "Guests", "start": 0, "end": 5 }}
                                defaultSelected={0}
                                labelPosition="left"
                            />
                            <ToggleList
                                componentId="toggleComponent01"
                                appbaseField="housing_types"
                                title="Filter by Type"
                                data={[
                                {"label": "Swap", "value": "swap"},
                                {"label": "No Swap", "value": "noSwap"},
                                ]}
                                defaultSelected="swap"
                                multiSelect={false}  
                            />
                            <RangeSlider
                                componentId="RangeSliderSensor"
                                appbaseField="price"
                                title="Price Range"
                                stepValue={10}
                                range={{
                                    "start": 10,
                                    "end": 250
                                }}
                                rangeLabels={{
                                    start: '$10',
                                    end: '$250'
                                }}
                            />
                            <div className="results">
                                <ResultCard
                                    componentId="ResultCard01"
                                    title="Result Card"
                                    appbaseField="ratings"
                                    stream={true}  
                                    sortBy="desc"
                                    from={0}
                                    size={8}
                                    pagination={true}
                                    paginationAt="bottom"
                                    showResultStats={true}
                                    initialLoader="Loading Results.."
                                    noResults="No Matching Results Found!"
                                    react={{
                                        and: ["PriceFilter", "SearchFilter"]
                                    }}
                                    onData={this.onData}
                                />
                            </div>
                        </div>
                    </div>
                 </ReactiveBase>
            </div>
        )
    }
};

ReactDOM.render(<Main />, document.getElementById('app'));
