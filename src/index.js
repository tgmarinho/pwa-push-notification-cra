import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { inicializarFirebase } from './push-notification'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
inicializarFirebase();
registerServiceWorker();
