import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ApiWrapper from './ApiWrapper.js';
var $ = require('jquery')
$.ajaxSetup({
  async: false
});

var results = ApiWrapper.makeCall({language:"english"})
console.log(results)
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
