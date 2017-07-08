// everything comes together here

import React from 'react';

import Header from "./homechildren/Header";

import Static from "./homechildren/Static";

import Listings from "./homechildren/Listings";

import LoginForm from "./Forms/LoginForm.js";

import SignUpForm from "./Forms/SignUpForm.js";


class Home extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
		  searchString: '',
		  listingType: '',
		  bedCount: 1,
		  bathCount: 1
	}

	      this.handleChange = this.handleChange.bind(this);
	      this.handleSubmit = this.handleSubmit.bind(this);
	      this.increaseBedCount = this.increaseBedCount.bind(this);
	      this.decreaseBedCount = this.decreaseBedCount.bind(this);
	      this.increaseBathCount = this.increaseBathCount.bind(this);
	      this.decreaseBathCount = this.decreaseBathCount.bind(this);

}

	    onUpdate (data) {
	    	this.setState({ data })
	   }

	    handleChange(event) {
	    	console.log(event.target);
	      // this.setState({event.target.attr.searchName: event.target.value});
	      this.setState({searchString: event.target.value});
	    }

	    handleSubmit(event) {
	      // alert('A name was submitted: ' + this.state.value);
	      event.preventDefault();
	  	}
	  	//FOR BEDCOUNT AND ROOMCOUNT BUTTONS

        componentWillMount() {
        	this.recalculateBedTotal();
        }

        increaseBedCount() {
            this.setState({bedCount: this.state.bedCount + 1}, this.recalculateBedTotal);
        }

        decreaseBedCount() {
            let newCount = this.state.bedCount > 0 ? this.state.bedCount - 1 : 0;
            this.setState({bedCount: newCount}, this.recalculateBedTotal);
        }

        recalculateBedTotal() {
            this.setState({bedTotal: this.state.bedCount + this.props.bedTotal});
        }

        // componentWillMount() {
       	//  	this.recalculateBathTotal();
        // }

        increaseBathCount() {
            this.setState({bedCount: this.state.bathCount + 1}, this.recalculateBathTotal);
        }

        decreaseBathCount() {
            let newCount = this.state.bathCount > 0 ? this.state.bathCount - 1 : 0;
            this.setState({bathCount: newCount}, this.recalculateBathTotal);
        }

        recalculateBathTotal() {
            this.setState({bathTotal: this.state.bathCount + this.props.bathTotal});
        }


<<<<<<< Updated upstream

    render() {
        return (

             <div>
                <div>
	                <Header onClick={this.handleSubmit} onChange={this.handleChange}/>
	                <div className="row" id="home">                       
	                    
	                    <Static onClick={this.increaseBedCount} onClick={this.decreaseBedCount} 
	                    		onClick={this.increaseBathCount} onClick={this.decreaseBathCount}
	                    		onChange={this.bedTotal} onChange={this.bathTotal} onChange={this.handleChange}
	                    />
	                    <Listings searchString={this.state.searchString} />

	                </div>
                </div>
                <LoginForm />
                <SignUpForm />
            </div>

        );
    }
} 
=======
		 render () {
		    return (
		      <div>
		        <Static onUpdate={this.onUpdate.bind(this)}/>
		        <Listings
		          searchString={this.state.searchString}
		          listingType={this.state.listingType}
		          bedCount={this.state.bedCount}
		          bathCount={this.state.bathCount}/>
		      </div>
		    )
		}
}
>>>>>>> Stashed changes

export default Home;