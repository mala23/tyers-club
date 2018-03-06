import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter as Router } from 'react-router-dom'
import WebFont from 'webfontloader'
import App from './components/App'
import './index.css'

WebFont.load({
  typekit: {
    id: 'udz2ped'
  }
})

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'))
registerServiceWorker()
