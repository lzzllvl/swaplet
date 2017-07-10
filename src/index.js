import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProfile from './components/imans/UserProfileParent';
import Home from './components/Home';
import ListingParentContainer from './components/imans/ListingParentContainer';
import { Router, Route, Switch, hashHistory } from 'react-router';
import LoginForm from "./components/Forms/Base/LoginForm.js";
import SignUpFormWrapper from "./components/Forms/SignUpFormWrapper.js";
import registerServiceWorker from './registerServiceWorker';
import './index.css';



ReactDOM.render(
    (<Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/home" component={Home}/>
          <Route path="/login" component={LoginForm}/>
          <Route path='/signup' component={SignUpFormWrapper}/> 
        </Route>
      </Router>), document.getElementById('root'));
registerServiceWorker();
