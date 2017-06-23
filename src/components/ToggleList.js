import React, { Component } from "react";

class ToggleList extends Component {
    render() {
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
    }
};

module.exports = ToggleList;