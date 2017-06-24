import React from 'react';

class Switcher extends React.Component {
  render() {
    return (
      <div class="container">
        <a class="" href="/s/all" role="tab" aria-selected="true"><span>ALL</span></a>
        <a class="" href="/s/homes" role="tab" aria-selected="false"><span>SWAPS</span></a>
        <a class="" href="/s/experiences" role="tab" aria-selected="false"><span>SUBLETS</span></a>
      </div>
    )
  }
};

export default Switcher;