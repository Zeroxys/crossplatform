import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below.
serviceWorker.unregister();
