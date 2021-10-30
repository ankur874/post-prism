import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';
import { configureStore } from './store';

let store=configureStore();
console.log('main index.js second',store);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



