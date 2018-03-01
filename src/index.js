import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const root = document.querySelector('#root');

ReactDOM.render(<App />, root);

registerServiceWorker();
