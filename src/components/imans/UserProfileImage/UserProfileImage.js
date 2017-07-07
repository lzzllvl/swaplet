import React from 'react';
import ReactDOM from 'react-dom';


class UserProfileImage extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			imageSRC: "https://a0.muscache.com/im/pictures/01e9708a-c075-48cb-a215-04ad41a5567d.jpg?aki_policy=profile_x_medium",
		};
	}

    changeState = (newState) => {
    	this.setState(newState);
  	};

    render() {
        return (
              
			<div className="col col-xs-12 col-sm-4">
				<img className="profileImg" src={this.state.imageSRC}/>
			</div>
		);
	};
}
export default UserProfileImage;
