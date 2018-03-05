import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader'
import App from './components/App';
import './index.css'

WebFont.load({
  typekit: {
    id: 'udz2ped'
  }
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
