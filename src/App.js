import Home from './components/Home';
import logo from './logo.svg';
import './App.css';
import React from 'react';
import './App.css';
import { Link } from 'react-router';



class App extends React.Component {
  render() {
    return (
        <div>
          <h1>Swaplet</h1>
          <ul role="nav">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>

          
          {this.props.children}

        </div>
    )
  }
}

export default App;
