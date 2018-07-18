import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import Gallery from './containers/GalleryContainer'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css'

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <Gallery />
  </Provider>,
  document.getElementById('root')
)
