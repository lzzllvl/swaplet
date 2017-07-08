import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProfile from './components/imans/UserProfileParent';
import Home from './components/Home';
import ListingParentContainer from './components/imans/ListingParentContainer';


import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
