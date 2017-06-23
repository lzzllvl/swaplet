import React, { Component } from "react";

class ResultCard extends Component {
    render() {
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
    }
};

export default ResultCard;