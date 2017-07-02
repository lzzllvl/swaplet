import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserProfile from './components/imans/UserProfileParent';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<UserProfile />, document.getElementById('root'));
registerServiceWorker();
