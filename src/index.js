import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { unregister as unregisterServiceWorker } from './registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('react-root'));
unregisterServiceWorker();
