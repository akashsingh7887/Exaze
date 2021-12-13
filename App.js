import React from 'react';
import App from './src/navigators/rootNavigator';
import {Provider} from 'react-redux';

import configureStore from './src/redux/store';

const store = configureStore();

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
);
