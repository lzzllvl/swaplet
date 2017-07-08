import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap-carousel/dist/bootstrap.min.css';
import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
 
class ListingImageCarousel extends React.Component {
    constructor(props) {
        super(props);
    }
    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }
    render() {
      return(
        <div style={{height:400,margin:20}}>
          <React_Bootstrap_Carousel
            animation={true}
            onSelect={this.onSelect}
            className="carousel-fade"
          >
            <div style={{height:400,width:"100%",backgroundColor:"skyblue"}}>
              Bitches
            </div>
            <div style={{height:400,width:"100%",backgroundColor:"aqua"}}>
              Ain't
            </div>
            <div style={{height:400,width:"100%",backgroundColor:"lightpink"}}>
              Shit
            </div>
          </React_Bootstrap_Carousel>
        </div>
      )
    }
};
export default ListingImageCarousel;