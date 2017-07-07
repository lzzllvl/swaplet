import React from 'react';

class Switcher extends React.Component {
  render() {
    return (
      <div className="container headerchildren">
        <a className="" href="/s/all" role="tab" aria-selected="true"><span>ALL</span></a>
        <a className="" href="/s/homes" role="tab" aria-selected="false"><span>SWAPS</span></a>
        <a className="" href="/s/experiences" role="tab" aria-selected="false"><span>SUBLETS</span></a>
      </div>
    )
  }
};

export default Switcher;