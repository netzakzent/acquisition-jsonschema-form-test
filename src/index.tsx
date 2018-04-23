import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.js';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import AkquiseForm from './akquise/AkquiseForm'; 
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
