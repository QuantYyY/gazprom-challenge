import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

import App from './components/App';
import Headers from './components/Headers/Headers';


ReactDOM.render(
  <BrowserRouter>
    <Theme preset={presetGpnDefault}>
      <Headers/>
        <App />
    </Theme>
  </BrowserRouter>,
  
  document.getElementById('app'),
);