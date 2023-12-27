import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import 'mapbox-gl/dist/mapbox-gl.css';
import { Provider } from 'react-redux'
import store from './Store/Store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>

      <App />
    </Provider>
  </BrowserRouter>,
)
