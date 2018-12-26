import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'unstated'
import UNSTATED from 'unstated-debug';
import { BrowserRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css';
import { unregister as unregisterServiceWorker } from './registerServiceWorker'
ReactDOM.render(
  <Provider>
    <BrowserRouter >
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-root')
)
unregisterServiceWorker();
